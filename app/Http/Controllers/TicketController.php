<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Ticket;
use App\TicketEmployees;
use App\TicketDivisions;
use App\TicketSections;
use App\TicketReferenceCode;
use App\TicketStatus;
use App\Activity;
use App\ActivityLog;
use Session;


class TicketController extends Controller
{
    public function addTicket_internal(Request $request){
        $data = new Ticket();

        $data->date1 = $request->date1;
        $data->employee_code = $request->employee_code;
        $data->sex = $request->sex;
        $data->concerned_division = $request->concerned_division;
        $data->concerned_section = $request->concerned_section;
        $data->clientNote = $request->clientNote;
        $data->supportType = $request->supportType;

        $data->reference_code = $request->reference_code;
        $data->ticket_created = $request->ticket_created;
        $data->internal_external = $request->internal_external;
        $data->mode = $request->mode;
        $data->externalName = $request->externalName; //name
        $data->empDiv = $request->empDiv;
        $data->empEmail = $request->empEmail;
        $data->clientType = $request->clientType;

        $data->save();
    }

    public function addTicket_external(Request $request){
        $data = new Ticket(); // insert into table ticket
        
        $data->date1 = $request->date1;
        $data->externalName = $request->externalName;
        $data->sex = $request->sex;
        $data->externalAgency = $request->externalAgency;
        $data->externalStartDate = $request->externalStartDate;
        $data->externalEndDate = $request->externalEndDate;
        $data->externalEventTitle = $request->externalEventTitle;
        $data->supportType = $request->supportType;
        $data->externalOtherType = $request->externalOtherType;
        $data->clientNote = $request->clientNote;
        
        $data->reference_code = $request->reference_code;
        $data->ticket_created = $request->ticket_created;
        $data->internal_external = $request->internal_external;
        $data->mode = $request->mode;
        $data->clientType = $request->clientType;
        $data->save();
    }

    public function addTicketStatus_Pending(Request $request){
        $data = new TicketStatus(); // insert into table ticket_status

        $data->status = $request->status;
        $data->reference_code = $request->reference_code;
        $data->entry_date = $request->entry_date;
        $data->save();
    }

    public function addActivityLog(Request $request){
        $data = new ActivityLog(); // insert into table tblactivitylog

        $data->username = $request->username;
        $data->activity_id = $request->activity_id;
        $data->activity_date = $request->activity_date;
        $data->ticket_id = $request->ticket_id;
        $data->save();
    }

    public function loadActivityLog(Request $request, $id){
        $data = ActivityLog::join('ticket_statuses','activity_logs.ticket_id', '=', 'ticket_statuses.reference_code')
                            ->where('activity_logs.ticket_id', $id)
                            ->get('*');
        
        return response()->json($data, 200);
    }

    // public function loadTicketDetails(Request $request, $id){
    //     $data = TicketStatus::join('tickets','ticket_statuses.reference_code', '=', 'tickets.reference_code')
    //                         ->join('ticket_employees', 'tickets.employee_code','=', 'ticket_employees.employee_code')
    //                         ->where('ticket_statuses.id', $id)
    //                         ->get('*');
        
    //     return response()->json($data, 200);
    // }

    public function technical_addTicket_internal(Request $request){
        $data = new Ticket();

        $data->reference_code = $request->reference_code;
        $data->ticket_created = $request->ticket_created;
        $data->employee_code = $request->employee_code;
        $data->sex = $request->sex;
        $data->internal_external = $request->internal_external;
        $data->concerned_division = $request->concerned_division;
        $data->concerned_section = $request->concerned_section;
        $data->externalName = $request->externalName; 
        $data->empDiv = $request->empDiv; 
        $data->empEmail = $request->empEmail;
        $data->clientType = $request->clientType;
        $data->date1 = $request->date1;
        $data->clientNote = $request->clientNote;
        $data->supportType = $request->supportType;
        $data->mode = $request->mode;

        $data->save();
    }
    
