import React, { PureComponent } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Navigation from '../../Navigation';


class UserDetails extends PureComponent {
    render(){
        return (
            <Container fluid>
                <Row>
                    <Navigation />
                </Row>
            </Container>
        )
    }
}

export default UserDetails;