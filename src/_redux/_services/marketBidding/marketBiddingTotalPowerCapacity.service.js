import { authHeader } from '../../_helpers';
import {base_url} from '../../_constants';
import {handleResponse} from '../handleResponse';

export const marketBiddingTotalPowerCapacityService = {
    getmarketBiddingTotalPowerCapacityData,
};

async function getmarketBiddingTotalPowerCapacityData() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    const response = await fetch(`${base_url}/v1/data/getmarketBiddingTotalPowerCapacityData`, requestOptions)
      return await handleResponse(response);
}