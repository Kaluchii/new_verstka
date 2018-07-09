<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="" type="image/gif">

    @include('styles')
    @yield('styles')
</head>
<body>
@include('header')

<div class="page-wrapper">
    <div class="page-wrapper__header-and-content">
        @yield('header')
        @yield('content')
    </div>
</div>

@include('scripts')
@yield('scripts')


</body>
</html>