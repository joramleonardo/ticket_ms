<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Researcher extends Model
{
    protected $fillable = [
        // 'employee_id',
        'id',
        'name',
        'location',
        'countryName',
        'affiliation',
        'affiliationType',
        'otherAffiliationType'
    ];

    public function manuscripts(){
        return $this->hasMany('App\Manuscript', 'researcher_id', 'id');
    }
}
