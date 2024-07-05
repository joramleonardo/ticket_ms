<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;
use Session;


class AuthController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function register(Request $request){
        $validate = $request->validate([ 
            'username' => ['required','string','max:255', 'regex:/^[^(\|\]~`!%^&*=};:?><’)]*$/'],
            'password' => 'required|string|min:4|confirmed',
            'password_confirmation' => 'required|min:4|same:password',
        ]);

        $user = User::create(
            [
                'name'          =>      $request->name,
                'username'      =>      $request->username,
                'password'      =>      Hash::make($request->password),
                'userType'      =>      $request->userType,
                'isActivated'   =>      $request->isActivated
            ],
        );

        if($user->save()){
            return response()->json([
                'message'       =>  'User created successfully!',
                'status_code'   =>  201
            ], 201);
        } else {
            return response()->json([
                'message'       =>  'Some error occurred, Please try again!',
                'status_code'   =>  500
            ], 500);
        }
        return $request->all();
    }


    public function login(Request $request){
        $request->validate([
            'username' => 'required',
            'password' => 'required',
        ]);
            if( !Auth::attempt( ['username' => $request->username, 'password' => $request->password]) ) {
            return response()->json([
                    'message' => 'Invalid Username/Password',
                    'status_code' => 401    
                ] , 401
            );
        }

        $user =  $request->user();
          
        if($user->role == "Super Admin" ){ 
            $tokenPermission = $user->createToken('Personal Access Token', ['superadmin']);
        }
        else if($user->role == "Admin" ){ 
            $tokenPermission = $user->createToken('Personal Access Token', ['admin']);
        }
        else if($user->role == "Staff" ){ 
            $tokenPermission = $user->createToken('Personal Access Token', ['staff']);
        }
        else if($user->role == "Author" ){ 
            $tokenPermission = $user->createToken('Personal Access Token', ['author_lib']);
        }
        // else if($user->role == "Author Libray" ){ 
        //     $tokenPermission = $user->createToken('Personal Access Token', ['author_lib']);
        // }
        // else if($user->role == "Author PJS" ){ 
        //     $tokenPermission = $user->createToken('Personal Access Token', ['author_pjs']);
        // }
        // else if($user->role == "Author SJA" ){ 
        //     $tokenPermission = $user->createToken('Personal Access Token', ['author_sja']);
        // }
        // else if($user->role == "Author Starbooks" ){ 
        //     $tokenPermission = $user->createToken('Personal Access Token', ['author_starbooks']);
        // }
        // else if($user->role == "Author DOSTv" ){ 
        //     $tokenPermission = $user->createToken('Personal Access Token', ['author_dostv']);
        // }

        $token = $tokenPermission->token;
        
        // if($request->remember_me){
        //     $token->expires_at = Carbon::now()->addMinutes(1);
        // }
        if($token->save()){
            
            $data = response()->json([
                'user' => $user,
                'access_token' => $tokenPermission->accessToken,
                'token_type' => 'Bearer',
                'token_scope' => $tokenPermission->token->scopes[0],
                // 'expires_at' => Carbon::parse($tokenPermission->token->expires_at)->toDateTimeString(),
                'status_code' => 200
            ], 200);  
            
            Session::put('sessionUserData',  $data);
            return $data;
        } else {
            return response()->json(
                [
                    'message' => 'Some error occured, please try again',
                    'status_code' => 500
                ], 500   
            );
        }
    }   


    public function logout(Request $request){
        Session::flush();
        $request->user()->token()->revoke();
        
        return response()->json(
            [
                'message' => 'Logout Successfully',
                'status_code' => 201
            ], 201   
        );
    }

    public function userProfile(Request $request){
        if($request->user()) {
            return response()->json($request->user(), 200);
        }

        return response()->json(
            [
                'message' => 'Not loggedin!',
                'status_code' => 500
            ], 500 
        );
    }
    
}
