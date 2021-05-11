import React from 'react';
import { Container, Row } from 'react-bootstrap';

function Footer(){
  const footer = {
    height: '50px'
  }

  return (
    <Container>
      <Row>
        <div style={footer}>
          <h6>Developed by Md Julhas Hossain</h6>
        </div>
      </Row>
    </Container>
    
  );
}

export default Footer;
