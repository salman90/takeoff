import React, { PureComponent } from 'react';
import {
    Container, 
    Navbar, 
    Nav, 
} from 'react-bootstrap';
import { Link } from 'react-router-dom';


class Navigation extends PureComponent {

    renderSignupUser = (event) => {
        event.preventDefault();
        this.props.renderSignupUser();
    }

    renderLogin = (event) => {
        event.preventDefault();
        this.props.renderLogin();
        }

    renderFlightsInput = (event) => {
        event.preventDefault();
        // this.props.renderFlightsInput();
        console.log("clicked on flights")
    }

    render(){
        return(
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link to="/user" className="nav-link">
                                Profile
                             </Link>
                              <Link to="/" onClick={this.renderFlightsInput} className="nav-link">
                                Flights
                             </Link>
                             <Link onClick={this.renderSignupUser}to="#" className="nav-link">
                                sign Up
                            </Link>
                            <Link onClick={this.renderLogin} to="#" className="nav-link">
                                Login
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                 </Container>
            </Navbar>
        )
    }
}

export default Navigation;

