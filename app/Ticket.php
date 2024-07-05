<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Ticket extends Model
{
    protected $fillable = [
        'id', //1
        'employee_code', //2
        'type', //3
        'hardware', //4
        'software', //5
        'remarks', //6
        'reference_code', //7
];

    public function employee(){
        return $this->belongsTo('App\TicketEmployees', 'id');
    }

    public function referencecode(){
        return $this->hasMany('App\TicketReferenceCode', 'id', 'ticket_id'); // 'id' of tblreferencecode table = 'ticket_id' of tblticket table
    }


    public function ticketstatus(){
        return $this->hasMany('App\TicketStatus', 'id', 'ticket_id',); // 'id' of tblticketstatus table = 'ticket_id' of tblticket table
    }
}
