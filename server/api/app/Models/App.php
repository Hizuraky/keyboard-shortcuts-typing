<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Throwable;

class App extends Model
{
    use HasFactory;

    public function scores()
    {
        return $this->hasMany(Score::class);
    }

    public function scoresTen()
    {
        return $this->hasMany(Score::class)->orderBy("score","desc")->take(10);
    }

    public function questions()
    {
        return $this->hasMany(Question::class);
    }

    public static function getApps()
    {
        $query = self::with('questions.answers','scores')
                ->withCount('scores')
                ->orderBy("scores_count","desc")
                ->get();

        return $query;
    }

    public static function getApp(int $appId)
    {
        $query = self::find($appId);
        return $query;
    }

    public static function getAppDetail(int $appId)
    {
        $query = self::with('questions.answers')->find($appId);
        return $query;
    }

    public static function getNewApps()
    {
        $newApps = self::with('questions.answers','scores')
                ->orderBy("created_at", "desc")
                ->take(2)
                ->get();
        return $newApps;
    }

    public static function getAllApps()
    {
        $apps = self::get();
        return $apps;
    }

    public static function getTopScoreUsers(int $appId)
    {
        $apps = self::with("scoresTen")->find($appId);
        return $apps;
    }

    public static function getList()
    {
        $query = self::with("questions.answers")->get();
        return $query;
    }
}
