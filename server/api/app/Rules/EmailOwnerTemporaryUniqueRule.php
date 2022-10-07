<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;
use App\Models\User;
use App\Models\OwnerTemporary;

class EmailOwnerTemporaryUniqueRule implements Rule
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
     * メールアドレスが同じユーザーが存在した場合バリデーションエラーを返す
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {;
        $user = User::withTrashed()->where('email', $value)->first();
        $ownerTemporary = OwnerTemporary::withTrashed()->where('email', $value)->first();

        if (!is_null($user)|| !is_null($ownerTemporary)) {
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
        return 'こちらのメールアドレスは既に登録されています。';
    }
}
