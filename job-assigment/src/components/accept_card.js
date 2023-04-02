import React from 'react';
import Card from 'react-bootstrap/Card';
import TitleInfo from './Title_with_Info';
import BookNowCards from './card';
import ChatButton from './Chat_button';

function Acceptcard() {
  return (
    <Card style={{ marginTop: '15px', borderRadius: '25px',marginBottom:'7px'}}>
      <Card.Body style={{}} >
        <TitleInfo />
        <div style={{ marginTop: '5px', border: '1px solid #959595 ', borderRadius: '50px',
         backgroundColor: '#44A16F', padding: '1px', width: '435px', display: 'flex',marginLeft:'25px' }}>
          <div>
            <text style={{ color: '#FFFFFF', padding: '0 80px', }}>COMPLETED</text>
          </div>
        </div>
        <div style={{display:'flex'}}>
        <BookNowCards shouldShowRareFind={true}/>
        <BookNowCards />
        <BookNowCards />
        <ChatButton />

        </div>
   
      </Card.Body>
    </Card>

  );
}

export default Acceptcard;