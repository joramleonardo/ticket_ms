<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TicketStatus extends Model
{
    protected $fillable = [
        'id', //1 
        'reference_code', //2
        'attended_by', //3
        'assisted_by', //4
        'status', //5
        'ticket_created', //5
        'ticket_updated' //5
    ];

    public function ticket(){
        return $this->belongsTo('App\Ticket', 'id');
    }
}