import { siteControlGeneratorListConstants } from '../../_constants';
import { siteControlGeneratorListService } from '../../_services';

export const siteControlGeneratorListActions = {
    getsiteControlGeneratorListData
};

function getsiteControlGeneratorListData() {
    return  dispatch => {
       dispatch(request());
        siteControlGeneratorListService.getsiteControlGeneratorListData()
            .then(
                siteControlGeneratorList =>dispatch(success(siteControlGeneratorList)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: siteControlGeneratorListConstants.GETDATA_REQUEST } }
    function success(siteControlGeneratorList) {
        return { type: siteControlGeneratorListConstants.GETDATA_SUCCESS, siteControlGeneratorList }
    }
    function failure(error) { return { type: siteControlGeneratorListConstants.GETDATA_FAILURE, error } }
}
