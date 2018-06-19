<?php

namespace App\Http\Controllers;
use DB;
use Illuminate\Http\Request;

class HomeController extends Controller
{
     public function show()
    {
	$results = DB::select('select * from users where id = ?', [1]);
	foreach ($results as $value) {
	    echo 'Users: ' .$value->firstName;
	} 
      	
    }
}
