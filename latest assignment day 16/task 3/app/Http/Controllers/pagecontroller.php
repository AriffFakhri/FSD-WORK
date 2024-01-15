<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class pagecontroller extends Controller
{
    public function showhome(){
        // return "<h1> this is the controller </h1>";
        return view ('welcome');

    }
    public function showuse(){
        // return "<h1> this is the controller </h1>";
        return view ('users');

    }
    // public function showtask(){
    //     // return "<h1> this is the controller </h1>";
    //     return view ('task2');

    // }
    public function showabout(){
        // return "<h1> this is the controller </h1>";
        return view ('about');

    }
}
