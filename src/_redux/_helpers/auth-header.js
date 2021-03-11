export function authHeader() {
    // return authorization header with jwt token
    let loginData=JSON.parse(localStorage.getItem('loginData'));

    if (loginData.data && loginData.data.token) {
        return { "Content-type": "application/json; charset=UTF-8",
        'X-AUTH-TOKEN': loginData.data.token };
    } else {
        return {};
    }
}