import React from 'react';
import SlideToggle from "react-slide-toggle";

function MafiaTwo(){
  return (
    <div className="mafiaTwo" style={{height:'500px'}}>
        <h1>Mafia Two Component</h1>
        <SlideToggle>
          {({ toggle, setCollapsibleElement }) => (
            <div className="my-collapsible">
              <button className="my-collapsible__toggle" onClick={toggle}>
                toggle
              </button>
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
