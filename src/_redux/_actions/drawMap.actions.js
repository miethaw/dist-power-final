import { drawMapConstants } from '../_constants';
import { drawMapService } from '../_services';

export const drawMapActions = {
    getGeneratorInfo,
    getLatLngs
};

function getGeneratorInfo() {
    return dispatch => {
        dispatch(request());
        drawMapService.getGeneratorInfo()
            .then(
                drawMap => dispatch(success(drawMap)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: drawMapConstants.GETGENERATORINFO_REQUEST } }
    function success(drawMap) { return { type: drawMapConstants.GETGENERATORINFO_SUCCESS, drawMap } }
    function failure(error) { return { type: drawMapConstants.GETGENERATORINFO_FAILURE, error } }
}

function getLatLngs() {
    return dispatch => {
        dispatch(request());
        drawMapService.getLatLngs()
            .then(
                drawMap => dispatch(success(drawMap)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: drawMapConstants.GETLATLNGS_REQUEST } }
    function success(drawMap) { return { type: drawMapConstants.GETLATLNGS_SUCCESS, drawMap } }
    function failure(error) { return { type: drawMapConstants.GETLATLNGS_FAILURE, error } }
}
