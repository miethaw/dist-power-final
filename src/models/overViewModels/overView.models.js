import {
    getOverviewPageOnedataApi,
    getRealTimeServicePriceApi,
    getSevenDayPriceAndDemandApi,
    getRealTimeAncillaryServicesPricesApi,
    getLatLngsApi,
    getGeneratorInfoApi
} from '../../constants';
import { ApiCallMethodsModels } from '../constantsModels/apiCallMethods.models';

export const overViewModels = {
    getOverviewPageOnedata,
    getRealTimeServicesPrices,
    getSevenDayPriceAndDemand,
    getRealTimeAncillaryServicesPrices,
    getLatLngs,
    getGeneratorInfo
};

function getGeneratorInfo(){
    return ApiCallMethodsModels.getApiCallMethod(getGeneratorInfoApi).then(res=>{
        return res.data
    })
}

function getLatLngs(){
    return ApiCallMethodsModels.getApiCallMethod(getLatLngsApi).then(res=>{
        return res.data
    })
}

function getRealTimeAncillaryServicesPrices(){
    return ApiCallMethodsModels.getApiCallMethod(getRealTimeAncillaryServicesPricesApi).then(res=>{
        return res.data
    })
}

function getSevenDayPriceAndDemand(){
    return ApiCallMethodsModels.getApiCallMethod(getSevenDayPriceAndDemandApi).then(res=>{
        return res.data
    })
}

function getOverviewPageOnedata() {
    return ApiCallMethodsModels.getApiCallMethod(getOverviewPageOnedataApi).then(res => {
        return res.data
    })
}

function getRealTimeServicesPrices() {
    return ApiCallMethodsModels.getApiCallMethod(getRealTimeServicePriceApi).then(res => {
        return res.data
    })
}


