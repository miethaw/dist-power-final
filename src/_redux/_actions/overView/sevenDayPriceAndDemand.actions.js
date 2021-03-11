import { sevenDayPriceAndDemandConstants } from '../../_constants';
import { sevenDayPriceAndDemandService } from '../../_services';

export const sevenDayPriceAndDemandActions = {
    getSevenDayPriceAndDemand
};

function getSevenDayPriceAndDemand() {
    return dispatch => {
        dispatch(request());
        sevenDayPriceAndDemandService.getSevenDayPriceAndDemand()
            .then(
                sevenDayPriceAndDemand => dispatch(success(sevenDayPriceAndDemand)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: sevenDayPriceAndDemandConstants.GETDATA_REQUEST } }
    function success(sevenDayPriceAndDemand) {
        return { type: sevenDayPriceAndDemandConstants.GETDATA_SUCCESS, sevenDayPriceAndDemand }
    }
    function failure(error) { return { type: sevenDayPriceAndDemandConstants.GETDATA_FAILURE, error } }
}
