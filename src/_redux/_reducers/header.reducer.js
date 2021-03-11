import { headerConstants } from '../_constants';

export function header(state = {}, action) {
    switch (action.type) {
        case headerConstants.GETCONSTRES_REQUEST:
            return {
                loading: true
            };
        case headerConstants.GETCONSTRES_SUCCESS:
            return {
                items: action.header
            };
        case headerConstants.GETCONSTRES_FAILURE:
            return {
                error: action.error
            };

        case headerConstants.GETPOWERCAPACITY_REQUEST:
            return {
                loading: true
            };
        case headerConstants.GETPOWERCAPACITY_SUCCESS:
            return {
                items: action.header
            };
        case headerConstants.GETPOWERCAPACITY_FAILURE:
            return {
                error: action.error
            };

        default:
            return state
    }
}