<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TicketReferenceCode extends Model
{
    protected $fillable = [
        'id',
        'ticket_id',
        'reference_code'
    ];

    public function ticket(){
        return $this->belongsTo('App\Ticket', 'id');
    }
}