import { marketBiddingGeneratorListConstants } from '../../_constants';

export function marketBiddingGeneratorList(state = {}, action) {
    switch (action.type) {
        case marketBiddingGeneratorListConstants.GETDATA_REQUEST:
            return {
                loading: true
            };
        case marketBiddingGeneratorListConstants.GETDATA_SUCCESS:
            return {
                marketBiddingGeneratorListData:action.marketBiddingGeneratorList.data
            };
        case marketBiddingGeneratorListConstants.GETDATA_FAILURE:
            return {
                error: action.error
            };
        default:
            return state
    }
}