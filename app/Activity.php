<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Activity extends Model
{
    protected $fillable = [
        'id', //1
        'activity_name', //2
    ];

    public function activityLog(){
        return $this->belongsTo('App\ActivityLog', 'id');
    }
}