    public function technical_addTicketStatus_Pending(Request $request){
        $data = new TicketStatus(); // insert into table ticket_status

        $data->reference_code = $request->reference_code;
        $data->status = $request->status;
        $data->entry_date = $request->entry_date;
        $data->assignedStaff = $request->assignedStaff;
        $data->approved_by = $request->approved_by;
        $data->attended_by = $request->attended_by;
        $data->priority = $request->priority;
        $data->ticket_approved = $request->ticket_approved;
        $data->ticket_attended = $request->ticket_attended;
        $data->problem_that_needed_support = $request->problem_that_needed_support;
        $data->actions_taken = $request->actions_taken;
        $data->remarks = $request->remarks;
        $data->feedback_status = $request->feedback_status;
        $data->rating_status = $request->rating_status;
        $data->date2 = $request->date2;
        $data->natureOfSupport = $request->natureOfSupport;
        $data->hardware = $request->hardware;
        $data->software = $request->software;
        $data->supportType_ = $request->supportType_;
        $data->mode_ = $request->mode_;
        $data->assisted_by_1 = $request->assisted_by_1;
        $data->assisted_by_2 = $request->assisted_by_2;
        $data->clientNote_ = $request->clientNote_;
        $data->type = $request->type;
        $data->ticket_completed = $request->ticket_completed;
        $data->save();
    }

    public function technical_addTicket_external(Request $request){
        $data = new Ticket();

        $data->date1 = $request->date1;
        $data->externalName = $request->externalName; 
        $data->externalAgency = $request->externalAgency; 
        $data->sex = $request->sex;
        $data->externalStartDate = $request->externalStartDate;
        $data->externalEndDate = $request->externalEndDate;
        $data->externalEventTitle = $request->externalEventTitle;
        $data->supportType = $request->supportType;
        $data->externalOtherType = $request->externalOtherType;
        $data->clientNote = $request->clientNote;
        $data->reference_code = $request->reference_code;
        $data->ticket_created = $request->ticket_created;
        $data->internal_external = $request->internal_external;
        $data->mode = $request->mode;
        $data->clientType = $request->clientType;

        $data->save();
    }
    
    public function technical_addTicketStatus_Pending_external(Request $request){
        $data = new TicketStatus(); // insert into table ticket_status

        $data->reference_code = $request->reference_code;
        $data->status = $request->status;
        $data->entry_date = $request->entry_date;
        $data->assignedStaff = $request->assignedStaff;
        $data->approved_by = $request->approved_by;
        $data->attended_by = $request->attended_by;
        $data->priority = $request->priority;
        $data->ticket_approved = $request->ticket_approved;
        $data->ticket_attended = $request->ticket_attended;
        $data->problem_that_needed_support = $request->problem_that_needed_support;
        $data->actions_taken = $request->actions_taken;
        $data->remarks = $request->remarks;
        $data->feedback_status = $request->feedback_status;
        $data->rating_status = $request->rating_status;
        $data->date2 = $request->date2;
        $data->supportType_ = $request->supportType_;
        $data->mode_ = $request->mode_;
        $data->assisted_by_1 = $request->assisted_by_1;
        $data->assisted_by_2 = $request->assisted_by_2;
        $data->clientNote_ = $request->clientNote_;
        $data->type = $request->type;
        $data->ticket_completed = $request->ticket_completed;
        $data->save();
    }

    public function technical_addTicket_starbooks(Request $request){
        $data = new Ticket();

        $data->reference_code = $request->reference_code;
        $data->ticket_created = $request->ticket_created;
        $data->sex = $request->sex;
        $data->internal_external = $request->internal_external;
        $data->externalName = $request->externalName; 
        $data->empEmail = $request->empEmail;
        $data->externalAgency = $request->externalAgency;
        $data->date1 = $request->date1;
        $data->clientNote = $request->clientNote;
        $data->supportType = $request->supportType;
        $data->mode = $request->mode;
        $data->save();
    }

