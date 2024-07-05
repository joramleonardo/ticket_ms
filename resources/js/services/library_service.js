import { http, httpFile } from './http_service';

//ADVANCE SEARCH

export function get_filtered_search(filter_sex,filter_dateVisited,filter_clientType){
    return http().get('/get-filtered-search?filter_sex='+ filter_sex +'&filter_dateVisited=' + filter_dateVisited +'&filter_clientType=' + filter_clientType);
}

// CLIENT
export function createAccount(data){
    return httpFile().post('/client', data);
}

export function loadEmployees(){
    return http().get('/client');
}

export function updateEmployeeData(id, data){
    return httpFile().post(`client/${id}`, data);
}

export function deleteEmployee(id){
    return http().delete(`client/${id}`);
}

export function loadClientRequestt(id){
    return http().get(`/client-requestt-data/${id}`);
}

export function loadClientEvaluation(id){
    return http().get(`/client-evaluation-data/${id}`);
}

export function loadClientResearchLog(id){
    return http().get(`/client-researchlog-data/${id}`);
}



// REQUEST
export function createTraining(data){
    return httpFile().post('/requestt', data);
}

export function loadTrainings(){
    return http().get('/requestt');
}

export function updateTrainingData(id, data){
    return httpFile().post(`requestt/${id}`, data);
}

export function deleteTraining(id){
    return http().delete(`requestt/${id}`);
}

// MATERIAL REQUEST
export function createMaterialRequest(data){
    return httpFile().post('/materialrequestt', data);
}

export function loadMaterialRequest(){
    return http().get('/materialrequestt');
}

export function updateMaterialRequest(id, data){
    return httpFile().post(`materialrequestt/${id}`, data);
}

export function deleteMaterialRequest(id){
    return http().delete(`materialrequestt/${id}`);
}


// EVALUATION
export function createHealth(data){
    return httpFile().post('/evaluation', data);
}

export function loadHealth(){
    return http().get('/evaluation');
}

export function loadHealths(id){
    return http().get(`evaluation/${id}`);
}
export function updateHealthData(id, data){
    return httpFile().post(`evaluation/${id}`, data);
}

export function deleteHealths(id){
    return http().delete(`evaluation/${id}`);
}



// RESEARCH LOG
export function createResearchLog(data){
    return httpFile().post('/researchlog', data);
}

export function loadResearchLog(){
    return http().get('/researchlog');
}

export function loadResearchLogs(id){
    return http().get(`researchlog/${id}`);
}
export function updateResearchLogData(id, data){
    return httpFile().post(`researchlog/${id}`, data);
}

export function deleteResearchLog(id){
    return http().delete(`researchlog/${id}`);
}

//OLLP

export function loadOllpData(){
    return http().get('/ollp');
}

export function loadOllpEval(id){
    return http().get(`/ollp-evaluation-data/${id}`);
}

export function loadOllpQuiz(id){
    return http().get(`/ollp-quiz-data/${id}`);
}