import { authHeader } from '../_helpers';
import { base_url } from '../_constants/';
import { handleResponse } from './handleResponse';

export const userService = {
    login,
    logout,
    register,
    getAll,
    getById,
    update,
    delete: _delete
};

async function login(email, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=UTF-8' },
        body: JSON.stringify({ email, password })
    };

    return fetch(`${base_url}/v1/user/login`, requestOptions)
        .then(await handleResponse)
        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('loginData', JSON.stringify(user));
            return user;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('loginData');
}

async function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return await fetch(`${base_url}/v1/admin/get-users`, requestOptions).then(await handleResponse);
}

async function getById(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return await fetch(`${base_url}/users/${id}`, requestOptions).then(await handleResponse);
}

async function register(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return await fetch(`${base_url}/users/register`, requestOptions).then(await handleResponse);
}

async function update(user) {
    const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return await fetch(`${base_url}/users/${user.id}`, requestOptions).then(await handleResponse);;
}

// prefixed function name with underscore because delete is a reserved word in javascript
async function _delete(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };

    return await fetch(`${base_url}/users/${id}`, requestOptions).then(await handleResponse);
}

