import { realTimePriceAndDemandConstants } from '../../_constants';
import { realTimePriceAndDemandService } from '../../_services';

export const realTimePriceAndDemandActions = {
    getPriceAndDemand
};

function getPriceAndDemand() {
    return dispatch => {
        dispatch(request());
        realTimePriceAndDemandService.getPriceAndDemand()
            .then(
                realTimePriceAndDemand => dispatch(success(realTimePriceAndDemand)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: realTimePriceAndDemandConstants.GETDATA_REQUEST } }
    function success(realTimePriceAndDemand) {
        return { type: realTimePriceAndDemandConstants.GETDATA_SUCCESS, realTimePriceAndDemand }
    }
    function failure(error) { return { type: realTimePriceAndDemandConstants.GETDATA_FAILURE, error } }
}
