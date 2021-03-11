import { authHeader } from '../../_helpers';
import {base_url} from '../../_constants';
import {handleResponse} from '../handleResponse';

export const siteControlSolarImageService = {
    getsiteControlSolarImageData,
};

async function getsiteControlSolarImageData() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    const response = await fetch(`${base_url}/v1/data/getsiteControlSolarImageData`, requestOptions)
      return await handleResponse(response);
}