import React from 'react';
import Card from 'react-bootstrap/Card';

function Requestscard() {
  return (
    <Card style={{marginTop:'40px'}}>
      <Card.Body >
       <div style={{display:'flex',marginTop:'30px'}}>
        <div style={{borderRight:'1px solid',paddingRight:'40px'}}>
        <h4 style={{color:'#48AF78'}}>St judes Hospital</h4>
        <text style={{color:'#959595'}}>sarasota.FL 33178</text>
        </div>
        <div style={{paddingRight:'40px',paddingLeft:'40px'}}>
            <h4 style={{color:'#48AF78'}}>10</h4>
            <text style={{color:'#959595'}}>October</text>
        </div>
        <div>
            <h4 style={{color:'#48AF78',paddingRight:'40px'}}> - </h4>
        </div>
        <div style={{borderRight:'1px solid',paddingRight:'40px'}}>
            <h4 style={{color:'#48AF78'}}>17</h4>
            <text style={{color:'#959595'}}>December</text>
        </div>
        <div style={{paddingRight:'40px',paddingLeft:'40px'}}>
            <h4 style={{color:'#48AF78'}}>20 Rooms</h4>
            <text style={{color:'#959595'}}>10 Singles, 10 doubles</text>
        </div>
       </div>

       <div style={{marginTop:'40px',border:'1px solid ',borderRadius:'50px', width:'830px',display:'flex'}}>
        <div style={{borderRight:'1px solid'}}>
            <text style={{color:'#959595',backgroundColor:'#FDF307',borderStartStartRadius:'100px',
            borderBottomLeftRadius:'100px',padding:'1px 94px',}}>RECEIVED</text>
        </div>
        <div style={{borderRight:'1px solid'}}>
        <text style={{color:'#959595',padding:'0 94px',}}>NEGOTIATING</text>
        </div>
        <div>
        <text style={{color:'#959595',padding:'0 94px',}}>COMPLETED</text>
        </div>
        </div> 
      </Card.Body>
    </Card>
    
  );
}

export default Requestscard;