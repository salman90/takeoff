import React, { PureComponent } from 'react';
import {
    Container, 
    Row, 
    Col, 
    Navbar, 
    Nav, 
} from 'react-bootstrap';
import { Link } from 'react-router-dom';


class Navigation extends PureComponent {
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
                              <Link to="/" className="nav-link">
                                Flights
                             </Link>
                        </Nav>
                    </Navbar.Collapse>
                 </Container>
            </Navbar>
        )
    }
}

export default Navigation;

