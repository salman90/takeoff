import Immutable from 'immutable';
import {
    EXAMPLE_TO_SUBMIT
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
        default:
            return state;
    }


}
