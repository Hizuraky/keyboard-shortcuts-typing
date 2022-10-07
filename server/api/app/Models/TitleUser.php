<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TitleUser extends Model
{
    use HasFactory;

    protected $table = 'title_user';

    protected $fillable = [
        'user_id',
        'title_id',
    ];

    public function title()
    {
        return $this->belongsTo(Title::class);
    }

    public static function addTitleUser($user, $place)
    {
        $titleId = 0;

        switch ($user->app_id){
            case 1 :
                $titleId = $place < 4 ? 1 : 2;
                break;
            case 2 :
                $titleId = $place < 4 ? 3 : 4;
                break;
            case 3 :
                $titleId = $place < 4 ? 5 : 6;
                break;
            case 4 :
                $titleId = $place < 4 ? 7 : 8;
                break;
            case 5 :
                $titleId = $place < 4 ? 9 : 10;
                break;
            case 6 :
                $titleId = $place < 4 ? 11 : 12;
                break;
            case 7 :
                $titleId = $place < 4 ? 13 : 14;
                break;
            case 8 :
                $titleId = $place < 4 ? 15 : 16;
                break;
        }

        $params = [
            'user_id' => $user->user_id,
            "title_id" => $titleId,
        ];

        $userTitles = self::with("title")->where("user_id", $user->user_id)->get();

        self::firstOrCreate($params);

        $hasMasterTitle = 0;
        $hasExpertTitle = 0;
        foreach($userTitles as $userTitle){
            strpos($userTitle->title->name, "Master") && $hasMasterTitle++;
            strpos($userTitle->title->name, "Expert") && $hasExpertTitle++;
        }

        $masterParams = [
            'user_id' => $user->user_id,
            "title_id" => 17,
        ];
        $hasMasterTitle > 2 && self::firstOrCreate($masterParams);
        $masterParams = [
            'user_id' => $user->user_id,
            "title_id" => 18,
        ];
        $hasExpertTitle > 2 && self::firstOrCreate($masterParams);

    }

    public static function createTitleUser($userId)
    {
        $params = [
            'user_id' => $userId,
            "title_id" => 19,
        ];

        self::create($params);
    }
}
