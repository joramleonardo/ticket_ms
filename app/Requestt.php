<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Requestt extends Model
{
    protected $fillable = 
        [
            'id',
            'client_ID',
            'client_Name',
            'transactionDate',
            'status',
            'callNumber',
            'source',
            'title',
            'volIssueNo',
            'numPages',
            'timeIssued',
            'timeReceived',
            'timeReturned',
            'remarks',
            'assistedBy'
        ];


    public function client(){
        return $this->belongsTo('App\Client', 'id');
    }
}
