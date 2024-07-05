<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Training;
use App\Employee;
use App\Health;
use App\TrainingParticipant;

class TrainingController extends Controller
{
    public function index()
    {
        // $trainings = Training::join ('employees', 'employees.id', '=', 'trainings.employee_id')
        //        	               ->get(['trainings.*', 'employees.*']);

        // return response()->json($trainings, 200);

        // $trainings = DB::table('trainings')->paginate(1000);
        // return response()->json($trainings, 200);

        // $employees = Training::orderBy('id', 'desc')->paginate();
        // return response()->json($employees, 200);

        // $tbllogbooks = DB::table('trainings')->orderBy('startDate', 'asc'); 
        // return response()->json($tbllogbooks->paginate($tbllogbooks->count()), 200);

        // $tbllogbooks = Training::select('*',
        //                         DB::raw("YEAR(startDate) as startDate"))
        //                         ->orderBy('startDate', 'asc'); 

        // return response()->json($tbllogbooks->paginate($tbllogbooks->count()), 200);

        // $tbllogbooks = Training::select('*',
        //                         DB::raw("DATE_FORMAT(startDate, '%Y %M %d') as startDate"),
        //                         DB::raw("DATE_FORMAT(endDate, '%Y %M %d') as endDate"),
        //                         DB::raw("MONTHNAME(startDate) as totalCount"),
        //                         DB::raw("MONTHNAME(startDate) as monthName"),
        //                         DB::raw("YEAR(startDate) as year"))
        //                         ->orderBy('year', 'desc')
        //                         ->paginate(); 
        // return response()->json($tbllogbooks, 200);

       $tbllogbooks = Training::select('*',
                                DB::raw("DATE_FORMAT(startDate, '%Y %M %d') as startDate"),
                                DB::raw("DATE_FORMAT(endDate, '%Y %M %d') as endDate"),
                                DB::raw("MONTHNAME(startDate) as totalCount"),
                                DB::raw("MONTHNAME(startDate) as monthName"),
                                DB::raw("YEAR(startDate) as year"))
                                ->orderBy('year', 'desc')
                                ->paginate(); 
        // $total = $tbllogbooks->count();
        return response()->json($tbllogbooks, 200);

        // return response()->json($tbllogbooks->paginate($tbllogbooks->count()), 200);

       
    }

    public function loadTrainingParticipants($id){
        
        $data = TrainingParticipant::join ('trainings', 'trainings.id', '=', 'training_participants.training_id')
                                    ->where('trainings.id', $id)
               	                    ->get(['trainings.*', 'training_participants.*']);

        // $data = Training::join ('training_participants', 'training_participants.training_id', '=', 'trainings.id')
        // ->where('training_participants.training_id', $id)
        //     ->get(['trainings.*', 'training_participants.*']);

        return response()->json($data, 200);
    } 

    public function getAll()
    {
        $tbllogbooks = Training::select('*',
                                DB::raw("DATE_FORMAT(endDate, '%Y %M %d') as endDate"),
                                DB::raw("DATE_FORMAT(startDate, '%Y %M %d') as startDate"))
                                // DB::raw("MONTHNAME(startDate) as totalCount"),
                                // DB::raw("MONTHNAME(startDate) as monthName"),
                                // DB::raw("YEAR(startDate) as year"))
                                // ->orderBy('startDate', 'desc')
                                ->paginate(150); 

                                // $tbllogbooks = DB::table('trainings')
                                // ->orderBy('startDate','desc')
                                // ->paginate();

        // $total = $tbllogbooks->count();
        return response()->json($tbllogbooks, 200);

    }

    public function getTrainings()
    {
        $data = Training::get();
        return response()->json($data);

    }

    public function create()
    {
    }

    public function store(Request $request)
    {
        $training = new Training();
        $training->employee_id = $request->employeeID;
        $training->trainingType = $request->trainingType;
        $training->trainingTopic = $request->trainingTopic;
        $training->trainingTitle = $request->trainingTitle;
        $training->startDate = $request->startDate;
        $training->endDate = $request->endDate;
        // $training->noHours = $request->noHours;
        $training->trainingProvider = $request->trainingProvider;
        $training->trainor = $request->trainor;
        $training->fundingSource = $request->fundingSource;
        $training->save();
    }

    public function addParticipant(Request $request)
    {
        $training = new Training();
        $training->id = $request->id;
        $training->employee_id = $request->employeeID;
        $training->trainingType = $request->trainingType;
        $training->trainingTopic = $request->trainingTopic;
        $training->trainingTitle = $request->trainingTitle;
        $training->startDate = $request->startDate;
        $training->endDate = $request->endDate;
        // $training->noHours = $request->noHours;
        $training->trainingProvider = $request->trainingProvider;
        $training->trainor = $request->trainor;
        $training->fundingSource = $request->fundingSource;
        $training->save();
    }

    public function show($id)
    {
    }

    public function edit($id)
    {
    }

    public function update(Request $request, $id)
    {
        $training = Training::where('employee_id', $id)->first();
        // $training->employee_id = $request->employeeID;
        $training->trainingType = $request->trainingType;
        $training->trainingTopic = $request->trainingTopic;
        $training->trainingTitle = $request->trainingTitle;
        $training->startDate = $request->startDate;
        $training->endDate = $request->endDate;
        $training->noHours = $request->noHours;
        $training->trainingProvider = $request->trainingProvider;
        $training->trainor = $request->trainor;
        $training->fundingSource = $request->fundingSource;
        $training->save();
        if($training->save()) {
            return response()->json([
                'training' => $training, 
                'message' => 'Employee updated successfully!'
            ], 201);
        } else {
            return response()->json([
                'training' => $training, 
                'message' => 'Some error occured, Please try again!'
            ], 500);
        }
    }

    public function destroy($id)
    {
        // $training = Training::find($id);
        $training = Training::where('id', $id)->first();
        if ($training != null) {
            $training->delete();
            return response()->json([
                'training' => $training, 
                'message' => 'Training deleted successfully!'
            ], 500);
        }
        else {
            return response()->json([
                'training' => $training, 
                'message' => 'Some error occured, Please try again!'
            ], 500);
        }
        // $training = Training::where('employee_id', $id)->first();
        // $training->delete();
        // return $training;
    }
}
