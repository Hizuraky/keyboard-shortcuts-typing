<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;
use Tymon\JWTAuth\Http\Middleware\BaseMiddleware;

class RefreshToken extends BaseMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        /**
         * リフレッシュトークンの発行処理
         * middleware => refreshToken
         */
        $token = $newToken = null;
        try {
            /**
             * tokenの有効チェック
             * 有効の場合、リクエストを通す
             * 無効の場合、エラーをcatchする
             */
            $token = $this->auth->parseToken();
            $token->authenticate();
        } catch (TokenExpiredException $e) {
            // tokenの有効期限が切れた場合
            try {
                // リフレッシュ期限内の場合、リフレッシュトークンを発行する
                $newToken = $token->refresh();
            } catch (JWTException $e) {
                // リフレッシュ期限切れの場合
            }
        } catch (JWTException $e) {
            // 無効なトークンの場合
        }

        // 従来のルーティングに処理を投げる
        $response = $next($request);

        // リフレッシュトークンを発行した場合
        if ($newToken) {
            return response()->refreshToken(
                $response->status(),
                $response->content(),
                $newToken
            );
        };

        return $response;
    }
}
