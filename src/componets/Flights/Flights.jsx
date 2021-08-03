import React, { PureComponent } from 'react';
import { Container, Row,  Col} from 'react-bootstrap';
import styles from './Flights.module.css'
import SignUp from '../SignUp';
import Navigation from '../Navigation';
/**
 * Class flights render flights page with the information needed 
 */
class Flights extends PureComponent {
    constructor(props){
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
        return(
            <Container fluid>
                <Row>
                    <Navigation   
                        renderSignupUser={this.props.renderSignupUser}
                    />
                </Row>
                {
                    this.props.showSignUp ?
                        <SignUp 
                            showSignUp={this.props.showSignUp}
                            renderSignupUser={this.props.renderSignupUser}
                            createUser={this.props.createUser}
                        />
                        :
                        null

                }
            </Container>
        )
    }
}

export default Flights;