<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use Illuminate\Support\Str;
use Faker\Provider\DateTime;


class AppTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('apps')->insert([
            'name' => 'Visual Studio Code',
            'icon' => 'https://ks-icons.s3.ap-northeast-1.amazonaws.com/VisualStudio.png',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
        DB::table('apps')->insert([
            'name' => 'Microsoft Excel',
            'icon' => 'https://ks-icons.s3.ap-northeast-1.amazonaws.com/Excel.png',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
        DB::table('apps')->insert([
            'name' => 'Microsoft Word',
            'icon' => 'https://ks-icons.s3.ap-northeast-1.amazonaws.com/Word.png',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
        DB::table('apps')->insert([
            'name' => 'Adobe Photoshop',
            'icon' => 'https://ks-icons.s3.ap-northeast-1.amazonaws.com/Ps.png',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
        DB::table('apps')->insert([
            'name' => 'Adobe XD',
            'icon' => 'https://ks-icons.s3.ap-northeast-1.amazonaws.com/XD.png',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
        DB::table('apps')->insert([
            'name' => 'Atom',
            'icon' => 'https://ks-icons.s3.ap-northeast-1.amazonaws.com/Atom.png',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
        DB::table('apps')->insert([
            'name' => 'Final Cut Pro',
            'icon' => 'https://ks-icons.s3.ap-northeast-1.amazonaws.com/FC.png',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
        DB::table('apps')->insert([
            'name' => 'Google Chrome',
            'icon' => 'https://ks-icons.s3.ap-northeast-1.amazonaws.com/Chrome.png',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
    }
}
