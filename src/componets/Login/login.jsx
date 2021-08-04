import React, {PureComponent} from 'react';
import { Modal, Button, Form } from 'react-bootstrap';


class Login extends PureComponent {

    constructor(props) {
        super(props)
        this.state = {
            emailChange : "",
            passwordChange : "",
        }
    }

    hideLogin = (e) => {
        this.props.renderLogin();
    }

    emailChange = (e) => {
    this.setState({
        emailChange : e.target.value,
    })
    }

    passwordChange = (e) => {
        this.setState({
            passwordChange : e.target.value,
        })
    }

    gatherData = (e) => {
        console.log("gatherdata")
        this.props.loginUser(this.state.emailChange, this.state.passwordChange);
    }

    render(){
        console.log(this.props)
        console.log(this.state)
        return(
            <Modal
                size="md"
                show={this.props.showLogin}
                onHide={this.hideLogin}
                aria-labelledby="example-modal-sizes-title-md"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-sm">
                        Login
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
     
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" onChange={this.emailChange} placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" onChange={this.passwordChange} placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                    </Form>
                    
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={this.gatherData}>Login</Button>
                </Modal.Footer>
            </Modal>
        )
    }
} 

export default Login; 