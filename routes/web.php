<?php

use App\Livewire\Login;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthDemoController;

Route::get('/', function () {
    return view('welcome');
});


Route::get('/livewire', Login::class)->name('livewire.login');
Route::get('/inertia', [AuthDemoController::class, 'showInertiaLogin'])->name('inertia.login');
