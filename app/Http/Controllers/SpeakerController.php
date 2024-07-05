<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Event;
use App\Speaker;
use App\Participants;

class SpeakerController extends Controller
{
    public function index()
    {
        // $trainings = Training::orderBy('created_at', 'desc')->paginate();
        // $speakers = Speaker::join ('events', 'events.id', '=', 'speakers.id')
        //        	               ->get(['speakers.*', 'events.*']);

        // return response()->json($speakers, 200);


        $speakers = Speaker::orderBy('created_at', 'desc')->paginate();
        return response()->json($speakers, 200);
    }
    
    public function create()
    {
    }

    public function store(Request $request)
    {
        $speakers = new Speaker();
        $speakers->name = $request->name;
        $speakers->sex = $request->sex;
        $speakers->affiliation = $request->affiliation;
        $speakers->designation = $request->designation;
        $speakers->save();
    }

    public function show($id)
    {
    }

    public function edit($id)
    {
    }

    public function update(Request $request, $id)
    {
        $speakers = Speaker::where('id', $id)->first();
        $speakers->name = $request->name;
        $speakers->sex = $request->sex;
        $speakers->affiliation = $request->affiliation;
        $speakers->designation = $request->designation;
        $speakers->save();
        if($speakers->save()) {
            return response()->json([
                'speakers' => $speakers, 
                'message' => 'Employee updated successfully!'
            ], 201);
        } else {
            return response()->json([
                'speakers' => $speakers, 
                'message' => 'Some error occured, Please try again!'
            ], 500);
        }
    }

    public function destroy($id)
    {
        $speakers = Speaker::where('id', $id)->first();
        $speakers->delete();
        return $speakers;
    }
}
