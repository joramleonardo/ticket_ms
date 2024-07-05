<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Admin extends Model
{
    protected $fillable = [
        // 'employee_id',
        'id',
        'employee_ID',
        'name',
        'sex',
        'age',
        'designation',
        'nature',
        'level',
        'division'
    ];
}
