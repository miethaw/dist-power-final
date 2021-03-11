import { authHeader } from '../_helpers';
import {base_url} from '../_constants';
import moment from "moment";
import {handleResponse} from './handleResponse';

export const drawMapService = {
    getGeneratorInfo,
    getLatLngs
};

async function getGeneratorInfo() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    const response = await fetch(`${base_url}/v1/data/generator-info?timestamp=${moment(new Date()).format(
        "YYYY-MM-DD_HH:mm:ss.SSS"
      )}`, requestOptions)
      return await handleResponse(response);
}

async function getLatLngs() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    const response = await fetch(`${base_url}/getLatLngs`, requestOptions)
    return await handleResponse(response);
}
