<?php

namespace App\Rules;

use App\Http\Controllers\Controller;
use Illuminate\Contracts\Validation\Rule;
use App\Models\User;
use App\Models\OwnerTemporary;

class UserNameOwnerTemporaryRule  extends Controller implements Rule
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
     * 同じユーザーネームが存在した場合バリデーションエラーを返す
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        $user = User::withTrashed()->where('user_name', $value)->first();
        $ownerTemporary = OwnerTemporary::withTrashed()->where('user_name', $value)->first();

        if (!is_null($user) || !is_null($ownerTemporary)) {
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
