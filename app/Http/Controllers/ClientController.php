<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Client;
use App\Requestt;
use App\Evaluation;
use App\ResearchLog;
use App\MaterialRequestt;

class ClientController extends Controller
{

    public function index(){
        $client = Client::orderBy('created_at', 'desc')->paginate();
        return response()->json($client, 200);
    }
 
    public function store(Request $request){
        $client = new Client();
        $client->name = $request->name;
        $client->clientType = $request->clientType;
        $client->profType = $request->profType;
        $client->yearLevel = $request->yearLevel;
        $client->schoolCategory = $request->schoolCategory;
        $client->sex = $request->sex;
        $client->ageRange = $request->ageRange;
        $client->office_school = $request->office_school;
        $client->dateVisited = $request->dateVisited;
        $client->timeIn = $request->timeIn;
        $client->timeOut = $request->timeOut;
        $client->save();
    }

    public function update(Request $request, $id){
        $client = Client::where('id', $id)->first();
        $client->name = $request->name;
        $client->clientType = $request->clientType;
        $client->profType = $request->profType;
        $client->yearLevel = $request->yearLevel;
        $client->schoolCategory = $request->schoolCategory;
        $client->sex = $request->sex;
        $client->ageRange = $request->ageRange;
        $client->office_school = $request->office_school;
        $client->dateVisited = $request->dateVisited;
        $client->timeIn = $request->timeIn;
        $client->timeOut = $request->timeOut;
        $client->save();
        if($client->save()) {
            return response()->json([
                'client' => $client, 
                'message' => 'Client updated successfully!'
            ], 201);
        } else {
            return response()->json([
                'client' => $client, 
                'message' => 'Some error occured, Please try again!'
            ], 500);
        }
    }

    public function destroy($id){
        $client = Client::find($id);
        $client->delete();
        return $client;
    }

    public function loadClientRequestt($id){
        $requestts = Requestt::join ('clients', 'clients.id', '=', 'requestts.client_ID')
                               ->where('clients.id', $id)
               	               ->get(['requestts.*', 'clients.*']);

        return response()->json($requestts, 200);
    }

    public function loadClientEvaluation($id){
        // $evaluations = Evaluation::join ('clients', 'clients.id', '=', 'evaluations.client_ID')
        //                        ->where('clients.id', $id)
        //        	               ->get(['evaluations.*', 'clients.*']);

        // return response()->json($evaluations, 200);
        
        $a = MaterialRequestt::where('id', $id)
                            ->get();
        return response()->json($a, 200);

        // $search_result = Client::where('sex',$filter_sex)
        //                         ->orwhere('dateVisited', $filter_dateVisited)
        //                         ->orwhere('clientType', $filter_clientType)
        //                         ->get();

        // return response()->json($search_result, 200);

        // $material_requestts = MaterialRequestt::orderBy('created_at', 'desc')->paginate(120);
        // return response()->json($material_requestts, 200);
    }

    public function loadClientResearchLog($id){
        $research_logs = ResearchLog::join ('clients', 'clients.id', '=', 'research_logs.client_ID')
                               ->where('clients.id', $id)
               	               ->get(['research_logs.*', 'clients.*']);

        return response()->json($research_logs, 200);
    }

    public function getFilteredSearch(Request $request){
        $filter_sex = \Request::get('filter_sex');
        $filter_dateVisited = \Request::get('filter_dateVisited');
        $filter_clientType = \Request::get('filter_clientType');

        // $search_result = Client::where([
        //     'sex' => $filter_sex,
        //     'dateVisited' => $filter_dateVisited,
        //     'clientType' => $filter_clientType
        //     ])->get();

        //     return  $search_result;
            
        $search_result = Client::where('sex',$filter_sex)
                                ->orwhere('dateVisited', $filter_dateVisited)
                                ->orwhere('clientType', $filter_clientType)
                                ->get();

        return response()->json($search_result, 200);
    }
}
