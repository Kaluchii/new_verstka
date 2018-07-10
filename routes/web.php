<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('lk.settings');
});

Route::get('/under_consideration', function () {
    return view('lk.under_consideration');
});

Route::get('/loan_active', function () {
    return view('lk.loan_active');
});
