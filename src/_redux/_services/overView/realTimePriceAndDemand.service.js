import { authHeader } from '../../_helpers';
import {base_url} from '../../_constants';
import {handleResponse} from '../handleResponse';

export const realTimePriceAndDemandService = {
    getPriceAndDemand,
};

async function getPriceAndDemand() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    const response = await fetch(`${base_url}/v1/data/getPriceAndDemand`, requestOptions)
      return await handleResponse(response);
}
