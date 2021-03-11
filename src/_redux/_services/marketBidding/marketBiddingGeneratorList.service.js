import { authHeader } from '../../_helpers';
import {base_url} from '../../_constants';
import {handleResponse} from '../handleResponse';

export const marketBiddingGeneratorListService = {
    getmarketBiddingGeneratorListData,
};

async function getmarketBiddingGeneratorListData() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    const response = await fetch(`${base_url}/v1/data/getmarketBiddingGeneratorListData`, requestOptions)
      return await handleResponse(response);
}
