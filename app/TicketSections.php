<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TicketSections extends Model
{
    protected $fillable = [
        'id', //1 
        'division_id', //2
        'section_name', //3
        'section_code' //4
    ];

    public function ticket(){
        return $this->belongsTo('App\TicketDivisions', 'id');
    }
}
