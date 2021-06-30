<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\LoginController;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\HomeController;

Route::get('/register',[RegisterController::class, 'create']);
Route::post('/register', [RegisterController::class, 'store']);

Route::get('/',[LoginController::class, 'create']);
Route::post('/login',[LoginController::class, 'authenticate']);

Route::get('/home',[HomeController::class, 'create']);
Route::get('/info/{id}',[HomeController::class, 'info']);
Route::post('/home',[HomeController::class, 'authenticate']);

