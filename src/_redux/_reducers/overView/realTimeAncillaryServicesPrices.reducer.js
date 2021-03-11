import { realTimeAncillaryServicesPricesConstants } from '../../_constants';

export function realTimeAncillaryServicesPrices(state = {}, action) {
    switch (action.type) {
        case realTimeAncillaryServicesPricesConstants.GETDATA_REQUEST:
            return {
                loading: true
            };
        case realTimeAncillaryServicesPricesConstants.GETDATA_SUCCESS:
            return {
                realTimeAncillaryServicesPricesData:action.realTimeAncillaryServicesPrices.data
            };
        case realTimeAncillaryServicesPricesConstants.GETDATA_FAILURE:
            return {
                error: action.error
            };
        default:
            return state
    }
}