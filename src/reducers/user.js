import Immutable from 'immutable';
import { RENDER_SIGNUP, RENDER_LOGIN, CREATE_USER_SUCUCCESSFUL } from '../constants/appConstants';
 
const initialState = Immutable.fromJS({
    showSignUp: false,
    showLogin: false,
    message: "",

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
        case CREATE_USER_SUCUCCESSFUL:
            return state.set("message", action.payload.message )
        default:
            return state;
    }


}
