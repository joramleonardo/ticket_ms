import {http, httpFile} from './http_service';
import jwt from 'jsonwebtoken';
import store from '../store';

export function login(user){
    return http().post('/auth/login', user)
    .then(response => {
        if(response.status === 200) {
            setToken(response.data)
        }
        return response.data;
    });
}

function setToken(user){
    const token = jwt.sign({ user:user }, 'tcubusssatationasd;askjdlk;ajsd;ljas')
    localStorage.setItem('laravel-vue-spa-token', token);
    store.dispatch('authenticate', user.user);
}

export function isLoggedIn(){
    const token = localStorage.getItem('laravel-vue-spa-token');
    const tokenData = jwt.decode(token);

    return token != null;
}


export function getUserRole() {
    const token = localStorage.getItem('laravel-vue-spa-token');
    if (!token) {
        return null;
    }

    const tokenData = jwt.decode(token);
    return tokenData.user.user.role;
}


export function getAccessToken(){
    const token = localStorage.getItem('laravel-vue-spa-token');
    if(!token){
        return null;
    }
    const tokenData = jwt.decode(token);
    return tokenData.user.access_token;
}


export function checkerLogout(){
    http().get('/auth/logout');
    localStorage.removeItem('laravel-vue-spa-token');
}

export function getUserProfile(){
    return http().get('/auth/user_profile');
}

