export const authHeader = () => {
    let loginData = JSON.parse(localStorage.getItem('loginData'));
    if (loginData !== null) {
        if (loginData.data && loginData.data.token) {
            return {
                "Content-type": "application/json; charset=UTF-8",
                'X-AUTH-TOKEN': loginData.data.token
            };
        } else {
            return {};
        }
    }
}