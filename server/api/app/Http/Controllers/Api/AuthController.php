<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Services\AuthService;
use App\Http\Resources\User\UserProfileResource;

class AuthController extends Controller
{

    protected $authService;

    public function __construct(AuthService $authService) {
        $this->authService = $authService;
    }

    public function email(Request $request)
    {
        $this->authService->sendEmail($request);
        return response()->noContent();
    }

    public function login(Request $request)
    {
        $user = $this->authService->login($request);
        return response()->success(new UserProfileResource($user));
    }

    public function logout(Request $request)
    {
        $this->authService->logout($request);
        return response()->noContent();
    }

}
