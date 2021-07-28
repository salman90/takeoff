import Immutable from 'immutable';

const initialState = Immutable.fromJS({

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

        default:
            return state;
    }


}
