<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    protected $fillable = [
        'id',
        'name',
        'clientType',
        'profType',
        'yearLevel',
        'schoolCategory',
        'sex',
        'ageRange',
        'office_school',
        'dateVisited',
        'timeIn',
        'timeOut'
    ];

    public function requestt(){
        return $this->hasMany('App\Requestt', 'client_ID', 'id');
    }

    public function evaluation(){
        return $this->hasMany('App\Evaluation', 'client_ID', 'id');
    }

    public function researchlog(){
        return $this->hasMany('App\ResearchLog', 'client_ID', 'id');
    }
}
