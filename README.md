# Laravel + Inertia + Vue + Livewire Demo

A fresh Laravel project demonstrating how to use **Inertia.js (Vue 3)** and **Livewire v4** side-by-side in the same application.

Two simple demo pages are included:

- `/inertia` → Login form using Inertia + Vue 3  
- `/livewire` → Login form using Livewire v4

Both pages are returned from a controller and use their own layout system.

## Features

- Laravel 11/12 structure
- Inertia.js v2 + Vue 3 (with Vite)
- Livewire v4 (functional & class-based components)
- Tailwind CSS v4
- Mixed frontend: Inertia SPA-style pages + Livewire multi-page components
- No authentication yet (demo only)

## Requirements

- PHP ≥ 8.2
- Composer
- Node.js ≥ 18 & npm
- MySQL / SQLite / PostgreSQL (or any supported DB)

## Installation & Running Locally

### 1. Clone the repository

```bash
git clone https://github.com/biplob192/laravel_with_inertia_vue_livewire.git
cd laravel_with_inertia_vue_livewire
```

## Run the following commands to install dependencies

- composer install
- npm install
- cp .env.example .env
- php artisan key:generate
- php artisan migrate
- php artisan serve
- npm run build
- npm run dev

## Optional – SSR (Server-Side Rendering) for Inertia.js

- npm run build-ssr
- php artisan inertia:start-ssr

### Make sure .env has:

```bash
INERTIA_SSR_ENABLED=true
```

## Folder Structure Highlights

app/Livewire/              ← Livewire components
resources/js/Pages/        ← Inertia Vue pages
resources/js/Layouts/      ← Inertia layouts
resources/views/layouts/   ← Blade layouts (used by Livewire)
resources/views/livewire/  ← Livewire Blade views
resources/views/components/⚡*.blade.php  ← Livewire v4 functional components
