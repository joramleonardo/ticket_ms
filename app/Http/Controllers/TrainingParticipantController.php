<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Training;
use App\Employee;
use App\Health;
use App\TrainingParticipant;

class TrainingParticipantController extends Controller
{
    public function index()
    {
        $data = TrainingParticipant::orderBy('created_at', 'desc')->paginate(2000);
        return response()->json($data, 200);
    }
    
    public function create()
    {
    }

    public function store(Request $request)
    {
        // 'id',
        // 'employee_id',
        // 'training_id',

        $data = new TrainingParticipant();
        $data->event_id = $request->employee_id;
        $data->name = $request->training_id;
        $data->save();
    }

    public function addParticipant(Request $request)
    {
        $data = new TrainingParticipant();
        $data->employee_id = $request->employee_id;
        $data->training_id = $request->training_id;
        $data->position_title = $request->position_title;
        $data->sex = $request->sex;
        $data->division = $request->division;
        $data->save();
    }

    public function show($id)
    {
    }

    public function edit($id)
    {
    }

    public function update(Request $request, $id)
    {
        $data = TrainingParticipant::where('id', $id)->first();
        $data->event_id = $request->employee_id;
        $data->name = $request->training_id;
        $data->save();
        if($data->save()) {
            return response()->json([
                'data' => $data, 
                'message' => 'Data updated successfully!'
            ], 201);
        } else {
            return response()->json([
                'data' => $data, 
                'message' => 'Some error occured, Please try again!'
            ], 500);
        }
    }

    public function destroy($id)
    {
        $data = TrainingParticipant::where('id', $id)->first();
        $data->delete();
        return $data;
    }
}