    public function technical_addTicketStatus_starbooks(Request $request){
        $data = new TicketStatus(); // insert into table ticket_status

        $data->reference_code = $request->reference_code;
        $data->status = $request->status;
        $data->entry_date = $request->entry_date;
        $data->assignedStaff = $request->assignedStaff;
        $data->approved_by = $request->approved_by;
        $data->attended_by = $request->attended_by;
        $data->priority = $request->priority;
        $data->ticket_approved = $request->ticket_approved;
        $data->ticket_attended = $request->ticket_attended;
        $data->problem_that_needed_support = $request->problem_that_needed_support;
        $data->actions_taken = $request->actions_taken;
        $data->remarks = $request->remarks;
        $data->feedback_status = $request->feedback_status;
        $data->rating_status = $request->rating_status;
        $data->date2 = $request->date2;
        $data->natureOfSupport = $request->natureOfSupport;
        $data->hardware = $request->hardware;
        $data->software = $request->software;
        $data->supportType_ = $request->supportType_;
        $data->mode_ = $request->mode_;
        $data->assisted_by_1 = $request->assisted_by_1;
        $data->assisted_by_2 = $request->assisted_by_2;
        $data->clientNote_ = $request->clientNote_;
        $data->type = $request->type;
        $data->ticket_completed = $request->ticket_completed;
        $data->save();
    }

    public function updatePending(Request $request, $id){
        $data = TicketStatus::where('id', $id)->first();
        $data->reference_code = $request->reference_code;

        //PENDING/NEW UPDATE
        $data->assignedStaff = $request->assignedStaff;
        $data->approved_by = $request->approved_by;
        $data->priority = $request->priority;
        $data->status = $request->status;
        
        $data->ticket_approved = $request->ticket_approved;
        $data->ticket_updated = $request->ticket_updated;
        
        $data->save();
    }

    public function updateApproved(Request $request, $id){
        $data = TicketStatus::where('id', $id)->first();

        //APPROVED/ASSIGNED UPDATE
        $data->status = $request->status;
        $data->ticket_updated = $request->ticket_updated;
        $data->ticket_attended = $request->ticket_attended;
        $data->attended_by = $request->attended_by;
        $data->save();
    }

    public function updateRemarks(Request $request, $id)
    {
        $data = TicketStatus::where('id', $id)->first();

        //APPROVED/ASSIGNED UPDATE
        $data->ticket_updated = $request->ticket_updated;
        $data->tech_remarks = $request->tech_remarks;
        $data->save();
    }

    public function updateInProg_Ticket_1(Request $request, $id)
    {
        $data = Ticket::where('id', $id)->first();

        //IN PROGRESS UPDATE
        $data->date2 = $request->date2;
        $data->supportType = $request->supportType;
        $data->externalOtherType = $request->externalOtherType;
        $data->mode = $request->mode;
        $data->assisted_by_1 = $request->assisted_by_1;
        $data->assisted_by_2 = $request->assisted_by_2;
        $data->clientNote = $request->clientNote;
        $data->type = $request->type;
        $data->ticket_completed = $request->ticket_completed;
        $data->save();
    }

    public function updateInProg_TicketStatus_1(Request $request, $id)
    {
        $data = TicketStatus::where('id', $id)->first();

        //IN PROGRESS UPDATE
        $data->date2 = $request->date2;
        $data->natureOfSupport = $request->natureOfSupport;
        $data->hardware = $request->hardware;
        $data->software = $request->software;
        $data->supportType_ = $request->supportType_;
        $data->externalOtherType_ = $request->externalOtherType_;
        $data->mode_ = $request->mode_;
        $data->assisted_by_1 = $request->assisted_by_1;
        $data->assisted_by_2 = $request->assisted_by_2;
        $data->clientNote_ = $request->clientNote_;
        $data->type = $request->type;
        $data->ticket_completed = $request->ticket_completed;
        $data->ticket_updated = $request->ticket_updated;
        $data->actions_taken = $request->actions_taken;
        $data->remarks = $request->remarks;
        $data->status = $request->status;
        $data->feedback_status = $request->feedback_status;
        $data->rating_status = $request->rating_status;
        $data->save();
    }

