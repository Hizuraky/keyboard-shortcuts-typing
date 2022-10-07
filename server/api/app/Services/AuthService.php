<?php

namespace App\Services;

use Illuminate\Support\Facades\Auth;
use App\Models\AuthEmail;
use Illuminate\Auth\AuthenticationException;
use App\Models\User;
use Illuminate\Support\Facades\Mail;

class AuthService {

    public function sendEmail($request)
    {
        $auth = AuthEmail::createCode($request);
        $email = $auth->email;

        Mail::send('emails.mail', ["auth" => $auth], function($message) use($email){
            $message->to($email)
            ->subject('ks typing - 認証コード');
        });
    }

    public static function deleteCode()
    {
        AuthEmail::deleteCode();
    }

    public function login($request)
    {
        $credentials = request(['email', 'password']);

        if (!Auth::attempt($credentials)) {
            throw new AuthenticationException;
        }

        $request->session()->regenerate();
        $user = Auth::user();
        $user = User::getUserProfile($user->id);

        return $user;
    }

    public function logout($request)
    {
        Auth::guard('web')->logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
    }
}
