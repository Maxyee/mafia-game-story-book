import React from 'react';
import './Home.css';

import MafiaOne from './screens/MafiaOne';
import MafiaTwo from './screens/MafiaTwo';
import MafiaThree from './screens/MafiaThree';

function Home(){
  return (
    <div className="home">
        <MafiaOne/>
        <MafiaTwo/>
        <MafiaThree/>
    </div>
  );
}

export default Home;
