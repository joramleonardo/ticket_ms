<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tbllogbook extends Model
{
    protected $fillable = [
        'id',
        'Date',
        'Name',
        'intAge',
        'intGender',
        'intStatus',
        'intRegion',
        'intProvince',
        'intCity',
        'Location',
        'intCategory',
        'Affiliation',
        'Email',
        'SchoolType',
        'OthersCat',
        'InsCode'
    ];
}
