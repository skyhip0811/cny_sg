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

Route::get('/result', function () {
    return view('result');
});

Route::get('/form', function () {
    return view('formpage');
});

Route::get('/', function () {
    return view('start');
});

Route::get('/end',function(){
	return view('ending');
});
