import { authHeader } from '../../_helpers';
import {base_url} from '../../_constants';
import {handleResponse} from '../handleResponse';

export const marketBiddingLineChartService = {
    getMarketBiddingLineChartData,
};

async function getMarketBiddingLineChartData() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    const response = await fetch(`${base_url}/v1/data/getMarketBiddingLineChartData`, requestOptions)
      return await handleResponse(response);
}
