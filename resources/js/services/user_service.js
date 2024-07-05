import { http, httpFile } from './http_service';

export function createAccount(data){
    return httpFile().post('/admin', data);
}

export function loadEmployees(){
    return http().get('/admin');
}

export function updateEmployeeData(id, data){
    return httpFile().post(`admin/${id}`, data);
}

export function deleteEmployee(id){
    return http().delete(`admin/${id}`);
}