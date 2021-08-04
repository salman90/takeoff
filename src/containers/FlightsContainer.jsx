import React,  {PureComponent }  from 'react';
import Flights from '../componets/Flights';
import { connect } from 'react-redux';
import {
    submitExample
} from '../actions/flightActions'
import {
    renderSignupUser, renderLogin, loginUser
} from '../actions/userActions'

/**
 * container class holds all the state & actions to data related to flightsconstainer class holds all the state & actions to data related to flights
 */
class FlightsContainer extends PureComponent {
    render(){
        return (
            <Flights {...this.props}/>
        )
    }
}


/**
 * 
 * @param {Object} state 
 * @returns props that will be passed to flights
 */
const mapStateToProps = (state) => ({
    title: state.flight.get('title'),
    showTitle: state.flight.get('showTitle'),
    showSignUp: state.user.get('showSignUp'),
    showLogin: state.user.get("showLogin"),
})

/**
 * 
 * @param {Function} dispatch 
 * @returns actions to be passed to flights component 
 */
const mapDispatchToProps = (dispatch) => ({
    submitExample: (title) => {
        dispatch(submitExample(title));
    },
    renderSignupUser: () => {
        dispatch(renderSignupUser());
    },
    renderLogin: () => {
        dispatch(renderLogin());
    },
    loginUser: (email, password) => {
        dispatch(loginUser(email, password));
    }

})

export default connect(mapStateToProps, mapDispatchToProps)(FlightsContainer);