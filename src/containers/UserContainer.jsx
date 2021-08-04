import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import UserDetails from '../componets/User/UserDetails';
import {
    renderSignupUser, renderLogin, loginUser
} from '../actions/userActions'
/**
 * user Container holds all  the state & actions to data related to flightsconstainer class holds all the state & actions to data related to user
 */
class UserContainer extends PureComponent {
    render(){
        console.log(this.props)
        return (
            <div>
                <UserDetails {...this.props}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    showSignUp: state.user.get('showSignUp'),
    showLogin: state.user.get("showLogin"),
})

const mapDispatchToProps = (dispatch) => ({
    renderSignupUser: () => {
        dispatch(renderSignupUser());
    },
    renderLogin: () => {
        dispatch(renderLogin());
    },
    loginUser: (email, password) => {
        dispatch(loginUser(email, password))
    }
})




export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);