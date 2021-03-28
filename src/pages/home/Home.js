import React from 'react';
import './Home.css';
import FlipPage from 'react-flip-page';

import MafiaOne from './screens/MafiaOne';
import MafiaTwo from './screens/MafiaTwo';
import MafiaThree from './screens/MafiaThree';

function Home(){
  return (
    <div className="home">
        <FlipPage width="auto">
          <MafiaOne/>
          <MafiaTwo/>
          <MafiaThree/>
        </FlipPage>
    </div>
    
  );
}

export default Home;
