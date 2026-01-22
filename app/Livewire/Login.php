<?php

namespace App\Livewire;

use Livewire\Component;

class Login extends Component
{
    public string $email = '';
    public string $password = '';
    public string $demoMessage = 'Login form powered by Livewire';

    // Optional: fake "submit" handler (just for demo)
    public function submit()
    {
        $this->validate([
            'email'    => 'required|email',
            'password' => 'required|min:6',
        ]);

        // In real app → attempt auth here
        session()->flash('status', 'Login attempted (demo mode)');
    }

    public function render()
    {
        return view('livewire.login')
            ->layout('layouts.app')
            ->title('Login with Livewire');
    }
}
