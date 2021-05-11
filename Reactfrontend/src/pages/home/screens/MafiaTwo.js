import React from 'react';
import SlideToggle from "react-slide-toggle";
import {Button} from 'react-bootstrap';

function MafiaTwo(){
  return (
    <div className="mafiaTwo" style={{height:'500px'}}>
        <h1>Mafia Two Component</h1>
        <SlideToggle>
          {({ toggle, setCollapsibleElement }) => (
            <div className="my-collapsible">
              {/* <button className="my-collapsible__toggle" onClick={toggle} style={{textAlign:'center'}}>
                toggle
              </button> */}
              <Button onClick={toggle} variant="primary">Primary</Button>{' '}
              <div className="my-collapsible__content" ref={setCollapsibleElement}>
                <div className="my-collapsible__content-inner">Collapsible content</div>
              </div>
            </div>
          )}
        </SlideToggle>
    </div>
  );
}

export default MafiaTwo;
