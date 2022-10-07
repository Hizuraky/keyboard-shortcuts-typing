<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            TitleTableSeeder::class,
            UserTableSeeder::class,
            AppTableSeeder::class,
            QuestionTableSeeder::class,
            AnswerTableSeeder::class,
            ScoreTableSeeder::class,
            UserRankingTableSeeder::class,
            AuthEmailTableSeeder::class,
            NotificationTableSeeder::class,
            TitleUserTableSeeder::class
        ]);
    }
}
