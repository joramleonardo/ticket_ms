import { http, httpFile } from './http_service';

// EVENT
export function createAccount(data){
    return httpFile().post('/tbllogbook', data);
}

export function loadEmployees(){
    return http().get('/tbllogbook');
}