import { headerConstants } from '../_constants';
import { headerService } from '../_services';

export const headerActions = {
    getContRes,
    getPCapacity
};

function getContRes() {
    return dispatch => {
        dispatch(request());

        headerService.getContRes()
            .then(
                headers => dispatch(success(headers)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: headerConstants.GETCONSTRES_REQUEST } }
    function success(headers) { return { type: headerConstants.GETCONSTRES_SUCCESS, headers } }
    function failure(error) { return { type: headerConstants.GETCONSTRES_FAILURE, error } }
}

function getPCapacity() {
    return dispatch => {
        dispatch(request());

        headerService.getPCapacity()
            .then(
                headers => dispatch(success(headers)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: headerConstants.GETPOWERCAPACITY_REQUEST } }
    function success(headers) { return { type: headerConstants.GETPOWERCAPACITY_SUCCESS, headers } }
    function failure(error) { return { type: headerConstants.GETPOWERCAPACITY_FAILURE, error } }
}
