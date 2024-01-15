<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/users', function () {
        // $name = "my name is sam";
        $name =[
            1 => ['name' => 'sam' , 'phone' => '3327' , 'city' => 'KL'],
            2=> ['name' => 'ariff' , 'phone' => '341345' , 'city' => 'Kedah'],
            3 => ['name' => 'amir' , 'phone' => '7366' , 'city' => 'Johor'],
            4=> ['name' => 'yun' , 'phone' => '367245' , 'city' => 'Klate'],
        ];
            return view('users' , [
                'user' => $name,
                'city' => '',
            ]);

        });