import { history } from "./history";

export const logout=()=> {
    localStorage.removeItem('loginData');
    window.location.pathname='/login';
    history.push('/login')
}