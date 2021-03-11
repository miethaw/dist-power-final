import { authHeader } from '../../_helpers';
import {base_url} from '../../_constants';
import {handleResponse} from '../handleResponse';

export const overviewPageOnedataChartService = {
    getOverviewPageOnedata,
};

async function getOverviewPageOnedata() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    const response = await fetch(`${base_url}/v1/data/getOverviewPageOnedata`, requestOptions)
      return await handleResponse(response);
}
