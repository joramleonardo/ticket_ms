<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Tbllogbook;
use DB;

class TbllogbookController extends Controller
{
    public function index()
    {
        $tbllogbooks = Tbllogbook::orderBy('InsertDate', 'desc');
        return response()->json($tbllogbooks->paginate($tbllogbooks->count()), 200);

        // $res = DB::table('tbllogbooks')->get();
        // dd($res);

        // $res = DB::table('tbllogbooks')->orderBy('InsertDate','desc')->paginate();
        
    }

    public function loadEmployeeTraining($id){
        
        // $speakers = Speaker::join ('events', 'events.speaker_id', '=', 'speakers.id')
        //                        ->where('events.id', $id)
        //        	               ->get(['speakers.*', 'events.*']);

        // return response()->json($speakers, 200);
    }

    public function loadEmployeeHealth($id){

        // $participants = Participants::join ('events', 'events.id', '=', 'participants.event_id')
        //                        ->where('events.id', $id)
        //        	               ->get(['participants.*', 'events.*']);

        // return response()->json($participants, 200);
    }
    
    public function create()
    {
    }
 
    public function store(Request $request)
    {
        // $events = new Event();
        // $events->activityTitle = $request->activityTitle;
        // $events->date = $request->date;
        // $events->venue = $request->venue;
        // $events->partnerInstitutions = $request->partnerInstitutions;
        // $events->topic = $request->topic;
        // $events->speaker_id = $request->speaker_id;
        // $events->status = $request->status;
        // $events->save();
    }

    public function show(Event $events)
    {
    }

    public function edit(Event $events)
    {
    }

    public function update(Request $request, $id)
    {
        // $events = Event::where('id', $id)->first();
        // $events->activityTitle = $request->activityTitle;
        // $events->date = $request->date;
        // $events->venue = $request->venue;
        // $events->partnerInstitutions = $request->partnerInstitutions;
        // $events->topic = $request->topic;
        // $events->speaker_id = $request->speaker_id;
        // $events->status = $request->status;
        // $events->save();
        // if($events->save()) {
        //     return response()->json([
        //         'events' => $events, 
        //         'message' => 'Event updated successfully!'
        //     ], 201);
        // } else {
        //     return response()->json([
        //         'events' => $events, 
        //         'message' => 'Some error occured, Please try again!'
        //     ], 500);
        // }
    }

    public function destroy($id)
    {
        // $events = Event::find($id);
        // $events->delete();
        // return $events;
    }

    public function createTraining(Request $request){
        // $speakers = Speaker::create([
        //         'name' => $request->name,
        //         'sex' => $request->sex,
        //         'affiliation' => $request->affiliation,
        //         'designation' => $request->designation,
        //     ]);
    }
}