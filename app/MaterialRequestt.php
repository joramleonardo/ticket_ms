<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class MaterialRequestt extends Model
{
    protected $fillable = 
        [
            'id',
            'assistedBy',
            'clientType',
            'responsiveness',
            'reliability',
            'accessAndFacilities',
            'communication',
            'costs',
            'integrity',
            'assurance',
            'outcome',
            'sex',
            'category',
            'ageBracket',
            'region',
            'researchInterests',
            'topic',
            'suggestion'
        ];
}
