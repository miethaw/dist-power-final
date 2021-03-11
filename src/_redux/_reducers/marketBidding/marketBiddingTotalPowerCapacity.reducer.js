import { marketBiddingTotalPowerCapacityConstants } from '../../_constants';

export function marketBiddingTotalPowerCapacity(state = {}, action) {
    switch (action.type) {
        case marketBiddingTotalPowerCapacityConstants.GETDATA_REQUEST:
            return {
                loading: true
            };
        case marketBiddingTotalPowerCapacityConstants.GETDATA_SUCCESS:
            return {
                numberOfSide: action.marketBiddingTotalPowerCapacity.data.numberOfSide,
                powerCapacity: action.marketBiddingTotalPowerCapacity.data.powerCapacity,
            };
        case marketBiddingTotalPowerCapacityConstants.GETDATA_FAILURE:
            return {
                error: action.error
            };
        default:
            return state
    }
}