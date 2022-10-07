<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\Auth;
class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    /**
     * 認証情報からユーザーIDを取得する
     *
     * @return int userId ログイン中のユーザーID
     */
    protected function getLoginUserId(): int
    {
        return Auth::user()->id;
    }

    /**
     * 認証情報からログイン判定
     *
     * @return bool
     */
    protected function getLoginstatus()
    {
        return Auth::check();
    }
}
