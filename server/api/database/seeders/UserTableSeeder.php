<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use Faker\Generator as Faker;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(Faker $faker)
    {
        for ($i = 1; $i <= 25; $i++) {
            DB::table('users')->insert([
                'name' => 'User' . $i,
                'email' => 'user' . $i . '@example.com',
                'password' => Hash::make('aaaa1111'),
                'icon' => $i < 7 ? "https://ks-icons.s3.ap-northeast-1.amazonaws.com/test" . $i . ".jpg" : "",
                'title_id' => 19,
                'level' => $faker->numberBetween(1, 4),
                'level_point' => 1,
                'play_time' => $faker->numberBetween(100, 600),
                'clear_times' => $faker->numberBetween(6, 20),
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ]);
        }
    }
}
