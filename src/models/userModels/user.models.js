import {
    history,
    loginApi,
    logoutApi,
    getAllUserApi,
    createUserApi,
    deleteUserApi,
    suspendUserApi
} from '../../constants';
import { ApiCallMethodsModels } from '../constantsModels/apiCallMethods.models';

export const userModels = {
    login,
    logout,
    getAllUser,
    createUser,
    deleteUser,
    suspendUser
};

function login(email, password) {
    return ApiCallMethodsModels.loginMethod(loginApi, email, password)
        .then(user => {
            if (user !== "undefined") {
                localStorage.setItem('loginData', JSON.stringify(user));
                alert(localStorage.getItem('loginData'))
                history.push('/overview');
                window.location.pathname = '/overview';
                return user
            }
        })
        .catch(err => { alert(err) })
}

function logout() {
    ApiCallMethodsModels.getApiCallMethod(logoutApi)
        .then(res => {
            if (res.ok) {
                // localStorage.removeItem('loginData');
                localStorage.clear()
                history.push('/login')
                window.location.pathname = '/login';
                return res.json();
            }
        })
}

function getAllUser() {
    return ApiCallMethodsModels.getApiCallMethod(getAllUserApi)
    .then(users => {
        return users.data
    })
}

function createUser(bodyObj) {
    return ApiCallMethodsModels.postApiCallMethod(createUserApi, bodyObj)
}

function deleteUser(id) {
    return ApiCallMethodsModels.deleteApiCallMethod(deleteUserApi, id)
}

function suspendUser(bodyObj) {
    return ApiCallMethodsModels.postApiCallMethod(suspendUserApi, bodyObj)
}

