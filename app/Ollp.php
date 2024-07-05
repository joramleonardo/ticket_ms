<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Ollp extends Model
{
    protected $fillable = 
        [
            'id',
            'startTime',
            'completionTime',
            'email',
            'name',
            'sex',
            'category',
            'comments',
            'howLikely',
        ];
}
