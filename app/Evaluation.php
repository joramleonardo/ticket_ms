<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Evaluation extends Model
{
    protected $fillable = 
        [
            'id',
            'client_ID',
            'transactionDate',
            'eval_1',
            'eval_2',
            'eval_3',
            'eval_4',
            'materialNotFound',
            'suggestions'
        ];


    public function client(){
        return $this->belongsTo('App\Client', 'id');
    }
}
