import { http, httpFile } from './http_service';

// EXPERTALK
export function loadExpertalk(){
    return http().get('/expertalk');
}

export function loadEmployees(){
    return http().get('/client');
}