<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Health extends Model
{
    //

    protected $fillable = 
        [
            'id',
            'employee_id',
            'ageRange',
            'yearCover',
            'healthCondition',
            'illnessType',
            'fitStatus',
            'created_at',
            'updated_at'
        ];


    public function trainings(){
        return $this->belongsTo('App\Employee', 'employee_id');
    }
}
