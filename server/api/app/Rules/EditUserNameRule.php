<?php

namespace App\Rules;

use App\Http\Controllers\Controller;
use Illuminate\Contracts\Validation\Rule;
use App\Models\User;

class EditUserNameRule  extends Controller implements Rule
{
    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * ログインユーザーは除いて、同じユーザーネームが存在した場合バリデーションエラーを返す
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        $userId = $this->getLoginUserId();
        $user = User::where('user_name', $value)->first();

        if($user && $user->id == $userId){
            return true;
        }

        if (!is_null($user)) {
            return false;
        }

        return true;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'こちらのユーザー名は既に登録されています。';
    }
}
