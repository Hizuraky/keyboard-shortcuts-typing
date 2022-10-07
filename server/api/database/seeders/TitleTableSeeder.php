<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use Faker\Generator as Faker;

class TitleTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(Faker $faker)
    {
        $urls = [
            "vsm",
            "vse",
            "mem",
            "mee",
            "mwm",
            "mwe",
            "am",
            "ae",
            "gcm",
            "gce",
            "fcm",
            "fce",
            "apm",
            "ape",
            "axm",
            "axe",
            "ksm",
            "kse",
            "ksp"
        ];

        $names = [
            "Visual Studio Code Master",
            "Visual Studio Code Expert",
            "Microsoft Excel Master",
            "Microsoft Excel Expert",
            "Microsoft Word Master",
            "Microsoft Word Expert",
            "Atom Master",
            "Atom Expert",
            "Google Chrome Master",
            "Google Chrome Expert",
            "Final Cut Master",
            "Final Cut Expert",
            "Adobe Photoshop Master",
            "Adobe Photoshop Expert",
            "Adobe XD Master",
            "Adobe XD Expert",
            "ks typing Master",
            "ks typing Expert",
            "ks typing Player"
        ];


        for ($i = 0; $i < count($urls); $i++) {
            DB::table('titles')->insert([
                'name' => $names[$i],
                'url' => "https://ks-icons.s3.ap-northeast-1.amazonaws.com/" . $urls[$i] . ".png",
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ]);
        }
    }
}
