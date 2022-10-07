<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;
use Throwable;

class AuthEmail extends Model
{
    use HasFactory;

    protected $table = 'auth_email';

    protected $fillable = [
        'email',
        'code',
    ];

    public static function getCode($request)
    {
        $query = self::where("email", $request->email)->first();
        return $query;
    }

    public static function createCode($request)
    {
        try {
            $isRegister = User::where("email", $request->email)->first();

            if(!$isRegister){
                $code = rand(100000, 999999);
                $auth = self::updateOrCreate(['email' => $request->email], ["code" => $code]);

            }else{

            }
        } catch (Throwable $e) {
            throw $e;
        }

        return $auth;
    }

    public static function deleteCode()
    {
        try {
            $oldCodes = self::where("created_at", "<", new Carbon('-1 hour'))->get();
            foreach($oldCodes as $oldCode){
                $oldCode->delete();
            }
        } catch (Throwable $e) {
            throw $e;
        }
    }

}
