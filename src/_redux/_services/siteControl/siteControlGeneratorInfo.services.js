import { authHeader } from '../../_helpers';
import {base_url} from '../../_constants';
import {handleResponse} from '../handleResponse';

export const siteControlGeneratorInfoService = {
    getsiteControlGeneratorInfoData,
};

async function getsiteControlGeneratorInfoData() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    const response = await fetch(`${base_url}/v1/data/getsiteControlGeneratorInfoData`, requestOptions)
      return await handleResponse(response);
}