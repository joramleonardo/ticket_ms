<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Ollp;
use App\OllpEval;
use App\OllpQuiz;

class OllpEvalController extends Controller
{
    public function index()
    {
        $data = OllpEval::orderBy('created_at', 'desc')->paginate(120);
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
