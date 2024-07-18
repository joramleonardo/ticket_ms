<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'auth'], function() {
    Route::post('register', 'AuthController@register');
    Route::post('login', 'AuthController@login');

    Route::group(['middleware' => 'auth:api'], function(){
        Route::get('logout', 'AuthController@logout');
        Route::get('user_profile', 'AuthController@userProfile');
    });
});

Route::group(['middleware' => 'auth:api'], function () {
    Route::group(['middleware' => 'scope:admin,author'], function () {
        
        Route::resource('users', 'UserController');
        Route::get('search-user', 'UserController@searchUser');
    });
});



Route::get('/test',function(){
    return \Session::all();
});

Route::post('register','UserController@register');
Route::post('login','UserController@login');
Route::get('profile','UserController@getAuthenticatedUser');

// USER 
Route::resource('admin', 'AdminController');

//DASHBOARD

Route::post('/set-month', 'DashboardController@setMonth');
Route::post('/set-year', 'DashboardController@setYear');
Route::post('/setName', 'TicketController@setName');

Route::get('/get-month', 'DashboardController@getMonth');
Route::get('/get-year', 'DashboardController@getYear');

Route::get('/get-material-request-age-bracket-female', 'DashboardController@getMaterialRequest_ageBracket_female');
Route::get('/get-material-request-age-bracket-male', 'DashboardController@getMaterialRequest_ageBracket_male');
Route::get('/get-material-request-client-type-female', 'DashboardController@getMaterialRequest_clientType_female');
Route::get('/get-material-request-client-type-male', 'DashboardController@getMaterialRequest_clientType_male');
Route::get('/get-material-request-client-category-female', 'DashboardController@getMaterialRequest_clientCategory_female');
Route::get('/get-material-request-client-category-male', 'DashboardController@getMaterialRequest_clientCategory_male');
Route::get('/get-material-request-region-female', 'DashboardController@getMaterialRequest_region_female');
Route::get('/get-material-request-region-male', 'DashboardController@getMaterialRequest_region_male');
Route::get('/get-material-request-client-researchInterests', 'DashboardController@getMaterialRequest_researchInterests');

Route::get('get-research-interests', 'DashboardController@getResearchInterests');
Route::get('get-topic-not-found', 'DashboardController@getTopicNotFound');

Route::get('/get-sja-eventTitle-female', 'DashboardController@getSJA_eventTitle_female');
Route::get('/get-sja-eventTitle-male', 'DashboardController@getSJA_eventTitle_male');

Route::get('/get-sja-event-list', 'DashboardController@getSJA_eventList');
Route::get('/get-sja-event-list-noDate', 'DashboardController@getSJA_eventListNoDate');

Route::get('/get-sja-eventData-female', 'DashboardController@getSJA_eventData_female');
Route::get('/get-sja-eventData-male', 'DashboardController@getSJA_eventData_male');

Route::get('/get-starbooks-category-female', 'DashboardController@getSTARBOOKS_category_female');
Route::get('/get-starbooks-category-male', 'DashboardController@getSTARBOOKS_category_male');

Route::get('/get-starbooks-schoolType-female', 'DashboardController@getSTARBOOKS_schoolType_female');
Route::get('/get-starbooks-schoolType-male', 'DashboardController@getSTARBOOKS_schoolType_male');
Route::get('/get-starbooks-logbookList', 'DashboardController@getSTARBOOKS_logbookList');

Route::get('/get-hr-trainings-list', 'DashboardController@getHR_trainingsList');
Route::get('/get-hr-count-participants', 'DashboardController@getHR_countParticipants');
Route::get('/get-hr-count-trainings', 'DashboardController@getHR_countTrainings');


// EVENT
Route::resource('event', 'EventController');
Route::get('/event-speaker-data/{id}', 'EventController@loadEmployeeTraining');
Route::get('/event-participants-data/{id}', 'EventController@loadEmployeeHealth');
// SPEAKER
Route::resource('speaker', 'SpeakerController');
// PARTICIPANTS
Route::resource('participants', 'ParticipantsController');

// TICKET
Route::resource('ticket', 'TicketController');

Route::post('addTicket', 'TicketController@addTicket');
Route::post('addTicket_internal', 'TicketController@addTicket_internal');
Route::post('addTicket_external', 'TicketController@addTicket_external');
Route::post('addTicketStatus_Pending', 'TicketController@addTicketStatus_Pending');

Route::post('addActivityLog', 'TicketController@addActivityLog');
Route::post('/loadActivityLog/{id}', 'TicketController@loadActivityLog');

