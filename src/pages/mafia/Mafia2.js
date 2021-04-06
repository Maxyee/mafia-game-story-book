import React from 'react';
import {Container, Row, Col, Nav} from 'react-bootstrap';
import './Mafia2.css';

function Mafia2(){
    return(
        <Container className="mafia-menu">
            <Row>
                <Col>
                    <Nav defaultActiveKey="/home" className="flex-column">
                    <Nav.Link href="/home">Active</Nav.Link>
                    <Nav.Link eventKey="link-1">Link</Nav.Link>
                    <Nav.Link eventKey="link-2">Link</Nav.Link>
                    <Nav.Link eventKey="disabled" disabled>
                        Disabled
                    </Nav.Link>
                    </Nav>
                </Col>
                <Col>1 of 1</Col>
                <Col>1 of 1</Col>
                <Col>1 of 1</Col>
                <Col>1 of 1</Col>
                <Col>1 of 1</Col>
                <Col>1 of 1</Col>
                <Col>1 of 1</Col>
                <Col>1 of 1</Col>
                <Col>1 of 1</Col>
                <Col>1 of 1</Col>
                <Col>1 of 1</Col>
            </Row>
        </Container>
    )
}

export default Mafia2;