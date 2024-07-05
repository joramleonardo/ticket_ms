<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Client;
use App\Requestt;
use App\Evaluation;
use App\ResearchLog;

class EvaluationController extends Controller
{
    public function index()
    {
        $evaluation = Evaluation::join ('clients', 'clients.id', '=', 'evaluations.client_ID')
               	               ->get(['evaluations.*', 'clients.*']);
        return response()->json($evaluation, 200);
    }

    public function create()
    {
    }

    public function store(Request $request)
    {
        $evaluation = new Evaluation();
        $evaluation->client_ID = $request->client_ID;
        $evaluation->transactionDate = $request->transactionDate;
        $evaluation->eval_1 = $request->eval_1;
        $evaluation->eval_2 = $request->eval_2;
        $evaluation->eval_3 = $request->eval_3;
        $evaluation->eval_4 = $request->eval_4;
        $evaluation->materialNotFound = $request->materialNotFound;
        $evaluation->suggestions = $request->suggestions;
        $evaluation->save();
    }

    public function show($id)
    {
    }

    public function edit($id)
    {
    }

    public function update(Request $request, $id)
    {
        $evaluation = Evaluation::where('client_ID', $id)->first();

        $evaluation->client_ID = $request->client_ID;
        $evaluation->transactionDate = $request->transactionDate;
        $evaluation->eval_1 = $request->eval_1;
        $evaluation->eval_2 = $request->eval_2;
        $evaluation->eval_3 = $request->eval_3;
        $evaluation->eval_4 = $request->eval_4;
        $evaluation->materialNotFound = $request->materialNotFound;
        $evaluation->suggestions = $request->suggestions;


        $evaluation->save();
        if($evaluation->save()) {
            return response()->json([
                'evaluation' => $evaluation, 
                'message' => 'Employee updated successfully!'
            ], 201);
        } else {
            return response()->json([
                'evaluation' => $evaluation, 
                'message' => 'Some error occured, Please try again!'
            ], 500);
        }
    }

    public function destroy($id)
    {
        $evaluation = Evaluation::where('employee_id', $id)->first();
        if ($evaluation != null) {
            $evaluation->delete();
            return response()->json([
                'evaluation' => $evaluation, 
                'message' => 'Evaluation deleted successfully!'
            ], 500);
        }
        else {
            return response()->json([
                'evaluation' => $evaluation, 
                'evaluation' => 'Some error occured, Please try again!'
            ], 500);
        }
    }
}
