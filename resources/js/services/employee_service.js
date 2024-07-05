import { http, httpFile } from './http_service';

export function createAccount(data){
    return httpFile().post('/employees', data);
}

export function loadEmployees(){
    return http().get('/employees');
}

export function loadHealths(id){
    return http().get(`healths/${id}`);
}

export function deleteEmployee(id){
    return http().delete(`employees/${id}`);
}
