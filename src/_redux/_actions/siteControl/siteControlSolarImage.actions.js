import { siteControlSolarImageConstants } from '../../_constants';
import { siteControlSolarImageService } from '../../_services';

export const siteControlSolarImageActions = {
    getsiteControlSolarImageData
};

function getsiteControlSolarImageData() {
    return  dispatch => {
       dispatch(request());
        siteControlSolarImageService.getsiteControlSolarImageData()
            .then(
                siteControlSolarImage =>dispatch(success(siteControlSolarImage)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: siteControlSolarImageConstants.GETDATA_REQUEST } }
    function success(siteControlSolarImage) {
        return { type: siteControlSolarImageConstants.GETDATA_SUCCESS, siteControlSolarImage }
    }
    function failure(error) { return { type: siteControlSolarImageConstants.GETDATA_FAILURE, error } }
}
