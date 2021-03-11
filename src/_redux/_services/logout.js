export const logout=()=> {
    localStorage.removeItem('loginData');
    window.location.pathname='/login';
}