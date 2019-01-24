<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class FrontController extends Controller
{


    public function getPopup()
    {
//        abort(404);
        sleep(2);
        return view('ajax-popup');
    }
}
