<?php

namespace App\Services;

use App\Models\App;
use App\Models\Score;
use App\Models\User;
use App\Models\Title;
use App\Models\AuthEmail;
use App\Models\Notification;
use App\Models\UserRanking;
use App\Models\TitleUser;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Throwable;
class UserService {

    public function getUserTop(int $userId)
    {
        $newApps = App::getNewApps();
        foreach($newApps as $app){
            $bestScore = $app->scores->first(function ($value) use ($userId){
                return $value->user_id == $userId;
            });
            isset($bestScore->score) ? $app->bestScore = $bestScore->score : $app->bestScore = 0;
            $app->questions = $app->questions->shuffle();
        }
        $playedApps = Score::getPlayedApps($userId);
        $notification = Notification::getNotifications();
        $items = [$newApps, $playedApps,$notification];

        return $items;
    }

    public function getUserProfile(int $userId)
    {
        $user = User::getUserProfile($userId);
        return $user;
    }

    public function updateUser($request, int $userId)
    {

        if (!preg_match("/https:/", $request->icon) && $request->icon != "") {

            $str1 = chr(mt_rand(97, 122));
            for($i = 0; $i < 10; $i++){
                $str1 .= chr(mt_rand(97, 122));
            }
            $name = $str1 ."_". date('y_m_d') . ".jpg";
            $data = explode(',', $request->icon);
            $fileData = base64_decode($data[1],true);
            Storage::disk('s3')->put($name, $fileData,'public');
            $fileUrl = "https://ks-icons.s3.ap-northeast-1.amazonaws.com/". $name;

            $params = [
                'name' => $request->name,
                'icon' => $fileUrl,
                'title_id' => $request->title_id,
            ];
            $user = User::getUser($userId);

            User::updateUser($params, $userId);

            if(preg_match("/https:/", $user->icon)){
                $oldIcon = explode("com/", $user->icon);
                Storage::disk('s3')->delete($oldIcon);
            }

        }else{
            $params = [
                'name' => $request->name,
                'icon' => $request->icon,
                'title_id' => $request->title_id,
            ];
            User::updateUser($params, $userId);
        }
    }

    public function createUser($request)
    {
        $auth = AuthEmail::getCode($request);

        if($auth && $auth->code == $request->code){
            DB::beginTransaction();

            try {
                $user = User::createUser($request);
                UserRanking::createUserRanking($user->id);
                TitleUser::createTitleUser($user->id);

                DB::commit();
            } catch (Throwable $e) {

                DB::rollBack();
                throw $e;
            }

            return $user;
        }
    }

    public function getTitles()
    {
        $titles = Title::getTitles();

        return $titles;
    }
}
