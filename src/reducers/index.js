import { combineReducers } from 'redux';
import AuthReducer from './reducer_auth';

const rootReducer = combineReducers({
    auth: AuthReducer
});

export default rootReducer;