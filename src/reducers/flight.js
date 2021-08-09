import Immutable from 'immutable';
import {
    EXAMPLE_TO_SUBMIT, RENDER_LOGIN
} from '../constants/appConstants';

const initialState = Immutable.fromJS({
    title: '',
    showTitle: false,

})

/**
 * @description controls state update for the flight
 * @param {Object} state
 * @param {Object} action
 * @returns state of the user
 *
 */
export default (state = initialState, action = {}) => {
    switch (action.type) {
        case EXAMPLE_TO_SUBMIT:
            return state
                .set('title', action.payload)
                .set('showTitle', true)
        case RENDER_LOGIN:
            return state.set("showLogin", !state.get("showLogin"))
        default:
            return state;
    }


}
