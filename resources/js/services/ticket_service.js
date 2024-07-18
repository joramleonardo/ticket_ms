import { http, httpFile } from './http_service';

export function createTicket(data){
    return httpFile().post('/ticket', data);
}

export function createAccount(data){
    return httpFile().post('/event', data);
}

export function addTicket(data){
    return httpFile().post('/addTicket', data);
}

export function addTicket_internal(data){
    return httpFile().post('/addTicket_internal', data);
}

export function addTicket_external(data){
    return httpFile().post('/addTicket_external', data);
}

export function addTicketStatus_Pending(data){
    return httpFile().post('/addTicketStatus_Pending', data);
}

export function addActivityLog(data){
    return httpFile().post('/addActivityLog', data);
}

export function loadActivityLog(id){
    return httpFile().post(`/loadActivityLog/${id}`);
}

export function technical_addTicket_internal(data){
    return httpFile().post('/technical_addTicket_internal', data);
}

export function technical_addTicketStatus_Pending(data){
    return httpFile().post('/technical_addTicketStatus_Pending', data);
}

export function technical_addTicket_external(data){
    return httpFile().post('/technical_addTicket_external', data);
}

export function technical_addTicketStatus_Pending_external(data){
    return httpFile().post('/technical_addTicketStatus_Pending_external', data);
}

export function technical_addTicket_starbooks(data){
    return httpFile().post('/technical_addTicket_starbooks', data);
}

export function technical_addTicketStatus_starbooks(data){
    return httpFile().post('/technical_addTicketStatus_starbooks', data);
}

export function updateStatus(id, data){
    return httpFile().post(`ticket/${id}`, data);
}

export function updatePending(id, data){
    return httpFile().post(`updatePending/${id}`, data);
}

export function updateApproved(id, data){
    return httpFile().post(`updateApproved/${id}`, data);
}

export function updateApproved_(id, data){
    return httpFile().post(`updateApproved_/${id}`, data);
}

export function updateRemarks(id, data){
    return httpFile().post(`updateRemarks/${id}`, data);
}

export function updateApprovedStatus(id, data){
    return httpFile().post(`updateApprovedStatus/${id}`, data);
}

export function updateFeedbackStatus(id, data){
    return httpFile().post(`updateFeedbackStatus/${id}`, data);
}

export function updateRating(id, data){
    return httpFile().post(`updateRating/${id}`, data);
}

export function loadEmployees(){
    return http().get('/ticket');
}


export function updateInProg_Ticket1(id, data){
    return httpFile().post(`updateInProg_Ticket1/${id}`, data);
}

export function updateInProg_Ticket_1(id, data){
    return httpFile().post(`updateInProg_Ticket_1/${id}`, data);
}

export function updateInProg_TicketStatus_1(id, data){
    return httpFile().post(`updateInProg_TicketStatus_1/${id}`, data);
}

export function updateInProg_Ticket_2(id, data){
    return httpFile().post(`updateInProg_Ticket_2/${id}`, data);
}

export function updateInProg_TicketStatus_2(id, data){
    return httpFile().post(`updateInProg_TicketStatus_2/${id}`, data);
}

export function getEmployees(){
    return http().get('/get-employees');
}

export function getUserData(){
    return http().get('/getUserData');
}

export function getUserAssignedTicket(){
    return http().get('/getUserAssignedTicket');
}

export function setRefCode(ref_code){
    return http().post('/setRefCode?ref_code='+ ref_code);
}

export function setName(name){
    return http().post('/setName?name='+ name);
}

export function setDisplayName(displayName){
    return http().post('/setDisplayName?displayName='+ displayName);
}

export function getTicketStatus(refCode){
    return httpFile().post(`/getTicketStatus/${refCode}`);
}

export function getAllTicketDetails(){
    return http().get('/getAllTicketDetails');
}

export function getAllTicketDetails_Approved_Assigned(name){
    return http().get('/getAllTicketDetails_Approved_Assigned?name='+ name);
}

export function getAllTicketDetails_InProgress_Assigned(name){
    return http().get('/getAllTicketDetails_InProgress_Assigned?name='+ name);
}

export function getAllTicketDetails_Completed_Assigned(name){
    return http().get('/getAllTicketDetails_Completed_Assigned?name='+ name);
}

export function getAllTicketDetails_Approved(){
    return http().get('/getAllTicketDetails_Approved');
}

export function getAllTicketDetails_InProgress(){
    return http().get('/getAllTicketDetails_InProgress');
}

export function getAllTicketDetails_Completed(){
    return http().get('/getAllTicketDetails_Completed');
}

export function getAllTicketDetails_Rescheduled(){
    return http().get('/getAllTicketDetails_Rescheduled');
}

export function loadTicketDetails_type(id){
    return httpFile().post(`/loadTicketDetails_type/${id}`);
}

export function loadTicketDetails(id){
    return httpFile().post(`/loadTicketDetails/${id}`);
}

export function loadTicketDetails_external(id){
    return httpFile().post(`/loadTicketDetails_external/${id}`);
}

export function loadTicketDetails_New(){
    return httpFile().post('/loadTicketDetails_New');
}

export function countEntry(date){
    return httpFile().post(`/countEntry/${date}`);
}

export function countAll(){
    return httpFile().post('/countAll');
}

export function countNew_All(){
    return httpFile().post('/countNew_All');
}

export function countAssigned_All(){
    return httpFile().post('/countAssigned_All');
}

export function countInProgress_All(){
    return httpFile().post('/countInProgress_All');
}

export function countCompleted_All(){
    return httpFile().post('/countCompleted_All');
}

export function countAssigned_staff(staff){
    return httpFile().post(`/countAssigned_staff/${staff}`);
}

export function countInProgress_staff(staff){
    return httpFile().post(`/countInProgress_staff/${staff}`);
}

export function countCompleted_staff(staff){
    return httpFile().post(`/countCompleted_staff/${staff}`);
}

export function validateEmpID(empID){
    return httpFile().post(`/validateEmpID/${empID}`);
}

export function getEmpDetails(empID){
    return httpFile().post(`/getEmpDetails/${empID}`);
}

export function validateGovType(govType){
    return httpFile().post(`/validateGovType/${govType}`);
}

export function validateRefCode(refCode){
    return httpFile().post(`/validateRefCode/${refCode}`);
}

export function validateRefCodeDetails(refCode){
    return httpFile().post(`/validateRefCodeDetails/${refCode}`);
}