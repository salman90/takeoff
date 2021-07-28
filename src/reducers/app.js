import { combineReducers } from 'redux';
import flight from './flight';
import user from './user';


/**
 * app reuders holds all reducers for the application
 */
export default combineReducers({
    flight,
    user
})
