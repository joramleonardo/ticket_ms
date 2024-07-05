import { http, httpFile } from './http_service';

// EMPLOYEE
export function createAccount(data){
    return httpFile().post('/employees', data);
}

export function loadEmployees(){
    return http().get('/employees');
}

export function updateEmployeeData(id, data){
    return httpFile().post(`employees/${id}`, data);
}

export function deleteEmployee(id){
    return http().delete(`employees/${id}`);
}

export function loadEmployeeData(id){
    return http().get(`/employees-data/${id}`);
}

export function loadTrainingData(id){
    return http().get(`/training-data/${id}`);
}

export function loadEmployeeTraining(id){
    return http().get(`/employees-training-data/${id}`);
}

export function loadEmployeeHealth(id){
    return http().get(`/employees-health-data/${id}`);
}

export function getEmployees(){
    return http().get('/get-employees');
}

// TRAINING
export function createTraining(data){
    return httpFile().post('/training', data);
}
export function addParticipant(data){
    return httpFile().post('/addParticipant', data);
}

export function loadTrainings(){
    return http().get('/training');
}

export function getAll(){
    return http().get('/get-all');
}

export function getTrainings(){
    return http().get('/get-trainings');
}

export function updateTrainingData(id, data){
    return httpFile().post(`training/${id}`, data);
}

export function deleteTraining(id){
    return http().delete(`training/${id}`);
}


export function loadTrainingParticipants(id){
    return http().get(`/training-participants-data/${id}`);
}


// HEALTH
export function createHealth(data){
    return httpFile().post('/health', data);
}

export function loadHealth(){
    return http().get('/health');f
}

export function loadHealths(id){
    return http().get(`health/${id}`);
}
export function updateHealthData(id, data){
    return httpFile().post(`health/${id}`, data);
}

export function deleteHealths(id){
    return http().delete(`health/${id}`);
}
