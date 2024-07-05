import { http, httpFile } from './http_service';

// RESEARCHER
export function createAccount(data){
    return httpFile().post('/researchers', data);
}

export function loadEmployees(){
    return http().get('/researchers');
}

export function updateEmployeeData(id, data){
    return httpFile().post(`researchers/${id}`, data);
}

export function deleteEmployee(id){
    return http().delete(`researchers/${id}`);
}

export function loadEmployeeManuscript(id){
    return http().get(`/researcher-manuscript-data/${id}`);
}


// MANUSCRIPT
export function createManuscript(data){
    return httpFile().post('/manuscript', data);
}

export function loadManuscripts(){
    return http().get('/manuscript');
}

export function updateManuscriptData(id, data){
    return httpFile().post(`manuscript/${id}`, data);
}

export function deleteManuscript(id){
    return http().delete(`manuscript/${id}`);
}
