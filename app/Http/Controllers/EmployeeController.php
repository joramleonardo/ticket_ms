<?php

namespace App\Http\Controllers;

use App\Employee;
use Illuminate\Http\Request;
use App\Training;
use App\Health;
use Illuminate\Support\Facades\DB;


class EmployeeController extends Controller
{
    public function index()
    {
        $employees = Employee::orderBy('created_at', 'desc')->paginate();
        return response()->json($employees, 200);
    }

    public function loadEmployeeData($id){
        
        $trainings = Employee::where('id', $id)
                                ->get();

        return response()->json($trainings, 200);
    }
    public function loadTrainingData($id){
        
        $trainings = Training::where('id', $id)
                                ->get();

        return response()->json($trainings, 200);
    }

    public function loadEmployeeTraining($id){
        
        $trainings = Training::join ('employees', 'employees.id', '=', 'trainings.employee_id')
                               ->where('employees.id', $id)
               	               ->get(['trainings.*', 'employees.*']);

        return response()->json($trainings, 200);
    }

    public function loadEmployeeHealth($id){

        $healths = Health::join ('employees', 'employees.id', '=', 'healths.employee_id')
                               ->where('employees.id', $id)
               	               ->get(['healths.*', 'employees.*']);

        return response()->json($healths, 200);
    }

    public function getEmployess(){
        $data = Employee::get();
        return response()->json($data);
    }

    public function create()
    {
    }
 
    public function store(Request $request)
    {
        $employee = new Employee();
        $employee->employee_number = $request->employee_number;
        $employee->name = $request->name;
        $employee->sex = $request->sex;
        $employee->age = $request->age;
        $employee->designation = $request->designation;
        $employee->nature = $request->nature;
        $employee->level = $request->level;
        $employee->division = $request->division;
        $employee->save();
    }

    public function show(Employee $employee)
    {
    }

    public function edit(Employee $employee)
    {
    }

    public function update(Request $request, $id)
    {
        $employee = Employee::where('id', $id)->first();
        $employee->employee_number = $request->employee_number;
        $employee->name = $request->name;
        $employee->sex = $request->sex;
        $employee->age = $request->age;
        $employee->designation = $request->designation;
        $employee->nature = $request->nature;
        $employee->level = $request->level;
        $employee->division = $request->division;
        $employee->save();
        if($employee->save()) {
            return response()->json([
                'employee' => $employee, 
                'message' => 'Employee updated successfully!'
            ], 201);
        } else {
            return response()->json([
                'employee' => $employee, 
                'message' => 'Some error occured, Please try again!'
            ], 500);
        }
    }

    public function destroy($id)
    {
        $employee = Employee::find($id);
        $employee->delete();
        return $employee;
    }

    public function createTraining(Request $request){
        $training = Training::create([
                'employee_id' => $request->employeeID,
                'trainingType' => $request->trainingType,
                'trainingTopic' => $request->trainingTopic,
                'trainingTitle' => $request->trainingTitle,
                'startDate' => $request->startDate, 
                'endDate' => $request->endDate,
                'noHours' => $request->noHours,
                'trainingProvider' => $request->trainingProvider,
                'trainor' => $request->trainor,
                'fundingSource' => $request->fundingSource,
            ]);
    }
}
