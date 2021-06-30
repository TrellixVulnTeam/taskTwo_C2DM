<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
class HomeController extends Controller
{
    public function info($id)
    { 
         $user= DB::table('users')->where('id',$id)->select('name','qualifications')->get();
         return view('home.info',['user'=>$user[0]]);
    }
    public function create()
    {
        $dummyUsers= DB::table('users')->select('name','contry','id')->get();
        $grouped = $dummyUsers->groupBy('contry');
        $grouped->all();
        return view('home.home',['groubs'=>$grouped]);
    }
    
}
