<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Services\AppService;
use App\Http\Resources\App\AppResource;
use App\Http\Resources\App\AppWithScoreResource;
use App\Http\Resources\App\AppRankingResource;
use App\Http\Resources\App\NoPlayRankingResource;
use App\Http\Resources\App\NotificationResource;

use Exception;

class AppController extends Controller
{

    protected $appService;

    public function __construct(AppService $appService) {
        $this->appService = $appService;
    }

    public function index()
    {
        try{
            $userId = $this->getLoginUserId();
            $apps = $this->appService->getAppsWithScore($userId);
            return response()->success(AppWithScoreResource::collection($apps));
        }catch(Exception $e){
            $apps = $this->appService->getApps();
            return response()->success(AppResource::collection($apps));
        }
    }

    public function detail(int $appId)
    {
        $userId = $this->getLoginUserId();
        $score = $this->appService->getBestScore($appId, $userId);

        return response()->json(["bestScore" => $score], 200);

    }

    public function score(Request $request, int $appId)
    {
        $userId = $this->getLoginUserId();
        $this->appService->postScore($request, $appId, $userId);

        return response()->noContent();

    }

    public function ranking(int $appId)
    {
        $userId = $this->getLoginUserId();
        $app = $this->appService->getRanking($appId, $userId);

        if(isset($app->myRank)){
            return response()->success(new AppRankingResource($app));
        }else{
            return response()->success(new NoPlayRankingResource($app));
        }
    }

    public function notification()
    {
        $notification = $this->appService->getNotifications();
        return response()->success(NotificationResource::collection($notification));
    }
}
