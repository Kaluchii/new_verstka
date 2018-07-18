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

Route::get('/loan_overdue', function () {
    return view('lk.loan_overdue');
});

Route::get('/restruct', function () {
    return view('lk.restruct');
});

Route::get('/loan_history', function () {
    return view('lk.loan_history');
});

Route::get('/change_pass', function () {
    return view('lk.change_pass');
});

Route::get('/personal_data', function () {
    return view('lk.personal_data_input');
});
