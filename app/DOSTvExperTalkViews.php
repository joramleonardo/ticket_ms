<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class DOSTvExperTalkViews extends Model
{
    protected $fillable = 
        [
            'id',
            'expertalk_id',
            'reach',
            'views',
            'engagement',
            'platform',
        ];
}
