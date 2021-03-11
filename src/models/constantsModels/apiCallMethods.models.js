import { authHeader, handleResponse } from '../../constants';
export const ApiCallMethodsModels = {
    loginMethod,
    getApiCallMethod,
    postApiCallMethod,
    deleteApiCallMethod,
    putApiCallMethod
};

async function loginMethod(url, email, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=UTF-8' },
        body: JSON.stringify({ email, password })
    };
    return fetch(url, requestOptions)
        .then(handleResponse)
        .then(user => {
            localStorage.setItem('loginData', JSON.stringify(user));
            return user;
        })
}

async function getApiCallMethod(url) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return await fetch(url, requestOptions).then(await handleResponse).then(data => { return data });
}

async function postApiCallMethod(url, bodyObj) {
    const requestOptions = {
        method: 'POST',
        headers: authHeader(),
        body: JSON.stringify(bodyObj)
    };
    return fetch(url, requestOptions).then(await handleResponse).then(data => { return data; });
}

async function deleteApiCallMethod(url, id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };
    return await fetch(`${url}/${id}`, requestOptions).then(await handleResponse);
}

async function putApiCallMethod(url, bodyObj) {
    const requestOptions = {
        method: 'PUT',
        headers: authHeader(),
        body: JSON.stringify(bodyObj)
    };
    return await fetch(url, requestOptions).then(await handleResponse);
}