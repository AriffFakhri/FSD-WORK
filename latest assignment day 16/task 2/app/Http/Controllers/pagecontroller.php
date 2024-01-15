<?php

namespace App\Http\Controllers;

// use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class pagecontroller extends Controller
{
    public function showtask(){
        $name =[
                    1 => ['name' => 'sam' , 'phone' => '3327' , 'city' => 'KL'],
                    2=> ['name' => 'ariff' , 'phone' => '341345' , 'city' => 'Kedah'],
                    3 => ['name' => 'amir' , 'phone' => '7366' , 'city' => 'Johor'],
                    4=> ['name' => 'yun' , 'phone' => '367245' , 'city' => 'Klate'],
                ];
                return view('users' , [
                    'user' => $name,
                    
                ]);
    }
}

