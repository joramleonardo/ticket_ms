<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ActivityLog extends Model
{
    protected $fillable = [
        'id', //1
        'username', //2
        'activity_id', //3
        'ticket_id', //4
    ];

    public function activity(){
        return $this->hasMany('App\Activity', 'id', 'id'); // 'id' of tblreferencecode table = 'ticket_id' of tblticket table
    }
}
