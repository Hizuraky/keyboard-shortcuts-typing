<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Throwable;

class Score extends Model
{
    use HasFactory;

    protected $table = 'score';


    protected $fillable = [
        'user_id',
        'app_id',
        'score',
    ];


    public function app()
    {
        return $this->belongsTo(App::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public static function updateScore($request, int $appId, int $userId)
    {

        $params = [
            'user_id' => $userId,
            'app_id' => $appId,
            'score' => $request->score,
        ];

        $query = self::where('user_id', $userId)->where('app_id', $appId)->first();

        if(isset($query)){
            if($request->score > $query->score){
                self::find($query->id)->update($params);
            }
        }else{
            self::create($params);
        };
    }

    public static function getRanking(int $appId)
    {
        $scores = self::with("user.title")->where("app_id", $appId)->orderBy("score", "desc")->get();

        return $scores;
    }

    public static function getPlayedApps(int $userId)
    {
        $playedApps = self::with("app.questions.answers","app.scores")
                ->where("user_id", $userId)
                ->inRandomOrder()
                ->take(2)
                ->get();

        return $playedApps;
    }

    public static function resetScores()
    {
        self::query()->delete();
    }

    public static function getBestScore($appId, $userId)
    {
        $score = self::where("app_id", $appId)->where("user_id", $userId)->first();
        return $score;
    }

}
