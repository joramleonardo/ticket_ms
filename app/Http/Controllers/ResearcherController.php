<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Researcher;
use App\Manuscript;
use Illuminate\Support\Facades\DB;

class ResearcherController extends Controller
{
    public function index()
    {
        $researchers = Researcher::orderBy('created_at', 'desc')->paginate();
        return response()->json($researchers, 200);
    }

    public function loadEmployeeManuscript($id){
        
        $researchers = Researcher::join ('manuscripts', 'manuscripts.researcher_id', '=', 'researchers.id')
                               ->where('manuscripts.researcher_id', $id)
               	               ->get(['researchers.*', 'manuscripts.*']);

        return response()->json($researchers, 200);
    }

    public function create()
    {
    }
 
    public function store(Request $request)
    {
        $researchers = new Researcher();
        $researchers->name = $request->name;
        $researchers->sex = $request->sex;
        $researchers->location = $request->location;
        $researchers->countryName = $request->countryName;
        $researchers->affiliation = $request->affiliation;
        $researchers->affiliationType = $request->affiliationType;
        $researchers->otherAffiliationType = $request->otherAffiliationType;
        $researchers->save();
    }

    public function show(Researcher $researchers)
    {
    }

    public function edit(Researcher $researchers)
    {
    }

    public function update(Request $request, $id)
    {
        $researchers = Researcher::where('id', $id)->first();
        $researchers->name = $request->name;
        $researchers->sex = $request->sex;
        $researchers->location = $request->location;
        $researchers->countryName = $request->countryName;
        $researchers->affiliation = $request->affiliation;
        $researchers->affiliationType = $request->affiliationType;
        $researchers->otherAffiliationType = $request->otherAffiliationType;
        $researchers->save();

        if($researchers->save()) {
            return response()->json([
                'researchers' => $researchers, 
                'message' => 'Researcher updated successfully!'
            ], 201);
        } else {
            return response()->json([
                'researchers' => $researchers, 
                'message' => 'Some error occured, Please try again!'
            ], 500);
        }
    }

    public function destroy($id)
    {
        $researchers = Researcher::find($id);
        $researchers->delete();
        return $researchers;
    }
}
