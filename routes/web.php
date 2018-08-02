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

Route::get('/prolongation_wait', function () {
    return view('lk.prolongation_wait');
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

Route::get('/give_loan_1', function () {
    return view('lk.give_loan_1');
});

Route::get('/give_loan_2', function () {
    return view('lk.give_loan_2');
});

Route::get('/give_loan_3', function () {
    return view('lk.give_loan_3');
});

Route::get('/iframe', function () {
    return view('card.card_confirm');
});



Route::get('/test', function () {
    return view('test');
});
