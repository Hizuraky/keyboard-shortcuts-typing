<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Throwable;

use Illuminate\Support\Facades\Hash;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $fillable = [
        'name',
        'icon',
        'email',
        'password',
        'level',
        'level_point',
        'play_time',
        'clear_times',
        'title_id',
    ];

    public function userRanking()
    {
        return $this->hasOne(UserRanking::class);
    }

    public function title()
    {
        return $this->belongsTo(Title::class);
    }

    public function scores()
    {
        return $this->hasMany(Score::class);
    }

    public function titleUsers()
    {
        return $this->hasMany(TitleUser::class)->orderBy("title_id","desc");
    }

    public static function updateLevel($request, int $userId)
    {
        try {
            $params = [
                'level' => $request->level,
                'level_point' => $request->levelPoint,
                'play_time' => $request->playTime,
                'clear_times' => $request->clearTimes
            ];

            self::find($userId)->update($params);

        } catch (Throwable $e) {
            throw $e;
        }
    }

    public static function updateUser($params, int $userId)
    {
        try {

            self::find($userId)->update($params);

        } catch (Throwable $e) {
            throw $e;
        }
    }

    public static function getUser(int $userId)
    {
        $query = self::find($userId);
        return $query;
    }

    public static function createUser($request)
    {
        try {
            $params = [
                'name' => $request->name,
                'icon' => "",
                'email' => $request->email,
                'title_id' => 19,
                'password' => Hash::make($request->password)
            ];

            $user = self::create($params);

            return $user;

        } catch (Throwable $e) {
            throw $e;
        }
    }

    public static function getUserProfile($userId)
    {
        $user = self::with("userRanking","titleUsers.title", "title")->find($userId);

        return $user;
    }

}
