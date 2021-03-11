import { sevenDayPriceAndDemandConstants } from '../../_constants';

export function sevenDayPriceAndDemand(state = {}, action) {
    switch (action.type) {
        case sevenDayPriceAndDemandConstants.GETDATA_REQUEST:
            return {
                loading: true
            };
        case sevenDayPriceAndDemandConstants.GETDATA_SUCCESS:
            return {
                sevenDayPriceAndDemandData:action.sevenDayPriceAndDemand.data
            };
        case sevenDayPriceAndDemandConstants.GETDATA_FAILURE:
            return {
                error: action.error
            };
        default:
            return state
    }
}