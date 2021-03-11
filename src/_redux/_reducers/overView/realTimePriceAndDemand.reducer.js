import { realTimePriceAndDemandConstants } from '../../_constants';

export function realTimePriceAndDemand(state = {}, action) {
    switch (action.type) {
        case realTimePriceAndDemandConstants.GETDATA_REQUEST:
            return {
                loading: true
            };
        case realTimePriceAndDemandConstants.GETDATA_SUCCESS:
            return {
                realTimePriceAndDemandData:action.realTimePriceAndDemand.data
            };
        case realTimePriceAndDemandConstants.GETDATA_FAILURE:
            return {
                error: action.error
            };
        default:
            return state
    }
}