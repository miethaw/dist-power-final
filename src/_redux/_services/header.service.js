import { authHeader } from '../_helpers';
import {base_url} from '../_constants/';
import {handleResponse} from './handleResponse';

export const headerService = {
    getContRes,
    getPCapacity
};

async function getContRes() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    const response = await fetch(`${base_url}/getContRes`, requestOptions)
    return await handleResponse(response)
}

async function getPCapacity() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    const response = await fetch(`${base_url}/getPCapacity`, requestOptions)
    return await handleResponse(response)
}
