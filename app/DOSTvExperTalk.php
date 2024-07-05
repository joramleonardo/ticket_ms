<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class DOSTvExperTalk extends Model
{
    protected $fillable = 
        [
            'id',
            'dateAired',
            'topic',
            'description',
            'links',
            'socAgenda'
        ];

    public function dostvexpertalk(){
        return $this->hasMany('App\DOSTvExpertalkGuest', 'expertalk_ID', 'id');
    }
}
