import React, { PureComponent } from 'react';
import { Modal, Button,Form } from 'react-bootstrap';


class SignUp extends PureComponent {

    hideSignUp = (e) => {
        this.props.renderSignupUser();
    }
    render(){
        console.log(this.props)
        return(
            <Modal
                size="md"
                show={this.props.showSignUp}
                onHide={this.hideSignUp}
                aria-labelledby="example-modal-sizes-title-md"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-sm">
                        Sign Up
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter First Name" />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control type="password" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                    </Form>
                    
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.hideSignUp} variant="secondary">Close</Button>
                    <Button variant="primary">Sign Up!!</Button>
                </Modal.Footer>
            </Modal>
        )
    }
} 

export default SignUp;