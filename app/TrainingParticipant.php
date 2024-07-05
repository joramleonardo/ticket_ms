<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TrainingParticipant extends Model
{
    protected $fillable = [
        'id',
        'employee_id',
        'training_id',
        'position_title',
        'sex',
        'division',
    ];
}
