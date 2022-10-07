<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use Faker\Generator as Faker;

class ScoreTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(Faker $faker)
    {
        for ($i = 1; $i <= 25; $i++) {
            DB::table('score')->insert([
                'user_id' => $i,
                'app_id' => 1,
                'score' => $i > 15 && $i % 2 == 0 ? 100 : $faker->numberBetween(100,2700),
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ]);
            DB::table('score')->insert([
                'user_id' => $i,
                'app_id' => random_int(7, 8),
                'score' => $i > 16 && $i % 2 != 0 ? 100 : $faker->numberBetween(100,2700),
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ]);
        }

        for ($i = 1; $i <= 22; $i++) {
            DB::table('score')->insert([
                'user_id' => $i,
                'app_id' => 2,
                'score' => $i > 14 && $i % 2 != 0 ? 100 : $faker->numberBetween(100,2700),
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ]);
        }

        for ($i = 1; $i <= 21; $i++) {
            DB::table('score')->insert([
                'user_id' => $i,
                'app_id' => random_int(4, 6),
                'score' => $i > 10 && $i % 2 == 0 ? 100 : $faker->numberBetween(100,2700),
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ]);
        }

        for ($i = 1; $i <= 18; $i++) {
            DB::table('score')->insert([
                'user_id' => $i,
                'app_id' => 3,
                'score' => $i > 10 && $i % 2 != 0 ? 100 : $faker->numberBetween(100,2700),
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ]);
        }
    }
}
