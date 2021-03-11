import { overviewPageOnedataChartConstants } from '../../_constants';
import { overviewPageOnedataChartService } from '../../_services';

export const overviewPageOnedataChartActions = {
    getOverviewPageOnedata
};

function getOverviewPageOnedata() {
    return dispatch => {
        dispatch(request());
        overviewPageOnedataChartService.getOverviewPageOnedata()
            .then(
                overviewPageOnedataChart => dispatch(success(overviewPageOnedataChart)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: overviewPageOnedataChartConstants.GETDATA_REQUEST } }
    function success(overviewPageOnedataChart) {
        return { type: overviewPageOnedataChartConstants.GETDATA_SUCCESS, overviewPageOnedataChart }
    }
    function failure(error) { return { type: overviewPageOnedataChartConstants.GETDATA_FAILURE, error } }
}
