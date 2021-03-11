import { marketBiddingTotalPowerCapacityConstants } from '../../_constants';
import { marketBiddingTotalPowerCapacityService } from '../../_services';

export const marketBiddingTotalPowerCapacityActions = {
    getmarketBiddingTotalPowerCapacityData
};

function getmarketBiddingTotalPowerCapacityData() {
    return  dispatch => {
       dispatch(request());
        marketBiddingTotalPowerCapacityService.getmarketBiddingTotalPowerCapacityData()
            .then(
                marketBiddingTotalPowerCapacity =>dispatch(success(marketBiddingTotalPowerCapacity)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: marketBiddingTotalPowerCapacityConstants.GETDATA_REQUEST } }
    function success(marketBiddingTotalPowerCapacity) {
        return { type: marketBiddingTotalPowerCapacityConstants.GETDATA_SUCCESS, marketBiddingTotalPowerCapacity }
    }
    function failure(error) { return { type: marketBiddingTotalPowerCapacityConstants.GETDATA_FAILURE, error } }
}
