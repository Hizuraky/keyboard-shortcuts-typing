<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;
use Illuminate\Support\Facades\Log;

class Kernel extends ConsoleKernel
{

    protected $commands = [
        Commands\ResetRankingCommand::class,
        Commands\DeleteCodeCommand::class,
    ];

    protected function schedule(Schedule $schedule)
    {
        $schedule
            ->command('command:resetRankingCommand')
            ->weeklyOn(1, '4:00')
            ->onSuccess(function () {
                Log::info('success:resetRankingCommand');
            })
            ->onFailure(function () {
                Log::error('fail:resetRankingCommand');
            });

        $schedule
            ->command('command:deleteCodeCommand')
            ->hourly()
            ->onSuccess(function () {
                Log::info('success:deleteCodeCommand');
            })
            ->onFailure(function () {
                Log::error('fail:deleteCodeCommand');
            });
    }


    /**
     * Register the commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        $this->load(__DIR__.'/Commands');

        require base_path('routes/console.php');
    }


    protected function scheduleTimezone()
    {
        return 'Asia/Tokyo';
    }
}
