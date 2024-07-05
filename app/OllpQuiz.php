<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class OllpQuiz extends Model
{
    protected $fillable = 
        [
            'id',
            'ollp_id',
            'quiz1',
            'quiz2',
            'quiz3',
            'quiz4',
            'quiz5',
            'quiz6',
            'quiz7',
            'quiz8',
            'quiz9',
            'quiz10',
        ];
}
