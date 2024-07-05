<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    protected $fillable = [
        // 'employee_id',
        'id',
        'employee_ID',
        'name',
        'sex',
        'age',
        'designation',
        'nature',
        'level',
        'division'
    ];



    public function trainings(){
        return $this->hasMany('App\Training', 'employee_id', 'id');
    }


    public function healths(){
        return $this->hasMany('App\Health', 'employee_id', 'id');
    }
}