    public function updateApprovedStatus(Request $request, $id)
    {
        $data = TicketStatus::where('id', $id)->first();
        $data->reference_code = $request->reference_code;
        $data->attended_by = $request->attended_by;
        $data->status = $request->status;
        $data->ticket_updated = $request->ticket_updated;
        $data->save();
    }

    public function updateFeedbackStatus(Request $request, $id)
    {
        $data = TicketStatus::where('id', $id)->first();
        $data->feedback_status = $request->feedback_status;
        $data->feedback_received = $request->feedback_received;
        $data->save();
    }

    public function updateRating(Request $request, $id)
    {
        $data = TicketStatus::where('id', $id)->first();
        $data->rating = $request->rating;
        $data->rating_received = $request->rating_received;
        $data->rating_status = $request->rating_status;
        $data->comments_suggestions = $request->comments_suggestions;
        $data->save();
    }

    public function index()
    {
        $events = TicketStatus::orderBy('created_at', 'asc')->paginate();
        return response()->json($events, 200);
    }

    public function setRefCode(Request $request){
        
        $ref_code = \Request::get('ref_code');
        $request->session()->put('refCode', $ref_code); 
        return $request->session()->get('refCode');
    }

    public function setName(Request $request){
        $name = \Request::get('name');
        $request->session()->put('name', $name); 
        return $request->session()->get('name');
    }

    public function setDisplayName(Request $request){
        
        $displayName = \Request::get('ref_code');
        $request->session()->put('displayName', $displayName); 
        return $request->session()->get('displayName');
    }

