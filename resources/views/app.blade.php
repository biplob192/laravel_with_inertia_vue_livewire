<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Inertia uses this for title management -->
    <title inertia>{{ config('app.name', 'Laravel') }}</title>

    <!-- Vite CSS + JS (order matters: CSS first usually) -->
    @vite(['resources/css/app.css', 'resources/js/app.js'])

    <!-- Required for Inertia to inject <head> updates (meta, title, links, etc.) -->
    @inertiaHead
</head>
<body class="font-sans antialiased">
    <!-- This is the critical mount point - id="app" is conventional -->
    {{-- <div id="app" data-page="{{ json_encode($page) }}"></div> --}}

    @inertia

    <!-- Optional: progress bar, but not related to this error -->
    <!-- @inertiaProgress or similar if you use it -->
</body>
</html>
