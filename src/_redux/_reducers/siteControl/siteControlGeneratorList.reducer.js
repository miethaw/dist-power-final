import { siteControlGeneratorListConstants } from '../../_constants';

export function siteControlGeneratorList(state = {}, action) {
    switch (action.type) {
        case siteControlGeneratorListConstants.GETDATA_REQUEST:
            return {
                loading: true
            };
        case siteControlGeneratorListConstants.GETDATA_SUCCESS:
            return {
                siteControlGeneratorList: action.siteControlGeneratorList.data
            };
        case siteControlGeneratorListConstants.GETDATA_FAILURE:
            return {
                error: action.error
            };
        default:
            return state
    }
}