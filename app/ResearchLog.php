<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ResearchLog extends Model
{
    protected $fillable = 
        [
            'id',
            'client_ID',
            'transactionDate',
            'subjectResearch'
        ];


    public function client(){
        return $this->belongsTo('App\Client', 'id');
    }
}
