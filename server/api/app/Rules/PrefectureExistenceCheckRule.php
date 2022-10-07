<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;
use App\Models\Prefecture;

class PrefectureExistenceCheckRule implements Rule
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
     * 都道府県外部キーの存在チェックを行い、存在しない場合バリデーションエラーを返す
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        $prefecture = Prefecture::where('id', $value)->first();

        if (is_null($prefecture)) {
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
        return '都道府県に不正なIDが指定されています。';
    }
}
