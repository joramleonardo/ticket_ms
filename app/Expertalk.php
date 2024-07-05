<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Expertalk extends Model
{
    protected $fillable = [
        'id',
        'dateAired',
        'topic',
        'description',
        'links',
        'socAgenda'
    ];
}
