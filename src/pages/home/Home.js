import React from 'react';
import './Home.css';
import FlipPage from 'react-flip-page';
import Header from './../../constants/Header';
import Footer from './../../constants/Footer';
import {Container, Row} from 'react-bootstrap';

import MafiaOne from './screens/MafiaOne';
import MafiaTwo from './screens/MafiaTwo';
import MafiaThree from './screens/MafiaThree';

function Home(){
  return (
    <div className="home">
        <Container>
          <Row>
            <Header/>
          </Row>
          <Row>
            <FlipPage width="auto">
              <MafiaOne/>
              <MafiaTwo/>
              <MafiaThree/>
            </FlipPage>
          </Row>
          <Row>
            <Footer/>
          </Row>
        </Container>
    </div>
    
  );
}

export default Home;
