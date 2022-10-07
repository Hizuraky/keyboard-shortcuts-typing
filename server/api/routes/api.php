
<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\AppController;



/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group([
    'as' => 'api.',
], function () {

    Route::group([
        'prefix' => '/app',
        'as' => 'app.'
    ], function () {
        Route::get('/', [AppController::class, 'index'])->name('index');
        Route::get('/{appId}', [AppController::class, 'detail'])->name('detail');
        Route::middleware('auth:sanctum')->group(function () {
            Route::get('/{appId}/ranking', [AppController::class, 'ranking'])->name('ranking');
            Route::post('/{appId}/score', [AppController::class, 'score'])->name('score');
        });
    });

    Route::group([
        'prefix' => '/user',
        'as' => 'user.'
    ], function () {
        Route::post('/register', [UserController::class, 'create'])->name('create');
        Route::get('/titles', [UserController::class, 'titles'])->name('titles');
        Route::middleware('auth:sanctum')->group(function () {
            Route::get('/', [UserController::class, 'index'])->name('index');
            Route::put('/edit', [UserController::class, 'update'])->name('update');
            Route::get('/{userId}', [UserController::class, 'profile'])->name('profile');
        });
    });

    Route::group([
        'prefix' => '/auth',
        'as' => 'auth.'
    ], function () {
        Route::post('/login', [AuthController::class, 'login'])->name('login');
        Route::post('/logout', [AuthController::class, 'logout'])->name('logout');
        Route::post('/email', [AuthController::class, 'email'])->name('email');
    });

    Route::get('notification', [AppController::class, 'notification'])->name('notification');
});



