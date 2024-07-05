<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function index()
    {
        $user = User::orderBy('created_at', 'desc')->paginate();
        return response()->json($user, 200);
    }
    public function create()
    {
    }
 
    public function store(Request $request)
    {
        $password = bcrypt($request->password);

        $user = User::create([
            'name' => $request->name,
            'username' => $request->username,
            'password' => $password,
            'role' => $request->role,
            'isActivated' => $request->isActivated
        ]);

        return $user;

        // $user = new User();
        // $user->name = $request->name;
        // $user->email = $request->email;
        // $user->password = $request->password;
        // $user->role = $request->role;
        // $user->isActivated = $request->isActivated;
        // $user->save();
    }

    public function show(Employee $employee)
    {
    }

    public function edit(Employee $employee)
    {
    }

    public function update(Request $request, $id)
    {
        $user = User::where('id', $id)->first();
        $user->name = $request->name;
        $user->username = $request->username;
        $user->role = $request->role;
        $user->isActivated = $request->isActivated;
        $user->save();
        if($user->save()) {
            return response()->json([
                'user' => $user, 
                'message' => 'User account updated successfully!'
            ], 201);
        } else {
            return response()->json([
                'user' => $user, 
                'message' => 'Some error occured, Please try again!'
            ], 500);
        }
    }

    public function destroy($id)
    {
        $user = User::find($id);
        $user->delete();
        return $user;
    }

}
