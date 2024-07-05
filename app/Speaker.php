<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Speaker extends Model
{
    protected $fillable = [
        'id',
        'name',
        'sex',
        'affiliation',
        'designation'
    ];

    public function events(){
        return $this->belongsTo('App\Event', 'id');
    }
}
