import { marketBiddingGeneratorListConstants } from '../../_constants';
import { marketBiddingGeneratorListService } from '../../_services';

export const marketBiddingGeneratorListActions = {
    getmarketBiddingGeneratorListData
};

function getmarketBiddingGeneratorListData() {
    return dispatch => {
        dispatch(request());
        marketBiddingGeneratorListService.getmarketBiddingGeneratorListData()
            .then(
                marketBiddingGeneratorList => dispatch(success(marketBiddingGeneratorList)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: marketBiddingGeneratorListConstants.GETDATA_REQUEST } }
    function success(marketBiddingGeneratorList) {
        return { type: marketBiddingGeneratorListConstants.GETDATA_SUCCESS, marketBiddingGeneratorList }
    }
    function failure(error) { return { type: marketBiddingGeneratorListConstants.GETDATA_FAILURE, error } }
}
