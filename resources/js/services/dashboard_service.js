import { http, httpFile } from './http_service';


// LIBRARY
export function setMonth(filter_month){
    return http().post('/set-month?filter_month='+ filter_month);
}
export function setYear(filter_year){
    return http().post('/set-year?filter_year='+ filter_year);
}
export function getMaterialRequest_ageBracket_female(){
    return http().get('/get-material-request-age-bracket-female'); //Female - Age Bracket
}
export function getMaterialRequest_ageBracket_male(){
    return http().get('/get-material-request-age-bracket-male?filter_month='); //Male - Age Bracket
}
export function getMaterialRequest_clientType_female(){
    return http().get('/get-material-request-client-type-female'); //Female - Client Type
}
export function getMaterialRequest_clientType_male(){
    return http().get('/get-material-request-client-type-male'); //Male - Client Type
}
export function getMaterialRequest_clientCategory_female(){
    return http().get('/get-material-request-client-category-female'); //Female - Client Category
}
export function getMaterialRequest_clientCategory_male(){
    return http().get('/get-material-request-client-category-male'); //Male - Client Category
}
export function getMaterialRequest_region_female(){
    return http().get('/get-material-request-region-female'); //Female - Client Category
}
export function getMaterialRequest_region_male(){
    return http().get('/get-material-request-region-male'); //Female - Client Category
}
export function getMaterialRequest_researchInterests(){
    return http().get('/get-material-request-researchInterests');
}
export function loadMaterialRequest(){
    return http().get('/dashboard');
}
export function getResearchInterests(){
    return http().get('/get-research-interests');
}

export function getTopicNotFound(){
    return http().get('get-topic-not-found');
}




export function loadEmployees(){
    return http().get('/event');
}

export function getSJA_eventTitle_female(){
    return http().get('/get-sja-eventTitle-female');
}

export function getSJA_eventTitle_male(){
    return http().get('/get-sja-eventTitle-male');
}

export function getSJA_eventData_female(){
    return http().get('/get-sja-eventData-female');
}

export function getSJA_eventData_male(){
    return http().get('/get-sja-eventData-male');
}

export function getSJA_eventList(){
    return http().get('/get-sja-event-list');
}

export function getSJA_eventListNoDate(){
    return http().get('/get-sja-event-list-noDate');
}

export function getSTARBOOKS_category_female(){
    return http().get('/get-starbooks-category-female');
}

export function getSTARBOOKS_category_male(){
    return http().get('/get-starbooks-category-male');
}

export function getSTARBOOKS_schoolType_female(){
    return http().get('/get-starbooks-schoolType-female');
}

export function getSTARBOOKS_schoolType_male(){
    return http().get('/get-starbooks-schoolType-male');
}

export function getSTARBOOKS_logbookList(){
    return http().get('/get-starbooks-logbookList');
}

export function getHR_trainingsList(){
    return http().get('/get-hr-trainings-list');
}

export function getHR_countParticipants(){
    return http().get('/get-hr-count-participants');
}

export function getHR_countTrainings(){
    return http().get('/get-hr-count-trainings');
}



export function getFilteredSearch(filter_month,filter_year){
    return http().get('/get-filtered-search?filter_month='+ filter_month +'&filter_year=' + filter_year);
}