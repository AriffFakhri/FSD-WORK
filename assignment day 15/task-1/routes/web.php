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
Route::get('/about/{id?}', function (string $id = null) {
    // return "<h1> post id :" . $id. "</h1>";
    if ($id){
        return "<h1> post id :" .$id . "</h1>";
    }else{
        return "<h1> No id found </h1>";
    }
})->whereIn("id", ['movie', 'song', 'painting']);
// Route::get('/contact/{id}', function (string $id= null) {
//     return view ('contact');
// });

Route::get('/page1/{id?}', function (string $id = null) {
    if ($id){
        return "<h1> post id :" .$id . "</h1>";
    }else{
        return "<h1> No id found </h1>";
    }
});
Route::get('/page2/{id?}', function (string $id = null) {
    if ($id){
        return "<h1> post id :" .$id . "</h1>";
    }else{
        return "<h1> No id found </h1>";
        
    }
})->whereAlpha("id");
Route::get('/page3/{id?}', function (string $id = null) {
    if ($id){
        return "<h1> post id :" .$id . "</h1>";
    }else{
        return "<h1> No id found </h1>";
        
    }
})->whereAlphaNumeric("id");
