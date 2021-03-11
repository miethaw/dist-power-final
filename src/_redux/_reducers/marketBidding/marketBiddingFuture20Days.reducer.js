import { marketBiddingFuture20DaysConstants } from '../../_constants';

export function marketBiddingFuture20Days(state = {}, action) {
    switch (action.type) {
        case marketBiddingFuture20DaysConstants.GETDATA_REQUEST:
            return {
                loading: true
            };
        case marketBiddingFuture20DaysConstants.GETDATA_SUCCESS:
            return {
                marketBiddingFuture20DaysData: action.marketBiddingFuture20Days.data,
            };
        case marketBiddingFuture20DaysConstants.GETDATA_FAILURE:
            return {
                error: action.error
            };
        default:
            return state
    }
}