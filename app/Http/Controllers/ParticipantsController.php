<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Event;
use App\Speaker;
use App\Participants;

class ParticipantsController extends Controller
{
    public function index()
    {
        // $participants = Participants::orderBy('created_at', 'desc')->paginate();
        // return response()->json($participants, 200);
        
        $participants = Participants::orderBy('created_at', 'desc')->paginate(2000);
        return response()->json($participants, 200);
    }
    
    public function create()
    {
    }

    public function store(Request $request)
    {
        // 'event_id',
        // 'name',
        // 'email',
        // 'sex',
        // 'age',
        // 'school',
        // 'gradeLevel',
        // 'affiliation',
        // 'designation',
        // 'location',
        // 'province',
        // 'region',
        // 'participantType',
        $participants = new Participants();
        $participants->event_id = $request->event_id;
        $participants->name = $request->name;
        $participants->email = $request->email;
        $participants->sex = $request->sex;
        $participants->age = $request->age;
        $participants->school = $request->school;
        $participants->gradeLevel = $request->gradeLevel;
        $participants->affiliation = $request->affiliation;
        $participants->designation = $request->designation;
        $participants->location = $request->location;
        $participants->province = $request->province;
        $participants->region = $request->region;
        $participants->participantType = $request->participantType;
        $participants->save();
    }

    public function show($id)
    {
    }

    public function edit($id)
    {
    }

    public function update(Request $request, $id)
    {
        $participants = Participants::where('id', $id)->first();
        $participants->event_id = $request->event_id;
        $participants->name = $request->name;
        $participants->email = $request->email;
        $participants->sex = $request->sex;
        $participants->age = $request->age;
        $participants->school = $request->school;
        $participants->gradeLevel = $request->gradeLevel;
        $participants->affiliation = $request->affiliation;
        $participants->designation = $request->designation;
        $participants->location = $request->location;
        $participants->province = $request->province;
        $participants->region = $request->region;
        $participants->participantType = $request->participantType;
        $participants->save();
        if($participants->save()) {
            return response()->json([
                'participants' => $participants, 
                'message' => 'Employee updated successfully!'
            ], 201);
        } else {
            return response()->json([
                'participants' => $participants, 
                'message' => 'Some error occured, Please try again!'
            ], 500);
        }
    }

    public function destroy($id)
    {
        $participants = Participants::where('id', $id)->first();
        $participants->delete();
        return $participants;
    }
}
