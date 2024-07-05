<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Manuscript;
use App\Researcher;

class ManuscriptController extends Controller
{
    public function index()
    {
        $manuscript = Manuscript::orderBy('created_at', 'desc')->paginate();
        return response()->json($manuscript, 200);
    }

    public function create()
    {
    }
 
    public function store(Request $request)
    {
        $manuscript = new Manuscript();
        $manuscript->researcher_id = $request->researcher_id;
        $manuscript->title = $request->title;
        $manuscript->area = $request->area;
        $manuscript->location = $request->location;
        $manuscript->discipline = $request->discipline;
        $manuscript->otherDiscipline = $request->otherDiscipline;
        $manuscript->dateReceived = $request->dateReceived;
        $manuscript->status = $request->status;
        $manuscript->issueNo = $request->issueNo;
        $manuscript->save();
    }

    public function show(Manuscript $manuscript)
    {
    }

    public function edit(Manuscript $manuscript)
    {
    }

    public function update(Request $request, $id)
    {
        $manuscript = Manuscript::where('researcher_id', $id)->first();
        $manuscript->researcher_id = $request->researcher_id;
        $manuscript->title = $request->title;
        $manuscript->area = $request->area;
        $manuscript->location = $request->location;
        $manuscript->discipline = $request->discipline;
        $manuscript->otherDiscipline = $request->otherDiscipline;
        $manuscript->dateReceived = $request->dateReceived;
        $manuscript->status = $request->status;
        $manuscript->issueNo = $request->issueNo;
        $researchers->save();

        if($manuscript->save()) {
            return response()->json([
                'manuscript' => $manuscript, 
                'message' => 'Manuscript updated successfully!'
            ], 201);
        } else {
            return response()->json([
                'manuscript' => $manuscript, 
                'message' => 'Some error occured, Please try again!'
            ], 500);
        }
    }

    public function destroy($id)
    {
         $manuscript = Manuscript::where('researcher_id', $id)->first();
        if ($manuscript != null) {
            $manuscript->delete();
            return response()->json([
                'manuscript' => $manuscript, 
                'message' => 'Manuscript deleted successfully!'
            ], 500);
        }
        else {
            return response()->json([
                'manuscript' => $manuscript, 
                'message' => 'Some error occured, Please try again!'
            ], 500);
        }
    }
}
