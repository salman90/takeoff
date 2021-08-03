import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import UserDetails from '../componets/User/UserDetails';
import {
    renderSignupUser,
} from '../actions/userActions'
/**
 * user Container holds all  the state & actions to data related to flightsconstainer class holds all the state & actions to data related to user
 */
class UserContainer extends PureComponent {
    render(){
        return (
            <div>
                <UserDetails {...this.props}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    showSignUp: state.user.get('showSignUp'),
})

const mapDispatchToProps = (dispatch) => ({
    renderSignupUser: () => {
        dispatch(renderSignupUser());
    }
})




export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);