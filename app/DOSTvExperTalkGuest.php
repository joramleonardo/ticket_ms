<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class DOSTvExperTalkGuest extends Model
{
    protected $fillable = 
        [
            'id',
            'expertalk_id',
            'name',
            'designation',
            'orgAffiliation',
            'sex',
        ];

        public function expertalk(){
            return $this->belongsTo('App\DOSTvExperTalk', 'id');
        }
}
