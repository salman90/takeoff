import React, { PureComponent } from 'react';
import UserDetails from '../componets/User/UserDetails';

/**
 * user Container holds all  the state & actions to data related to flightsconstainer class holds all the state & actions to data related to user
 */
class UserContainer extends PureComponent {
    render(){
        return (
            <div>
                <UserDetails />
            </div>
        )
    }
}

export default UserContainer;