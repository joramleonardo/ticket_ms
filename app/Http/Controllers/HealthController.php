<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Training;
use App\Employee;
use App\Health;

class HealthController extends Controller
{
    public function index()
    {
        // $trainings = Training::orderBy('created_at', 'desc')->paginate();
        $healths = Health::join ('employees', 'employees.id', '=', 'healths.employee_id')
               	               ->get(['healths.*', 'employees.*']);

        return response()->json($healths, 200);
    }
    
    public function create()
    {
    }

    public function store(Request $request)
    {
        $health = new Health();
        $health->employee_id = $request->employeeID;
        $health->ageRange = $request->ageRange;
        $health->yearCover = $request->yearCover;
        $health->healthCondition = $request->healthCondition;
        $health->illnessType = $request->illnessType;
        $health->fitStatus = $request->fitStatus;
        $health->save();
    }

    public function show($id)
    {
    }

    public function edit($id)
    {
    }

    public function update(Request $request, $id)
    {
        $health = Health::where('employee_id', $id)->first();
        $health->ageRange = $request->ageRange;
        $health->yearCover = $request->yearCover;
        $health->healthCondition = $request->healthCondition;
        $health->illnessType = $request->illnessType;
        $health->fitStatus = $request->fitStatus;
        $health->save();
        if($health->save()) {
            return response()->json([
                'health' => $health, 
                'message' => 'Employee updated successfully!'
            ], 201);
        } else {
            return response()->json([
                'health' => $health, 
                'message' => 'Some error occured, Please try again!'
            ], 500);
        }
    }

    public function destroy($id)
    {
        // $health = Health::find($id);
        $health = Health::where('employee_id', $id)->first();
        // $health = Health::where('id', $id)->first();
        $health->delete();
        return $health;
    }
}
