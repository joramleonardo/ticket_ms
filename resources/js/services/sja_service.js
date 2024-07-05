import { http, httpFile } from './http_service';

// EVENT
export function createAccount(data){
    return httpFile().post('/event', data);
}

export function loadEmployees(){
    return http().get('/event');
}

// export function loadEmployees(){
//     return http().get('/dostv_expertalk');
// }

export function updateEmployeeData(id, data){
    return httpFile().post(`event/${id}`, data);
}

export function deleteEmployee(id){
    return http().delete(`event/${id}`);
}

export function loadEmployeeTraining(id){
    return http().get(`/event-speaker-data/${id}`);
}

export function loadEmployeeHealth(id){
    return http().get(`/event-participants-data/${id}`);
}

// SPEAKER
export function createTraining(data){
    return httpFile().post('/speaker', data);
}

export function loadTrainings(){
    return http().get('/speaker');
}

export function updateTrainingData(id, data){
    return httpFile().post(`speaker/${id}`, data);
}

export function deleteTraining(id){
    return http().delete(`speaker/${id}`);
}


// PARTICIPANTS
export function createHealth(data){
    return httpFile().post('/participants', data);
}

export function loadHealth(){
    return http().get('/participants');
}

// export function loadHealths(id){
//     return http().get(`participants/${id}`);
// }
export function updateHealthData(id, data){
    return httpFile().post(`participants/${id}`, data);
}

export function deleteHealths(id){
    return http().delete(`participants/${id}`);
}
