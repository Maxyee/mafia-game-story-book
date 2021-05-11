import React from 'react';
import { Container, Row } from 'react-bootstrap';

function Header(){

  const header = {
    height: '50px',
  }

  return (
    <Container>
      <Row>
      <div style={header}>
          <h6>Mafia Story Book</h6>
      </div>
      </Row>
    </Container>
    
  );
}

export default Header;
