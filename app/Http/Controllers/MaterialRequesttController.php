<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Client;
use App\Requestt;
use App\MaterialRequestt;
use App\Evaluation;
use App\ResearchLog;

class MaterialRequesttController extends Controller
{
    public function index()
    {
        $material_requestts = MaterialRequestt::orderBy('created_at', 'desc')->paginate(120);
        return response()->json($material_requestts, 200);
    }

    public function create()
    {
    }

    public function store(Request $request)
    {
        $material_requestts = new MaterialRequestt();
        $material_requestts->assistedBy = $request->assistedBy;
        $material_requestts->clientType = $request->clientType;
        $material_requestts->responsiveness = $request->responsiveness;
        $material_requestts->reliability = $request->reliability;
        $material_requestts->accessAndFacilities = $request->accessAndFacilities;
        $material_requestts->communication = $request->communication;
        $material_requestts->costs = $request->costs;
        $material_requestts->integrity = $request->integrity;
        $material_requestts->assurance = $request->assurance;
        $material_requestts->outcome = $request->outcome;
        $material_requestts->sex = $request->sex;
        $material_requestts->category = $request->category;
        $material_requestts->ageBracket = $request->ageBracket;
        $material_requestts->region = $request->region;
        $material_requestts->researchInterests = $request->researchInterests;
        $material_requestts->topic = $request->topic;
        $material_requestts->suggestion = $request->suggestion;
        $material_requestts->save();
    }

    public function show($id)
    {
    }

    public function edit($id)
    {
    }

    public function update(Request $request, $id)
    {
        $requestt = MaterialRequestt::where('id', $id)->first();
        $requestt->assistedBy = $request->assistedBy;
        $requestt->clientType = $request->clientType;
        $requestt->responsiveness = $request->responsiveness;
        $requestt->reliability = $request->reliability;
        $requestt->accessAndFacilities = $request->accessAndFacilities;
        $requestt->communication = $request->communication;
        $requestt->costs = $request->costs;
        $requestt->integrity = $request->integrity;
        $requestt->assurance = $request->assurance;
        $requestt->outcome = $request->outcome;
        $requestt->sex = $request->sex;
        $requestt->category = $request->category;
        $requestt->ageBracket = $request->ageBracket;
        $requestt->region = $request->region;
        $requestt->researchInterests = $request->researchInterests;
        $requestt->topic = $request->topic;
        $requestt->suggestion = $request->suggestion;
        $requestt->save();
        if($requestt->save()) {
            return response()->json([
                'requestt' => $requestt, 
                'message' => 'Employee updated successfully!'
            ], 201);
        } else {
            return response()->json([
                'requestt' => $requestt, 
                'message' => 'Some error occured, Please try again!'
            ], 500);
        }
    }

    public function destroy($id)
    {
        $employee = MaterialRequestt::find($id);
        $employee->delete();
        return $employee;
    }
}
