import { authHeader } from '../../_helpers';
import {base_url} from '../../_constants';
import {handleResponse} from '../handleResponse';

export const siteControlGeneratorListService = {
    getsiteControlGeneratorListData,
};

async function getsiteControlGeneratorListData() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    const response = await fetch(`${base_url}/v1/data/getsiteControlGeneratorListData`, requestOptions)
      return await handleResponse(response);
}