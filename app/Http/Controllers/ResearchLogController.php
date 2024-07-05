<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Client;
use App\Requestt;
use App\Evaluation;
use App\ResearchLog;

class ResearchLogController extends Controller
{
    public function index()
    {
        $researchlog = ResearchLog::join ('clients', 'clients.id', '=', 'research_logs.client_ID')
               	               ->get(['research_logs.*', 'clients.*']);
        return response()->json($researchlog, 200);
    }

    public function create()
    {
    }

    public function store(Request $request)
    {
        $researchlog = new ResearchLog();
        $researchlog->client_ID = $request->client_ID;
        $researchlog->transactionDate = $request->transactionDate;
        $researchlog->subjectResearch = $request->subjectResearch;
        $researchlog->save();
    }

    public function show($id)
    {
    }

    public function edit($id)
    {
    }

    public function update(Request $request, $id)
    {
        $researchlog = ResearchLog::where('client_ID', $id)->first();

        $researchlog->client_ID = $request->client_ID;
        $researchlog->transactionDate = $request->transactionDate;
        $researchlog->subjectResearch = $request->subjectResearch;


        $researchlog->save();
        if($researchlog->save()) {
            return response()->json([
                'researchlog' => $researchlog, 
                'message' => 'Employee updated successfully!'
            ], 201);
        } else {
            return response()->json([
                'researchlog' => $researchlog, 
                'message' => 'Some error occured, Please try again!'
            ], 500);
        }
    }

    public function destroy($id)
    {
        $researchlog = ResearchLog::where('client_ID', $id)->first();
        if ($researchlog != null) {
            $researchlog->delete();
            return response()->json([
                'researchlog' => $researchlog, 
                'message' => 'Research Log deleted successfully!'
            ], 500);
        }
        else {
            return response()->json([
                'researchlog' => $researchlog, 
                'researchlog' => 'Some error occured, Please try again!'
            ], 500);
        }
    }


}
