import React, { PureComponent } from 'react';
import { Container, Row } from 'react-bootstrap';
import Navigation from '../../Navigation';
import SignUp from '../../SignUp';
import Login from '../../Login';

class UserDetails extends PureComponent {
    render(){
        console.log(this.props.showLogin)
        return (
            <Container fluid>
                <Row>
                    <Navigation 
                        renderSignupUser={this.props.renderSignupUser}
                        renderLogin={this.props.renderLogin}
                    />
                </Row>
                {
                    this.props.showSignUp?
                        <SignUp
                           showSignUp={this.props.showSignUp} 
                           renderSignupUser={this.props.renderSignupUser}
                            createUser={this.props.createUser}
                        />
                    :
                    null

                }

                {this.props.showLogin?
                <Login showLogin={this.props.showLogin} 
                    renderLogin={this.props.renderLogin}
                    loginUser={this.props.loginUser}
                />
                :
                null
                }
            </Container>
        )
    }
}

export default UserDetails;