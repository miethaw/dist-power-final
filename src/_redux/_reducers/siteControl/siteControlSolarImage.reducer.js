import { siteControlSolarImageConstants } from '../../_constants';

export function siteControlSolarImage(state = {}, action) {
    switch (action.type) {
        case siteControlSolarImageConstants.GETDATA_REQUEST:
            return {
                loading: true
            };
        case siteControlSolarImageConstants.GETDATA_SUCCESS:
            return {
                siteControlSolarImage: action.siteControlSolarImage.data
            };
        case siteControlSolarImageConstants.GETDATA_FAILURE:
            return {
                error: action.error
            };
        default:
            return state
    }
}