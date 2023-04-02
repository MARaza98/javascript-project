import React from 'react';
import Card from 'react-bootstrap/Card';
function TitleInfo() {
  return (
    <Card style={{border:'none'}}>
      <Card.Body style={{paddingBottom:'11px'}} >
       <div style={{display:'flex',fontSize:'15px'}}>
        <div style={{borderRight:'1px solid',paddingRight:'15px'}}>
        <h4 style={{color:'#48AF78'}}>St judes Hospital</h4>
        <text style={{color:'#959595'}}>sarasota.FL 33178</text>
        </div>
        <div style={{paddingLeft:'15px'}}>
            <h4 style={{color:'#48AF78'}}>10</h4>
            <text style={{color:'#959595'}}>October</text>
        </div>
        <div>
            <h4 style={{color:'#48AF78',paddingRight:'15px'}}> - </h4>
        </div>
        <div style={{borderRight:'1px solid',paddingRight:'15px'}}>
            <h4 style={{color:'#48AF78'}}>17</h4>
            <text style={{color:'#959595'}}>December</text>
        </div>
        <div style={{paddingRight:'15px',paddingLeft:'15px'}}>
            <h4 style={{color:'#48AF78'}}>20 Rooms</h4>
            <text style={{color:'#959595'}}>10 Singles, 10 doubles</text>
        </div>
       </div>
      </Card.Body>
    </Card>
    
  );
}

export default TitleInfo;