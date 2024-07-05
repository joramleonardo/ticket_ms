<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Expertalk;
use App\Event;

class ExpertalkController extends Controller
{
    public function index(){
        // $expertalk = Expertalk::orderBy('created_at', 'desc')->paginate();
        // return response()->json($expertalk, 200);

        $expertalk = Expertalk::orderBy('created_at', 'desc')->paginate();
        return response()->json($expertalk, 200);

        // $events = Event::orderBy('created_at', 'desc')->paginate();
        // return response()->json($events, 200);
    }
}
