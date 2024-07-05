<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Manuscript extends Model
{
    protected $fillable = [
        'id',
        'researcher_id',
        'title',
        'area',
        'location',
        'discipline',
        'otherDiscipline',
        'dateReceived',
        'status',
        'issueNo'
    ];

    public function researchers(){
        return $this->belongsTo('App\Researcher', 'id');
    }
}
