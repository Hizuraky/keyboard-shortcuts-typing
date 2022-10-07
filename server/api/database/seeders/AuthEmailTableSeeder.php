<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use Faker\Generator as Faker;

class AuthEmailTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(Faker $faker)
    {
        DB::table('auth_email')->insert([
            'email' => "user1234@example.com",
            'code' => 123456,
            'created_at' => new Carbon('-1 hour'),
            'updated_at' => Carbon::now(),
        ]);
        DB::table('auth_email')->insert([
            'email' => "user1225@example.com",
            'code' => 123456,
            'created_at' => new Carbon(),
            'updated_at' => Carbon::now(),
        ]);
    }
}
