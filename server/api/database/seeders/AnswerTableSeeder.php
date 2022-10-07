<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
class AnswerTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $vscodeAnswers = [
            ['⌘','x'],
            ['⌘','c'],
            ['⌘','⇧','k'],
            ['⌘','enter'],
            ['⌘','⇧','enter'],
            ['⌘','d'],
            ['⌘','u'],
            ['⌘','⇧','l'],
            ['⌘',']'],
            ['⌘','['],
            ['⌥','↓'],
            ['⌥','↑'],
            ['⌥','↓','⇧'],
            ['⌥','↑','⇧'],
            ['⌘','⌥','↓'],
            ['⌘','⌥','↑'],
            ['⌘','↓'],
            ['⌘','↑'],
            ['⌘','f'],
            ['⌘','f','⌥'],
            ['⌘','g'],
            ['⌘','⇧','g'],
            ['^','g'],
            ['⌘','p'],
            ['⌘','⇧','n'],
            ['⌘','⇧','w'],
            ['⌘','w'],
            ['⌘','1'],
            ['⌘','3'],
            ['⌥','⌘','←'],
            ['⌥','⌘','→'],
            ['⌘','n'],
            ['⌘','s'],
            ['⌘','s','⇧'],
            ['⌘',',']
        ];

        $excelAnswers = [
            ['^','space'],
            ['⇧','space'],
            ['⌘','x'],
            ['⌘','c'],
            ['⌘','v'],
            ['⌘','⇧','v'],
            ['^','u'],
            ['^','d'],
            ['^','r'],
            ['⌘','1'],
            ['⌘','s'],
            ['⌘','⇧','s'],
            ['⌘','n'],
            ['⌘','p'],
            ['⌘','o'],
            ['⌘','w'],
            ['⌘','⌥','0'],
            ['⌘','⌥','-'],
            ['⌥','←'],
            ['⌥','→'],
            ['⌘','k'],
            ['⌘','l'],
            ['⌘','e'],
            ['⌘','r'],
            ['⌘','b'],
            ['⌘','i'],
            ['⌘','u'],
            ['⌘','a'],
            ['⌘','f'],
            ['⌘','⌥','↓'],
            ['⌘','⌥','←'],
            ['⌘','⌥','→'],
            ['⌘','⌥','↑'],
            ['⌘','q'],
            ['⌘','⇧','t'],
            ['⌘','w'],
            ['⌘','y'],
            ['⌘','z'],
        ];

        $wordAnswers = [
            ['⌘','x'],
            ['⌘','c'],
            ['⌘','v'],
            ['⌘','s'],
            ['⌘','⇧','s'],
            ['⌘','o'],
            ['⌘','n'],
            ['⌘','p'],
            ['⌘','w'],
            ['⌘','a'],
            ['⌘','q'],
            ['⌘','f'],
            ['⌘','y'],
            ['⌘','z'],
            ['⌘','b'],
            ['⌘','i'],
            ['⌘','u'],
            ['⌘','⇧','d'],
            ['⌘',']'],
            ['⌘','['],
            ['⌘','['],
            ['⌘','e'],
            ['⌘','l'],
            ['⌘','r'],
            ['⌘','k'],
            ['⌘','1'],
            ['⌘','2'],
            ['⌘','5'],
            ['⌘','⌥','1'],
            ['⌘','⌥','2'],
            ['⌘','⌥','3'],
            ['⌘','8'],
            ['^','⇧','d'],
            ['^','⇧','t'],
            ['^','⇧','p'],
            ['⌥','2'],
            ['⌥',';'],
            ['⌥','g'],
        ];

        $photoshopAnswers = [
            ['⌘','n'],
            ['⌘','o'],
            ['⌘','⌥','o'],
            ['⌘','w'],
            ['⌘','⌥','w'],
            ['⌘','s'],
            ['⌘','⇧','s'],
            ['⌥','⇧','s'],
            ['⌥','⇧','i'],
            ['⌘','p'],
            ['⌥','⇧','p'],
            ['⌘','q'],
            ['⌘','z'],
            ['⌘','⌥','z'],
            ['⌘','⇧','z'],
            ['⌘','x'],
            ['⌘','c'],
            ['⌘','⇧','c'],
            ['⌘','v'],
            ['⌘','⇧','v'],
            ['⌥','⇧','v'],
            ['⌘','t'],
            ['⌥','⇧','m'],
            ['⌘','k'],
            ['⌘','n'],
            ['⌘','m'],
            ['⌘','u'],
            ['⌘','b'],
            ['⌥','⇧','b'],
            ['⌘','i'],
            ['⌘','⇧','u'],
            ['⌘','⇧','l'],
            ['⌥','⇧','l'],
            ['⌘','⇧','i'],
            ['⌘','⌥','i'],
            ['⌘','⌥','c'],
            ['⌘','⇧','n'],
            ['）','⌘','j'],
            ['⌘','⌥','g'],
            ['⌘','g'],
            ['⌘','⇧','g'],
            ['⌘','⇧',']'],
            ['⌘',']'],
            ['⌘','['],
            ['⌘','⇧','['],
            ['⌘','e'],
            ['⌘','⇧','e'],
            ['⌘','a'],
            ['⌘','d'],
            ['⌘','⇧','d'],
            ['⌘','⇧','i'],
            ['⇧','⌥','a'],
            ['⌘','⌥','r'],
        ];

        $xdAnswers = [
            ['⌘','z'],
            ['⌘','⇧','z'],
            ['⌘','x'],
            ['⌘','c'],
            ['⌘','v'],
            ['⌘','d'],
            ['⌘','a'],
            ['⌘','⇧','a'],
            ['⌘','n'],
            ['⌘','⇧','o'],
            ['⌘','w'],
            ['⌘','s'],
            ['⌘','⇧','s'],
            ['⌘','⌥','⇧','s'],
            ['⌘','⇧','e'],
            ['⌘','e',],
            ['⇧','⌘','i'],
            ['p'],
            ['⌥','⌘','u'],
            ['⌥','⌘','s'],
            ['⌥','⌘','i'],
            ['⌥','⌘','x'],
            ['⌘','8'],
            ['⌘','g'],
            ['⇧','⌘','g'],
            ['⌘','k'],
            ['⌘','l'],
            ['⌘',','],
            ['⇧','⌘','m'],
            ['⌘','r'],
            ['⇧','⌘','h'],
            ['⇧','⌘','v'],
            ['⇧','⌘','d'],
            ['⌃','⌘','←'],
            ['⌃','⌘','c'],
            ['⌃','⌘','→'],
            ['⌃','⌘','↑'],
            ['⌃','⌘','m'],
            ['⌃','⌘','↓'],
            ['⇧','⌘',']'],
            ['⌘',']'],
            ['⌘','['],
            ['⇧','⌘','['],
            ['⌘','b'],
            ['⌘','i'],
            ['⌘','u'],
        ];

        $atomAnswers = [
            ['⌘','⇧','p'],
            ['^','f'],
            ['^','b'],
            ['^','n'],
            ['^','p'],
            ['⌘','↑'],
            ['⌘','↓'],
            ['⌥','b'],
            ['⌥','f'],
            ['^','a'],
            ['^','e'],
            ['^','g'],
            ['^','m'],
            ['⌥','⇧','b'],
            ['⌥','⇧','f'],
            ['^','⇧','w'],
            ['^','⇧','a'],
            ['^','⇧','e'],
            ['^','⇧','n'],
            ['^','⇧','p'],
            ['⌘','⇧','↑'],
            ['⌘','⇧','↓'],
            ['⌘','a'],
            ['^','⌘','↑'],
            ['^','⌘','↓'],
            ['⌥','⌫'],
            ['^','k'],
            ['^','⇧','k'],
            ['⌘','⇧','d'],
            ['⌘','j'],
            ['⌘','enter'],
            ['⌘','⇧','enter'],
            ['⌘',']'],
            ['⌘','['],
            ['⌘','/'],
            ['⌥','⌘','['],
            ['⌥','⌘',']'],
            ['⌥','⇧','⌘','['],
            ['⌥','⇧','⌘',']'],
            ['⌘','f'],
            ['⌘','⇧','f'],
            ['⌘','e'],
            ['⌘','r'],
            ['⌘','t'],
            ['⌘','b'],
            ['⌘','n'],
            ['⌘','⇧','t'],
            ['⌘','⇧','b'],
            ['⌥','⌘','z'],
        ];

        $finalCutAnswers = [
            ['b'],
            ['a'],
            ['⌘','b'],
            ['⇧','⌘','b'],
            ['↑'],
            ['↓'],
            ['←'],
            ['→'],
            [','],
            ['.'],
            ['space'],
            ['l'],
            ['j'],
            ['k'],
            ['^','-'],
            ['i'],
            ['o'],
            ['d'],
            ['m'],
            ['n'],
            ['⌘','c'],
            ['⌘','v'],
            ['⌥','⌘','c'],
            ['⌥','⌘','v'],
            ['⌘','z'],
            ['⇧','⌘','z'],
            ['⌘','a'],
            ['⌘','6'],
            ['⌥','g'],
            ['⌥','f'],
            ['^','d'],
            ['^','t'],
            ['⇧','b'],
            ['⇧','⌘','F'],
        ];

        $chromeAnswers = [
            ['⌘','n'],
            ['⌘','⇧','n'],
            ['⌘','t'],
            ['⌘','⌥','→'],
            ['⌘','⌥','←'],
            ['⌘','←'],
            ['⌘','→'],
            ['⌘','⇧','b'],
            ['⌘','⌥','b'],
            ['⌘',','],
            ['⌘','y'],
            ['⌘','⇧','j'],
            ['⌘','f'],
            ['⌘','g'],
            ['⌘','⇧','g'],
            ['⌘','⌥','i'],
            ['⌘','r'],
            ['⌘','⇧','r'],
            ['tab'],
            ['⇧','tab'],
            ['⌘','⌥','u'],
            ['⌘','d'],
            ['^','tab'],
            ['⌘','c'],
            ['⌘','v'],
            ['⌘','p'],
            ['⌘','w'],
            ['⌘','q'],
            ['⌘','m'],
            ['⌘','⇧','w'],
            ['⌘','h'],
            ['⌘','s'],
        ];

        // vscode
        for ($i = 0; $i < count($vscodeAnswers); $i++) {
            for ($ii = 0; $ii < count($vscodeAnswers[$i]); $ii++) {
                DB::table('answers')->insert([
                    'question_id' => $i + 1,
                    'answer' => $vscodeAnswers[$i][$ii],
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now(),
                ]);
            }
        }

        // excel
        for ($i = 0; $i < count($excelAnswers); $i++) {
            for ($ii = 0; $ii < count($excelAnswers[$i]); $ii++) {
                DB::table('answers')->insert([
                    'question_id' => count($vscodeAnswers) + $i + 1,
                    'answer' => $excelAnswers[$i][$ii],
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now(),
                ]);
            }
        }

        // word
        for ($i = 0; $i < count($wordAnswers); $i++) {
            for ($ii = 0; $ii < count($wordAnswers[$i]); $ii++) {
                DB::table('answers')->insert([
                    'question_id' => count($vscodeAnswers) + count($excelAnswers) + $i + 1,
                    'answer' => $wordAnswers[$i][$ii],
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now(),
                ]);
            }
        }

        // photoshop
        for ($i = 0; $i < count($photoshopAnswers); $i++) {
            for ($ii = 0; $ii < count($photoshopAnswers[$i]); $ii++) {
                DB::table('answers')->insert([
                    'question_id' => count($vscodeAnswers) + count($excelAnswers) +
                                    count($wordAnswers) + $i + 1,
                    'answer' => $photoshopAnswers[$i][$ii],
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now(),
                ]);
            }
        }

        // xd
        for ($i = 0; $i < count($xdAnswers); $i++) {
            for ($ii = 0; $ii < count($xdAnswers[$i]); $ii++) {
                DB::table('answers')->insert([
                    'question_id' => count($vscodeAnswers) + count($excelAnswers) +
                                    count($wordAnswers) + count($photoshopAnswers) + $i + 1,
                    'answer' => $xdAnswers[$i][$ii],
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now(),
                ]);
            }
        }

        // atom
        for ($i = 0; $i < count($atomAnswers); $i++) {
            for ($ii = 0; $ii < count($atomAnswers[$i]); $ii++) {
                DB::table('answers')->insert([
                    'question_id' => count($vscodeAnswers) + count($excelAnswers) +
                                    count($wordAnswers) + count($photoshopAnswers) +
                                    count($xdAnswers) + $i + 1,
                    'answer' => $atomAnswers[$i][$ii],
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now(),
                ]);
            }
        }

        // finalCut
        for ($i = 0; $i < count($finalCutAnswers); $i++) {
            for ($ii = 0; $ii < count($finalCutAnswers[$i]); $ii++) {
                DB::table('answers')->insert([
                    'question_id' => count($vscodeAnswers) + count($excelAnswers) +
                                    count($wordAnswers) + count($photoshopAnswers) +
                                    count($xdAnswers) + count($atomAnswers) + $i + 1,
                    'answer' => $finalCutAnswers[$i][$ii],
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now(),
                ]);
            }
        }

        // finalCut
        for ($i = 0; $i < count($chromeAnswers); $i++) {
            for ($ii = 0; $ii < count($chromeAnswers[$i]); $ii++) {
                DB::table('answers')->insert([
                    'question_id' => count($vscodeAnswers) + count($excelAnswers) +
                                    count($wordAnswers) + count($photoshopAnswers) +
                                    count($xdAnswers) + count($atomAnswers) +
                                    count($finalCutAnswers) + $i + 1,
                    'answer' => $chromeAnswers[$i][$ii],
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now(),
                ]);
            }
        }
    }
}
