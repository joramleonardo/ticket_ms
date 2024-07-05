<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\DOSTvExperTalk;
use App\DOSTvExperTalkGuest;
use App\DOSTvExperTalkViews;

class DOSTvExperTalkViewsController extends Controller
{

    public function index(){
        $dostv_expertalkviews = DOSTvExperTalkViews::orderBy('created_at', 'desc')->paginate();
        return response()->json($dostv_expertalkviews, 200);
    }
    
    // public function loadExpertalkGuest($id){
    //     $requestts = Requestt::join ('clients', 'clients.id', '=', 'requestts.client_ID')
    //                            ->where('clients.id', $id)
    //            	               ->get(['requestts.*', 'clients.*']);

    //     return response()->json($requestts, 200);
    // }
    
    public function loadExpertalkGuest($id){
        $requestts = Requestt::join ('clients', 'clients.id', '=', 'requestts.client_ID')
                               ->where('clients.id', $id)
               	               ->get(['requestts.*', 'clients.*']);

        return response()->json($requestts, 200);
    }

}
