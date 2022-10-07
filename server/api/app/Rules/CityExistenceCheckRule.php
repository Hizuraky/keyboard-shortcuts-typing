<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;
use App\Models\city;

class CityExistenceCheckRule implements Rule
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
     * 市区町村外部キーの存在チェックを行い、存在しない場合バリデーションエラーを返す
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        $city = city::where('id', $value)->first();

        if (is_null($city)) {
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
        return '市区町村に不正なIDが指定されています。';
    }
}
