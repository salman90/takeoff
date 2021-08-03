import React, { PureComponent } from 'react';
import { Container, Row } from 'react-bootstrap';
import Navigation from '../../Navigation';
import SignUp from '../../SignUp';

class UserDetails extends PureComponent {
    render(){
        return (
            <Container fluid>
                <Row>
                    <Navigation 
                        renderSignupUser={this.props.renderSignupUser}
                    />
                </Row>
                {
                    this.props.showSignUp?
                        <SignUp
                           showSignUp={this.props.showSignUp} 
                           renderSignupUser={this.props.renderSignupUser}
                        />
                    :
                    null

                }
            </Container>
        )
    }
}

export default UserDetails;