    public function getAllTicketDetails(){
        $data = DB::select("SELECT `tickets`.*, `ticket_employees`.*, `ticket_statuses`.*
                            FROM `tickets`
                            LEFT JOIN `ticket_employees`
                            ON `tickets`.`employee_code`=`ticket_employees`.`employee_code`
                            LEFT JOIN `ticket_statuses`
                            ON `ticket_statuses`.`reference_code`=`tickets`.`reference_code`
                            ORDER BY `tickets`.`created_at`
                        ");
        return response()->json($data, 200);
    }

    public function getAllTicketDetails_Approved_Assigned(Request $request){
            //   $data = Ticket::join('ticket_employees','tickets.employee_code', '=', 'ticket_employees.employee_code')
              $data = Ticket::join('ticket_statuses', 'tickets.reference_code','=', 'ticket_statuses.reference_code')
                            ->where('ticket_statuses.status', "Approved")
                            ->where('ticket_statuses.assignedStaff', $request->session()->get('name'))
                            ->get('*');
        return response()->json($data, 200);
    }

    public function getAllTicketDetails_InProgress_Assigned(Request $request){
            //   $data = Ticket::join('ticket_employees','tickets.employee_code', '=', 'ticket_employees.employee_code')
              $data = Ticket::join('ticket_statuses', 'tickets.reference_code','=', 'ticket_statuses.reference_code')
                            ->where('ticket_statuses.status', "In Progress")
                            ->where('ticket_statuses.assignedStaff', $request->session()->get('name'))
                            ->get('*');
        return response()->json($data, 200);
    }

    public function getAllTicketDetails_Completed_Assigned(Request $request){
            //   $data = Ticket::join('ticket_employees','tickets.employee_code', '=', 'ticket_employees.employee_code')
              $data = Ticket::join('ticket_statuses', 'tickets.reference_code','=', 'ticket_statuses.reference_code')
                            ->where('ticket_statuses.status', "Completed")
                            ->where('ticket_statuses.assignedStaff', $request->session()->get('name'))
                            ->orderBy('tickets.ticket_created', 'DESC')
                            ->get('*');
        return response()->json($data, 200);
    }

    public function getAllTicketDetails_Completed(Request $request){
            //   $data = Ticket::join('ticket_employees','tickets.employee_code', '=', 'ticket_employees.employee_code')
              $data = Ticket::join('ticket_statuses', 'tickets.reference_code','=', 'ticket_statuses.reference_code')
                            ->where('ticket_statuses.status', "Completed")
                            ->orderBy('tickets.ticket_created', 'DESC')
                            ->get('*');
        return response()->json($data, 200);
    }

    public function getAllTicketDetails_Approved(){
        $data = DB::select("SELECT `tickets`.*, `ticket_employees`.*, `ticket_statuses`.*
                            FROM `tickets`
                            LEFT JOIN `ticket_employees`
                            ON `tickets`.`employee_code`=`ticket_employees`.`employee_code`
                            LEFT JOIN `ticket_statuses`
                            ON `ticket_statuses`.`reference_code`=`tickets`.`reference_code`
                            WHERE `ticket_statuses`.`status`='Approved'
                            ORDER BY `ticket_created`
                        ");
        return response()->json($data, 200);
    }

    public function getAllTicketDetails_InProgress(){
        $data = DB::select("SELECT `tickets`.*, `ticket_employees`.*, `ticket_statuses`.*
                            FROM `tickets`
                            LEFT JOIN `ticket_employees`
                            ON `tickets`.`employee_code`=`ticket_employees`.`employee_code`
                            LEFT JOIN `ticket_statuses`
                            ON `ticket_statuses`.`reference_code`=`tickets`.`reference_code`
                            WHERE `ticket_statuses`.`status`='In Progress'
                            ORDER BY `ticket_created`
                        ");
        return response()->json($data, 200);
    }

    public function getAllTicketDetails_Rescheduled(){
        $data = DB::select("SELECT `tickets`.*, `ticket_employees`.*, `ticket_statuses`.*
                            FROM `tickets`
                            LEFT JOIN `ticket_employees`
                            ON `tickets`.`employee_code`=`ticket_employees`.`employee_code`
                            LEFT JOIN `ticket_statuses`
                            ON `ticket_statuses`.`reference_code`=`tickets`.`reference_code`
                            WHERE `ticket_statuses`.`status`='Rescheduled'
                            ORDER BY `ticket_created`
                        ");
        return response()->json($data, 200);
    }

    public function getEmployess(){
        $data = Employee::get();
        return response()->json($data);
    }

    public function getUserData(){
        return Session::get('sessionUserData');
    }

    public function getUserAssignedTicket(){
        $name="";
        $data = DB::select("SELECT `ticket_statuses`.*
                        FROM `ticket_statuses` 
                        WHERE `ticket_statuses`.`attended_by`='$name'
                        ");
        return response()->json($data, 200);
    }

    public function getTicketStatus($refCode){
        $data = TicketStatus::join('tickets','ticket_statuses.reference_code', '=', 'tickets.reference_code')
                            // ->join('ticket_employees', 'tickets.employee_code','=', 'ticket_employees.employee_code')
                            ->where('ticket_statuses.reference_code', $refCode)
                            ->get('*');
        return response()->json($data, 200);
    }

    public function loadTicketDetails(Request $request, $id){
        $data = TicketStatus::join('tickets','ticket_statuses.reference_code', '=', 'tickets.reference_code')
                            ->join('ticket_employees', 'tickets.employee_code','=', 'ticket_employees.employee_code')
                            ->where('ticket_statuses.id', $id)
                            ->get('*');
        
        return response()->json($data, 200);
    }

    public function loadTicketDetails_external(Request $request, $id){
        $data = TicketStatus::join('tickets','ticket_statuses.reference_code', '=', 'tickets.reference_code')
                            // ->join('ticket_employees', 'tickets.employee_code','=', 'ticket_employees.employee_code')
                            ->where('ticket_statuses.id', $id)
                            ->get('*');
        
        return response()->json($data, 200);
    }
    
    public function loadTicketDetails_type(Request $request, $id){
        $data = Ticket::where('tickets.id', $id)
                            ->get('tickets.internal_external');
        
        return response()->json($data, 200);
    }

    public function loadTicketDetails_New(){
        $data = DB::select("SELECT `tickets`.*, `ticket_employees`.*, `ticket_statuses`.*
                            FROM `tickets`
                            LEFT JOIN `ticket_employees`
                            ON `tickets`.`employee_code`=`ticket_employees`.`employee_code`
                            LEFT JOIN `ticket_statuses`
                            ON `ticket_statuses`.`reference_code`=`tickets`.`reference_code`
                            WHERE `ticket_statuses`.`status`='New'
                            ORDER BY `ticket_created`
                        ");
        return response()->json($data, 200);
    }

    public function countEntry($date){
        $data = TicketStatus::where('ticket_statuses.entry_date', $date)
                            ->count();

        return response()->json($data, 200);
    }

    public function countAll(){
        $data = TicketStatus::count();

        return response()->json($data, 200);
    }

    public function countNew_All(){
        $status = "New";
        $data = TicketStatus::where('ticket_statuses.status', $status)
                            ->count();

        return response()->json($data, 200);
    }

    public function countAssigned_All(){
        $status = "Approved";
        $data = TicketStatus::where('ticket_statuses.status', $status)
                            ->count();

        return response()->json($data, 200);
    }

    public function countInProgress_All(){
        $status = "In Progress";
        $data = TicketStatus::where('ticket_statuses.status', $status)
                            ->count();

        return response()->json($data, 200);
    }

    public function countCompleted_All(){
        $status = "Completed";
        $data = TicketStatus::where('ticket_statuses.status', $status)
                            ->count();

        return response()->json($data, 200);
    }

    public function countAssigned_staff($staff){
        $status = "Approved";
        $data = TicketStatus::where('ticket_statuses.status', $status)
                            ->where('ticket_statuses.assignedStaff', $staff)
                            ->count();
        return response()->json($data, 200);
    }

    public function countInProgress_staff($staff){
        $status = "In Progress";
        $data = TicketStatus::where('ticket_statuses.status', $status)
                            ->where('ticket_statuses.assignedStaff', $staff)
                            ->count();
        return response()->json($data, 200);
    }

    public function countCompleted_staff($staff){
        $status = "Completed";
        $data = TicketStatus::where('ticket_statuses.status', $status)
                            ->where('ticket_statuses.assignedStaff', $staff)
                            ->count();
        return response()->json($data, 200);
    }

    public function validateEmpID($empID){
        $data = TicketEmployees::where('ticket_employees.employee_code', $empID)
                                ->count();
        return response()->json($data, 200);
    }

    public function getEmpDetails($empID){
        $data = TicketEmployees::where('ticket_employees.employee_code', $empID)
                                ->get('*');
        return response()->json($data, 200);
    }

    public function validateGovType($govType){
        $data = Ticket::where('tickets.ifGov', $govType)
                        ->get('*');
        return response()->json($data, 200);
    }

    public function validateRefCode($refCode){
        // $data = TicketEmployees::where('tblemployees.employee_code', $empID)
        $data = TicketStatus::where('ticket_statuses.reference_code', $refCode)
                            ->count();
        return response()->json($data, 200);
    }

    public function validateRefCodeDetails($refCode){
        // $data = TicketEmployees::where('tblemployees.employee_code', $empID)
        $data = Ticket::where('tickets.reference_code', $refCode)
                            ->get('*');
        return response()->json($data, 200);
    }

}
