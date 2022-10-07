<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Services\AuthService;



class DeleteCodeCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'command:deleteCodeCommand';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = '認証コードの削除';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }


    public function handle()
    {
        AuthService::deleteCode();
        return;
    }
}
