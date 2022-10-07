<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserRanking extends Model
{
    use HasFactory;

    protected $table = 'user_ranking';

    protected $fillable = [
        'user_id',
        'first',
        'second',
        'third',
        'top_ten',
    ];

    public static function createUserRanking(int $userId)
    {
        $params = [
            'user_id' => $userId,
        ];

        self::create($params);
    }

    public static function incrementRanking(int $userId, string $rank)
    {
        self::where("user_id", $userId)->first()->increment($rank);
    }
}
