<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TicketEmployees extends Model
{
    protected $fillable = [
        'id', //1
        'name', //2
        'employee_code', //3
        'division_id', //4
        'section_id', //5
        'position', //6
];

    public function divisions(){
        return $this->hasMany('App\TicketDivisions', 'division_id', 'id'); // 'id' of tblreferencecode table = 'ticket_id' of tblticket table
    }


    public function sections(){
        return $this->hasMany('App\TicketSections', 'section_id', 'id'); // 'id' of tblreferencecode table = 'ticket_id' of tblticket table
    }
}
