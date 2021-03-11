import { marketBiddingFuture20DaysConstants } from '../../_constants';
import { marketBiddingFuture20DaysService } from '../../_services';

export const marketBiddingFuture20DaysActions = {
    getmarketBiddingFuture20DaysData
};

function getmarketBiddingFuture20DaysData() {
    return  dispatch => {
       dispatch(request());
        marketBiddingFuture20DaysService.getmarketBiddingFuture20DaysData()
            .then(
                marketBiddingFuture20Days =>dispatch(success(marketBiddingFuture20Days)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: marketBiddingFuture20DaysConstants.GETDATA_REQUEST } }
    function success(marketBiddingFuture20Days) {
        return { type: marketBiddingFuture20DaysConstants.GETDATA_SUCCESS, marketBiddingFuture20Days }
    }
    function failure(error) { return { type: marketBiddingFuture20DaysConstants.GETDATA_FAILURE, error } }
}
