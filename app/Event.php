<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    protected $fillable = [
        'id',
        'activityTitle',
        'date',
        'venue',
        'partnerInstitutions',
        'topic',
        'speaker_id',
        'status',
];



    public function speakers(){
        return $this->hasMany('App\Speaker', 'id', 'speaker_id'); // yung 'id' under speaker table = yung 'speaker_id' under event table
    }


    public function paricipants(){
        return $this->hasMany('App\Paricipants', 'event_id', 'id');
    }
}
