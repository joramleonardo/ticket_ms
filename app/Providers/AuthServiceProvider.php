<?php

namespace App\Providers;

use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;
use Laravel\Passport\Passport;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        // 'App\Model' => 'App\Policies\ModelPolicy',
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        Passport::tokensCan([
            'superadmin' => 'superadmin',
            'admin' => 'admin',
            'staff' => 'staff',
            'author_hr' => 'author_hr',
            'author_lib' => 'author_lib',
            'author_pjs' => 'author_pjs',
            'author_sja' => 'author_sja',
            'author_starbooks' => 'author_starbooks',
            'author_dostv' => 'author_dostv'
            // 'do_anything' => 'Administrator',
            // 'can_create' => 'Author'
        ]);

        //
    }
}
