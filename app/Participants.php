<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Participants extends Model
{
    protected $fillable = [
        'id',
        'event_id',
        'name',
        'email',
        'sex',
        'age',
        'school',
        'gradeLevel',
        'affiliation',
        'designation',
        'location',
        'province',
        'region',
        'participantType',
        'created_at'
    ];

    public function events(){
        return $this->belongsTo('App\Event', 'event_id');
    }
}
