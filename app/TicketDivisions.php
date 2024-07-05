<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TicketDivisions extends Model
{
    protected $fillable = [
        'id', //1
        'division_name', //2
        'division_code', //3
];

    public function ticket(){
        return $this->belongsTo('App\Ticket', 'id');
    }

    public function sections(){
        return $this->hasMany('App\TicketSections', 'section_id', 'id'); // 'id' of tblreferencecode table = 'ticket_id' of tblticket table
    }


}