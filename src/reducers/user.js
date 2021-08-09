import Immutable from 'immutable';
import { RENDER_SIGNUP, RENDER_LOGIN } from '../constants/appConstants';
 
const initialState = Immutable.fromJS({
    showSignUp: false,
    showLogin: false,
})



/**
 * @description controls state update for the user
 * @param {Object} state 
 * @param {Object} action
 * @returns state of the user
 * 
 */
export default (state = initialState, action = {}) => {
    switch (action.type) {
        case RENDER_SIGNUP:
            return state
                    .set("showSignUp", !state.get("showSignUp"))
        case RENDER_LOGIN:
            return state.set("showLogin", !state.get("showLogin"))
        default:
            return state;
    }


}
