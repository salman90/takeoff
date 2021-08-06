import React, { PureComponent } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import styles from './Flights.module.css'
import SignUp from '../SignUp';
import Login from '../Login';
import Navigation from '../Navigation';
import FligthsInput from '../Flight-input';
/**
 * Class flights render flights page with the information needed 
 */
class Flights extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            title: "salman",
        }
    }

    /**
     * 
     * @param {Object} e
     * handels on input text change and updates calss state with value 
     */
    updateTitle = (e) => {
        this.setState({
            title: e.target.value,
        })
    }

    /**
     * 
     * @param {Object} e 
     * @description handels button click event and calls action submitExample in actions file
     */
    example = (e) => {
        e.preventDefault();

        this.props.submitExample(this.state.title);
    }
    render() {
        // console.log(this.props)
        return (
            <Container fluid>
                <Row>
                    <Navigation
                        renderSignupUser={this.props.renderSignupUser}
                        renderLogin={this.props.renderLogin}
                    />
                </Row>
                {
                    this.props.showSignUp ?
                        <SignUp
                            showSignUp={this.props.showSignUp}
                            renderSignupUser={this.props.renderSignupUser}
                        />
                        :
                        null

                }
                <Row>
                    {this.props.showLogin ?
                        <Login
                            showLogin={this.props.showLogin}
                            renderLogin={this.props.renderLogin}
                            loginUser={this.props.loginUser}
                        />
                        :
                        null

                    }
                </Row>
                <Row>
                    <FligthsInput flightSearch={this.props.flightSearch}
                    />
                </Row>
            </Container>
        )
    }
}

export default Flights;