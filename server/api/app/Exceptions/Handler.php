<?php

namespace App\Exceptions;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Auth\Access\AuthorizationException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Illuminate\Validation\ValidationException;
use Illuminate\Http\Exceptions\ThrottleRequestsException;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Throwable;
use Symfony\Component\HttpFoundation\Response as HttpResponse;
use Illuminate\Support\Facades\Log;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array
     */
    protected $dontReport = [
        AuthenticationException::class,
        AuthorizationException::class,
        ModelNotFoundException::class,
        NotFoundHttpException::class,
        ValidationException::class,
        UnprocessableException::class,
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     *
     * @return void
     */
    public function register()
    {
        $this->reportable(function (Throwable $e) {
            //
        });
    }

    public function render($request, $exception)
    {
        /**
         * APIエラーの場合は、apiErrorResponseに処理を投げる
         * WEBエラーの場合は、ここで処理完結する
         */

        if ($request->is('api/*')) {
            return $this->handleApiResponse($request, $exception);
        }

        return parent::render($request, $exception);
    }

    /**
     * API/アプリ内で発生した例外をステータスコードに振り分ける処理を行う
     * レスポンスはapiErrorResponseで定義
     */
    private function handleApiResponse($request, $e)
    {
        Log::error($e);

        // 401 Unauthorized 認証情報エラー
        if ($e instanceof AuthenticationException) {
            $statusCode = HttpResponse::HTTP_UNAUTHORIZED;
            return $this->apiErrorResponse($statusCode);
        }

        // 403 Forbidden トークン関係の認可エラー
        if ($e instanceof AuthorizationException) {
            $statusCode = HttpResponse::HTTP_FORBIDDEN;
            return $this->apiErrorResponse($statusCode);
        }

        // 404 Not Found GET/PUT/DELETEで既にリソースが存在しない場合
        if ($e instanceof ModelNotFoundException) {
            $statusCode = HttpResponse::HTTP_NOT_FOUND;
            return $this->apiErrorResponse($statusCode);
        }

        // 404 Not Found 存在しないURLへのアクセス
        if ($e instanceof NotFoundHttpException) {
            $statusCode = HttpResponse::HTTP_NOT_FOUND;
            return $this->apiErrorResponse($statusCode);
        }

        // 422 Unprocessable Entity バリデーションエラー
        if ($e instanceof ValidationException) {
            $statusCode = HttpResponse::HTTP_UNPROCESSABLE_ENTITY;
            return $this->apiErrorResponse($statusCode, $e->validator);
        }

        // 422 Unprocessable Entity バリデーションエラー以外
        if ($e instanceof UnprocessableException) {
            $statusCode = HttpResponse::HTTP_UNPROCESSABLE_ENTITY;
            return $this->apiErrorResponse($statusCode, $e->getMessage());
        }

        // 429 Too Many Requests 時間内のアクセス回数制限エラー
        if ($e instanceof ThrottleRequestsException) {
            Log::error($e);
            $statusCode = HttpResponse::HTTP_TOO_MANY_REQUESTS;
            return $this->apiErrorResponse($statusCode);
        }

        // 上記に該当しない500エラーの場合、ログを残す
        $statusCode = HttpResponse::HTTP_INTERNAL_SERVER_ERROR;

        return $this->apiErrorResponse($statusCode);
    }

    /**
     * レスポンスの定義
     * // NOTE: エラー発生時のレスポンスを変更・追加する場合は、
     * apiErrorResponseとApiResponseServiceProvider.phpを編集する
     */
    private function apiErrorResponse($statusCode, $messages = '')
    {
        switch ($statusCode) {
            case 400:
                return response()->error(HttpResponse::HTTP_BAD_REQUEST, '不正なリクエストです。');
            case 401:
                return response()->error($statusCode, '認証情報に誤りがあります。');
            case 403:
                return response()->error($statusCode, 'アクセス権がありません。ログインしてください。');
            case 404:
                return response()->error($statusCode, '指定のリソースは存在しません。');
            case 422:
                if ($messages instanceof Validator) {
                    return response()->validation($statusCode, '処理できない入力値があります。', $messages);
                } else {
                    return response()->error($statusCode, $messages);
                }
                // no break
            case 429:
                return response()->error($statusCode, 'リクエスト回数が多いです。');
            case 500:
                return response()->error($statusCode, 'システムエラーが発生しました。時間を置いてもう一度お試しください。');
            default:
                break;
        }
    }
}
