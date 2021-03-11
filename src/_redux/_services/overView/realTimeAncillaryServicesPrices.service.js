import { authHeader } from '../../_helpers';
import {base_url} from '../../_constants';
import {handleResponse} from '../handleResponse';

export const realTimeAncillaryServicesPricesService = {
    getServicesPrices,
};

async function getServicesPrices() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    const response = await fetch(`${base_url}/v1/data/getServicesPrices`, requestOptions)
      return await handleResponse(response);
}
