import { realTimeAncillaryServicesPricesConstants } from '../../_constants';
import { realTimeAncillaryServicesPricesService } from '../../_services';

export const realTimeAncillaryServicesPricesActions = {
    getServicesPrices
};

function getServicesPrices() {
    return dispatch => {
        dispatch(request());
        realTimeAncillaryServicesPricesService.getServicesPrices()
            .then(
                realTimeAncillaryServicesPrices => dispatch(success(realTimeAncillaryServicesPrices)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: realTimeAncillaryServicesPricesConstants.GETDATA_REQUEST } }
    function success(realTimeAncillaryServicesPrices) {
        return { type: realTimeAncillaryServicesPricesConstants.GETDATA_SUCCESS, realTimeAncillaryServicesPrices }
    }
    function failure(error) { return { type: realTimeAncillaryServicesPricesConstants.GETDATA_FAILURE, error } }
}
