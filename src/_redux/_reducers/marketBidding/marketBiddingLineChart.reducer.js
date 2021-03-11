import { marketBiddingLineChartConstants } from '../../_constants';

export function marketBiddingLineChart(state = {}, action) {
    switch (action.type) {
        case marketBiddingLineChartConstants.GETDATA_REQUEST:
            return {
                loading: true
            };
        case marketBiddingLineChartConstants.GETDATA_SUCCESS:
            return {
                marketBiddingLineChartData: action.marketBiddingLineChart.data
            };
        case marketBiddingLineChartConstants.GETDATA_FAILURE:
            return {
                error: action.error
            };
        default:
            return state
    }
}