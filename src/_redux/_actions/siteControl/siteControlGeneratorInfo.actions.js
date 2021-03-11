import { siteControlGeneratorInfoConstants } from '../../_constants';
import { siteControlGeneratorInfoService } from '../../_services';

export const siteControlGeneratorInfoActions = {
    getsiteControlGeneratorInfoData
};

function getsiteControlGeneratorInfoData() {
    return  dispatch => {
       dispatch(request());
        siteControlGeneratorInfoService.getsiteControlGeneratorInfoData()
            .then(
                siteControlGeneratorInfo =>dispatch(success(siteControlGeneratorInfo)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: siteControlGeneratorInfoConstants.GETDATA_REQUEST } }
    function success(siteControlGeneratorInfo) {
        return { type: siteControlGeneratorInfoConstants.GETDATA_SUCCESS, siteControlGeneratorInfo }
    }
    function failure(error) { return { type: siteControlGeneratorInfoConstants.GETDATA_FAILURE, error } }
}
