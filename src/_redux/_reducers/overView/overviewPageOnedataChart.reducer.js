import { overviewPageOnedataChartConstants } from '../../_constants';

export function overviewPageOnedataChart(state = {}, action) {
    switch (action.type) {
        case overviewPageOnedataChartConstants.GETDATA_REQUEST:
            return {
                loading: true
            };
        case overviewPageOnedataChartConstants.GETDATA_SUCCESS:
            return {
                overviewPageOnedataChartData:action.overviewPageOnedataChart.data
            };
        case overviewPageOnedataChartConstants.GETDATA_FAILURE:
            return {
                error: action.error
            };
        default:
            return state
    }
}