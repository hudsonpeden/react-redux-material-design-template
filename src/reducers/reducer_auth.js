import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from '../actions/index';

const INITIAL_AUTH_STATE = {
    isAuthenticated: false,
}

export default function(state = INITIAL_AUTH_STATE, action) {
    switch (action.type) {
        case LOGIN_SUCCESS : 
            return { ...state, isAuthenticated: true }
        case LOGOUT_SUCCESS :
            return { ...state, isAuthenticated: false }
        default : 
            return state
        
    }
}