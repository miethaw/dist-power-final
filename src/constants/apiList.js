import { base_url } from "./BaseUrl";
import moment from "moment";

export const loginApi = `${base_url}/v1/user/login`;
export const logoutApi=`${base_url}/v1/user/logout`;
export const getAllUserApi=`${base_url}/v1/admin/get-users`;
export const createUserApi=`${base_url}/v1/admin/save-user`;
export const deleteUserApi=`${base_url}/v1/admin/delete-user`;
export const suspendUserApi=`${base_url}/v1/admin/suspend-user`;
export const getGeneratorInfoApi=`${base_url}/v1/data/generator-info?timestamp=${moment(new Date()).format(
    "YYYY-MM-DD_HH:mm:ss.SSS"
  )}`;
export const getOverviewPageOnedataApi=`${base_url}/v1/admin/getOverviewPageOnedata`;
export const getRealTimeServicePriceApi=`${base_url}/v1/admin/getServicesPrices`;
export const getSevenDayPriceAndDemandApi=`${base_url}/v1/admin/getPriceAndDemand`;
export const getRealTimeAncillaryServicesPricesApi=`${base_url}/v1/admin/getRealTimeAncillaryServicesPrice`;
export const getLatLngsApi=`${base_url}/v1/admin/getLatLngsApi`;