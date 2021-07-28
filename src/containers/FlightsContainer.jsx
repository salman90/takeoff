import React,  {PureComponent }  from 'react';
import Flights from '../componets/Flights';
import { connect } from 'react-redux';
import {
    submitExample
} from '../actions/flightActions'

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
})

/**
 * 
 * @param {Function} dispatch 
 * @returns actions to be passed to flights component 
 */
const mapDispatchToProps = (dispatch) => ({
    submitExample: (title) => {
        dispatch(submitExample(title));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(FlightsContainer);