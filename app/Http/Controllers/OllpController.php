<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Ollp;
use App\OllpEval;
use App\OllpQuiz;

class OllpController extends Controller
{
    public function index()
    {
        $data = Ollp::orderBy('startTime', 'desc')->paginate(1000);
        return response()->json($data, 200);
    }

    public function loadOllpEval($id){
        $data = OllpEval::join ('ollps', 'ollps.id', '=', 'ollp_evals.ollp_id')
                                    ->where('ollps.id', $id)
               	                    ->get(['ollps.*', 'ollp_evals.*']);

        return response()->json($data, 200);
    } 

    public function loadOllpQuiz($id){
        $data = OllpQuiz::join ('ollps', 'ollps.id', '=', 'ollp_quizzes.ollp_id')
                                    ->where('ollps.id', $id)
               	                    ->get(['ollps.*', 'ollp_quizzes.*']);

        return response()->json($data, 200);
    } 

    public function create()
    {
    }

    public function store(Request $request)
    {
    }

    public function show($id)
    {
    }

    public function edit($id)
    {
    }

    public function update(Request $request, $id)
    {
    }

    public function destroy($id)
    {
    }
}
