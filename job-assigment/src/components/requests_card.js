import React from 'react';
import Card from 'react-bootstrap/Card';
import TitleInfo from './Title_with_Info';

function Requestscard() {
  return (
    <Card >
      <Card.Body >
      <TitleInfo />
       <div style={{marginTop:'10px',border:'1px solid #959595',borderRadius:'50px', width:'846px',display:'flex'}}>
        <div style={{borderRight:'1px solid #959595'}}>
            <text style={{color:'#959595',backgroundColor:'#FDF307',borderStartStartRadius:'100px',
            borderBottomLeftRadius:'100px',padding:'1px 97px',}}>RECEIVED</text>
        </div>
        <div style={{borderRight:'1px solid #959595'}}>
        <text style={{color:'#959595',padding:'0 97px',}}>NEGOTIATING</text>
        </div>
        <div>
        <text style={{color:'#959595',padding:'0 97px',}}>COMPLETED</text>
        </div>
        </div> 
      </Card.Body>
    </Card>
    
  );
}

export default Requestscard;