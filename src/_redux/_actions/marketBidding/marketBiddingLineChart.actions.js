import { marketBiddingLineChartConstants } from '../../_constants';
import { marketBiddingLineChartService } from '../../_services';

export const marketBiddingLineChartActions = {
    getMarketBiddingLineChartData
};

function getMarketBiddingLineChartData() {
    return dispatch => {
        dispatch(request());
        marketBiddingLineChartService.getMarketBiddingLineChartData()
            .then(
                marketBiddingLineChart => dispatch(success(marketBiddingLineChart)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: marketBiddingLineChartConstants.GETDATA_REQUEST } }
    function success(marketBiddingLineChart) {
        return { type: marketBiddingLineChartConstants.GETDATA_SUCCESS, marketBiddingLineChart }
    }
    function failure(error) { return { type: marketBiddingLineChartConstants.GETDATA_FAILURE, error } }
}
