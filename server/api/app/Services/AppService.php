<?php

namespace App\Services;

use App\Models\App;
use App\Models\Notification;
use App\Models\Score;
use App\Models\User;
use App\Models\UserRanking;
use App\Models\TitleUser;
use Illuminate\Support\Facades\DB;
use Throwable;

class AppService {

    public function getApps()
    {
        $apps = App::getApps();
        return $apps;
    }

    public function getAppsWithScore($userId)
    {
        $apps = App::getApps();
        foreach($apps as $app){
            $bestScore = $app->scores->first(function ($value) use ($userId){
                return $value->user_id == $userId;
            });
            isset($bestScore->score) ? $app->bestScore = $bestScore->score : $app->bestScore = 0;
            $app->questions = $app->questions->shuffle();
        }
        return $apps;
    }

    public function postScore($request, int $appId, int $userId)
    {

        DB::beginTransaction();
        try {
            Score::updateScore($request, $appId, $userId);
            User::updateLevel($request, $userId);
            DB::commit();
        } catch (Throwable $e) {
            DB::rollBack();
            throw $e;
        }
    }

    public function getRanking(int $appId, int $userId)
    {
        $scores = Score::getRanking($appId, $userId);
        $myScore = $scores->filter(function ($value) use ($userId){
            return $value->user_id == $userId;
        });
        $myRank = $myScore->keys()->first();
        $app = App::getApp($appId);

        if(isset($myRank)){
            $app->myRank = $myRank;
            $app->myScore = $myScore->first();
        }

        $app->ranking = $scores;

        return $app;
    }


    public function getBestScore($appId, $userId)
    {
        $query = Score::getBestScore($appId, $userId);
        $score = 0;
        if(isset($query->score)){
            $score = $query->score;
        };
        return $score;
    }

    public function getNotifications()
    {
        $notification = Notification::getNotifications();
        return $notification;
    }

    public static function resetRanking()
    {
        $apps = App::getAllApps();
        $firstUsers = [];
        $secondUsers = [];
        $thirdUsers = [];
        $topTenUsers = [];

        foreach($apps as $app){
            $scores = App::getTopScoreUsers($app->id);
            foreach($scores->scoresTen as $i => $score){
                if($i == 0){
                    array_push($firstUsers, $score);
                }else if($i == 1){
                    array_push($secondUsers, $score);
                }else if($i == 2){
                    array_push($thirdUsers, $score);
                }else{
                    array_push($topTenUsers, $score);
                }
            }
        }

        try{

            DB::beginTransaction();

            foreach($firstUsers as $firstUser){
                TitleUser::addTitleUser($firstUser, 1);
                UserRanking::incrementRanking($firstUser->user_id, "first");
            }
            foreach($secondUsers as $secondUser){
                TitleUser::addTitleUser($secondUser, 2);
                UserRanking::incrementRanking($secondUser->user_id, "second");
            }
            foreach($thirdUsers as $thirdUser){
                TitleUser::addTitleUser($thirdUser, 3);
                UserRanking::incrementRanking($thirdUser->user_id, "third");
            }
            foreach($topTenUsers as $topTenUser){
                TitleUser::addTitleUser($topTenUser, 10);
                UserRanking::incrementRanking($topTenUser->user_id, "top_ten");
            }

            Score::resetScores();


            DB::commit();
        } catch (Throwable $e) {
            DB::rollBack();
            throw $e;
        }
    }
}
