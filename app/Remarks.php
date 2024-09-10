<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Remarks extends Model
{
    protected $fillable = [
        'id', //1
        'ticket_id', //2
        'remarks', //3
        'assigned_staff', //4
    ];

    public function remarks(){
        return $this->hasMany('App\Remarks', 'id', 'id'); // 'id' of tblreferencecode table = 'ticket_id' of tblticket table
    }
}
