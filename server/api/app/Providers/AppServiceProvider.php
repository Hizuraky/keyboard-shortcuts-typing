<?php

namespace App\Providers;


use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Facades\App;
class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        if (App::environment() === 'test') {
			URL::forceScheme('https');
			URL::forceRootUrl(config('app.url'));
			$this->app['request']->server->set('HTTPS', 'on');
		}

		if (App::environment() === 'staging') {
			URL::forceScheme('https');
			URL::forceRootUrl(config('app.url'));
			$this->app['request']->server->set('HTTPS', 'on');
		}

		if (App::environment() === 'production') {
			URL::forceScheme('https');
			URL::forceRootUrl(config('app.url'));
			$this->app['request']->server->set('HTTPS', 'on');
		}
    }
}
