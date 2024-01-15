<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\pagecontroller;

Route::controller(pagecontroller::class)->group(function(){
Route::get('/' , [pagecontroller::class, 'showhome']) ->name ('home');
Route::get('/users' , [pagecontroller::class, 'showuse']) ->name ('users'); 
Route::get('/about' , [pagecontroller::class, 'showabout']) ->name ('about'); 
// Route::get('/task2' , [pagecontroller::class, 'showtask']);
});