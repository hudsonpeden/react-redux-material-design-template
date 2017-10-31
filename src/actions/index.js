export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";

export function userLogin() {
    return {
       type: LOGIN_SUCCESS, 
    }
}

export function userLogout() {
    return {
         type: LOGOUT_SUCCESS 
    }
}