Route::post('technical_addTicket_internal', 'TicketController@technical_addTicket_internal');
Route::post('technical_addTicketStatus_Pending', 'TicketController@technical_addTicketStatus_Pending');

Route::post('technical_addTicket_external', 'TicketController@technical_addTicket_external');
Route::post('technical_addTicketStatus_Pending_external', 'TicketController@technical_addTicketStatus_Pending_external');

Route::post('technical_addTicket_starbooks', 'TicketController@technical_addTicket_starbooks');
Route::post('technical_addTicketStatus_starbooks', 'TicketController@technical_addTicketStatus_starbooks');

Route::post('/updateStatus/{id}', 'TicketController@updateStatus');
Route::post('/updatePending/{id}', 'TicketController@updatePending');
Route::post('/updateApproved/{id}', 'TicketController@updateApproved');
Route::post('/updateApproved_/{id}', 'TicketController@updateApproved_');
Route::post('/updateRemarks/{id}', 'TicketController@updateRemarks');
Route::post('/updateApprovedStatus/{id}', 'TicketController@updateApprovedStatus');
Route::post('/updateFeedbackStatus/{id}', 'TicketController@updateFeedbackStatus');
Route::post('/updateRating/{id}', 'TicketController@updateRating');

Route::post('/updateInProg_Ticket1/{id}', 'TicketController@updateInProg_Ticket1');
Route::post('/updateInProg_Ticket_1/{id}', 'TicketController@updateInProg_Ticket_1');
Route::post('/updateInProg_TicketStatus_1/{id}', 'TicketController@updateInProg_TicketStatus_1');
Route::post('/updateInProg_Ticket_2/{id}', 'TicketController@updateInProg_Ticket_2');
Route::post('/updateInProg_TicketStatus_2/{id}', 'TicketController@updateInProg_TicketStatus_2');

Route::get('/get-employees', 'TicketController@getEmployess');
Route::get('/getUserData', 'TicketController@getUserData');
Route::get('/getUserAssignedTicket', 'TicketController@getUserAssignedTicket');
Route::post('/setRefCode', 'TicketController@setRefCode');
Route::post('/setDisplayName', 'TicketController@setDisplayName');
Route::post('/getTicketStatus/{refCode}', 'TicketController@getTicketStatus');

Route::post('/validateGovType/{govType}', 'TicketController@validateGovType');
Route::post('/validateEmpID/{empID}', 'TicketController@validateEmpID');
Route::post('/getEmpDetails/{empID}', 'TicketController@getEmpDetails');
Route::post('/validateRefCode/{refCode}', 'TicketController@validateRefCode');
Route::post('/validateRefCodeDetails/{refCode}', 'TicketController@validateRefCodeDetails');
Route::post('/countEntry/{date}', 'TicketController@countEntry');
Route::post('/loadTicketDetails_type/{id}', 'TicketController@loadTicketDetails_type');
Route::post('/loadTicketDetails/{id}', 'TicketController@loadTicketDetails');
Route::post('/loadTicketDetails_external/{id}', 'TicketController@loadTicketDetails_external');
Route::post('/loadTicketDetails_New', 'TicketController@loadTicketDetails_New');

Route::get('/getAllTicketDetails', 'TicketController@getAllTicketDetails');

Route::get('/getAllTicketDetails_Approved_Assigned', 'TicketController@getAllTicketDetails_Approved_Assigned');
Route::get('/getAllTicketDetails_InProgress_Assigned', 'TicketController@getAllTicketDetails_InProgress_Assigned');
Route::get('/getAllTicketDetails_Completed_Assigned', 'TicketController@getAllTicketDetails_Completed_Assigned');

Route::get('/getAllTicketDetails_Approved', 'TicketController@getAllTicketDetails_Approved');
Route::get('/getAllTicketDetails_InProgress', 'TicketController@getAllTicketDetails_InProgress');
Route::get('/getAllTicketDetails_Completed', 'TicketController@getAllTicketDetails_Completed');

Route::get('/getAllTicketDetails_Rescheduled', 'TicketController@getAllTicketDetails_Rescheduled');


Route::post('/countAll', 'TicketController@countAll');
Route::post('/countNew_All', 'TicketController@countNew_All');
Route::post('/countAssigned_All', 'TicketController@countAssigned_All');
Route::post('/countInProgress_All', 'TicketController@countInProgress_All');
Route::post('/countCompleted_All', 'TicketController@countCompleted_All');

Route::post('/countAssigned_staff/{staff}', 'TicketController@countAssigned_staff');
Route::post('/countInProgress_staff/{staff}', 'TicketController@countInProgress_staff');
Route::post('/countCompleted_staff/{staff}', 'TicketController@countCompleted_staff');

