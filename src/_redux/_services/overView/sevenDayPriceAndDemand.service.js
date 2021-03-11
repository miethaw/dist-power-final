import { authHeader } from '../../_helpers';
import {base_url} from '../../_constants';
import {handleResponse} from '../handleResponse';

export const sevenDayPriceAndDemandService = {
    getSevenDayPriceAndDemand,
};

async function getSevenDayPriceAndDemand() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    const response = await fetch(`${base_url}/v1/data/getSevenDayPriceAndDemand`, requestOptions)
      return await handleResponse(response);
}
