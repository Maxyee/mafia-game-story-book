import React from 'react';
import {Container, Row, Col, Nav} from 'react-bootstrap';
import './Mafia2.css';

function Mafia2(){
    return(
        <Container className="mafia-menu">
            <Row>
                <Col>
                    <h1>MAIN MENU</h1>
                    <Nav defaultActiveKey="/home" className="flex-column">
                        <Nav.Link href="/home">THE STORY</Nav.Link>
                        <Nav.Link eventKey="link-1">THE BETRAYAL OF JIMMY</Nav.Link>
                        <Nav.Link eventKey="link-2">JIMMY'S VENDETTA</Nav.Link>
                        <Nav.Link eventKey="link-2">JOE'S ADVENTURES</Nav.Link>
                        <Nav.Link eventKey="link-2">DOWNLOADABLE CONTENT</Nav.Link>
                        <Nav.Link eventKey="link-2">EXTRAS</Nav.Link>
                        <Nav.Link eventKey="link-2">OPTIONS</Nav.Link>
                        <Nav.Link eventKey="link-2">EXIT</Nav.Link>
                    </Nav>
                </Col>
            </Row>
        </Container>
    )
}

export default Mafia2;