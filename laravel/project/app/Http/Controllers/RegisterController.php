<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class RegisterController extends Controller
{
    public function create()
    {
        return view('register.create');
    }
   
    public function store(Request $request) 
    {
       DB::table('users')->insert([
        'email' => $request->input('email'),
        'name'=>$request->input('name'),
        'password'=>bcrypt($request->input('password')),
        'phoneNumber'=>$request->input('phoneNumber'),
        'contry'=>$request->input('country'),
        'qualifications'=> $request->input('qualifications')
    ]);
        return redirect('/login')->with('success', 'Your account has been created.');

    }
}
