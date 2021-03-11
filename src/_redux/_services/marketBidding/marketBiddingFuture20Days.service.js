import { authHeader } from '../../_helpers';
import {base_url} from '../../_constants';
import {handleResponse} from '../handleResponse';

export const marketBiddingFuture20DaysService = {
    getmarketBiddingFuture20DaysData,
};

async function getmarketBiddingFuture20DaysData() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    const response = await fetch(`${base_url}/v1/data/getmarketBiddingFuture20DaysData`, requestOptions)
      return await handleResponse(response);
}
