<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Training extends Model
{
    protected $fillable = [
        'id',
        'employee_id',
        'trainingType',
        'trainingTopic',
        'trainingTitle',
        'startDate',
        'endDate',
        'noHours',
        'trainingProvider',
        'trainor',
        'fundingSource',
        'created_at',
        'updated_at'
    ];

    public function employees(){
        return $this->belongsTo('App\Employee', 'employee_id');
    }
}