<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Services\UserService;
use App\Http\Resources\User\UserAppResource;
use App\Http\Resources\User\UserProfileResource;
use App\Http\Resources\User\RegisterResource;
use App\Http\Resources\User\TitleResource;

class UserController extends Controller
{
    protected $userService;

    public function __construct(UserService $userService) {
        $this->userService = $userService;
    }

    public function index()
    {
        //ユーザートップページ取得
        $userId = $this->getLoginUserId();
        $items = $this->userService->getUserTop($userId);

        return response()->success(new UserAppResource($items));
    }

    public function update(Request $request)
    {
        //ユーザー編集取得
        $userId = $this->getLoginUserId();
        $this->userService->updateUser($request, $userId);

        return response()->noContent();
    }

    public function profile(int $userId)
    {
        //ユーザー情報取得
        $user = $this->userService->getUserProfile($userId);

        return response()->success(new UserProfileResource($user));
    }

    public function create(Request $request)
    {
        // 会員登録
        $user = $this->userService->createUser($request);

        return response()->success(new RegisterResource($user));
    }

    public function titles()
    {
        //称号一覧取得
        $titles = $this->userService->getTitles();

        return response()->success(TitleResource::collection($titles));
    }

}
