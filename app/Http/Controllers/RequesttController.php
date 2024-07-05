<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Client;
use App\Requestt;
use App\Evaluation;
use App\ResearchLog;

class RequesttController extends Controller
{
    public function index()
    {
        $requestt = Requestt::join ('clients', 'clients.id', '=', 'requestts.client_ID')
               	               ->get(['requestts.*', 'clients.*']);
        return response()->json($requestt, 200);
    }

    public function create()
    {
    }

    public function store(Request $request)
    {
        $requestt = new Requestt();
        $requestt->client_ID = $request->client_ID;
        $requestt->transactionDate = $request->transactionDate;
        $requestt->status = $request->status;
        $requestt->callNumber = $request->callNumber;
        $requestt->source = $request->source;
        $requestt->title = $request->title;
        $requestt->volIssueNo = $request->volIssueNo;
        $requestt->numPages = $request->numPages;
        $requestt->timeIssued = $request->timeIssued;
        $requestt->timeReceived = $request->timeReceived;
        $requestt->timeReturned = $request->timeReturned;
        $requestt->remarks = $request->remarks;
        $requestt->assistedBy = $request->assistedBy;
        $requestt->save();
    }

    public function show($id)
    {
    }

    public function edit($id)
    {
    }

    public function update(Request $request, $id)
    {
        $requestt = Requestt::where('client_ID', $id)->first();
        $requestt->client_ID = $request->client_ID;
        $requestt->transactionDate = $request->transactionDate;
        $requestt->status = $request->status;
        $requestt->callNumber = $request->callNumber;
        $requestt->source = $request->source;
        $requestt->title = $request->title;
        $requestt->volIssueNo = $request->volIssueNo;
        $requestt->numPages = $request->numPages;
        $requestt->timeIssued = $request->timeIssued;
        $requestt->timeReceived = $request->timeReceived;
        $requestt->timeReturned = $request->timeReturned;
        $requestt->remarks = $request->remarks;
        $requestt->assistedBy = $request->assistedBy;
        $requestt->save();
        if($requestt->save()) {
            return response()->json([
                'requestt' => $requestt, 
                'message' => 'Employee updated successfully!'
            ], 201);
        } else {
            return response()->json([
                'requestt' => $requestt, 
                'message' => 'Some error occured, Please try again!'
            ], 500);
        }
    }

    public function destroy($id)
    {
        $requestt = Requestt::where('employee_id', $id)->first();
        if ($requestt != null) {
            $requestt->delete();
            return response()->json([
                'requestt' => $requestt, 
                'message' => 'Request deleted successfully!'
            ], 500);
        }
        else {
            return response()->json([
                'requestt' => $requestt, 
                'requestt' => 'Some error occured, Please try again!'
            ], 500);
        }
    }
}
