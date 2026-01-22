<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class AuthDemoController extends Controller
{
    public function showInertiaLogin()
    {
        return Inertia::render('Auth/Login', [
            'title'       => 'Login – Inertia Style',
            'message'     => 'This is an Inertia + Vue page with layout',
            'home_url'    => route('inertia.login'),
            'livewire_url' => route('livewire.login'),
        ]);
    }
}
