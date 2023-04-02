import React from 'react';
import Card from 'react-bootstrap/Card';
import vector from '../assest/Vector 1.png'
import Holiday from '../assest/Holiday Inn.png'
function Cards() {
  return (
    <Card style={{borderRadius: '25px', paddingBottom: '50px',
    paddingRight:'25px',paddingLeft:'25px',border:'none'}}>
      <Card.Body style={{}} >
       
        <div style={{display:'flex'}}>
        <Card style={{ width: '220px', height: '130px',
         borderRadius: '10px', backgroundColor: '#F5F4F4' }}>
          <Card.Body style={{alignSelf:'center'}}>
            <div style={{paddingLeft:'25px'}}>
            <img style={{width:'40px'}} src={vector} />
            </div>
            <div>
            <img style={{width:'90px'}} src={Holiday}/>
            </div>

            <Card style={{ width: '218px', position: 'absolute', height: '93px',
             boxShadow: '0 0 9px #817878', borderRadius: '10px', backgroundColor: '#EEEEEE',
              top: '90px', left: '0.2px',color:'#959595' }}>
              <Card.Body style={{fontSize:'12px'}}>
              <text>
                  1.5 miles away from job location.
                </text>
                <div style={{display:'flex',}}>
                <div style={{paddingRight:'29px',paddingTop:'10px'}}>
                  <div>
                    Singles:$120
                  </div>
                  <div>
                    Doubles:$145
                  </div>
                </div>
                <div style={{alignSelf:'end',paddingTop:'16px'}}>
                  <button style={{backgroundColor:'#44A16F',borderRadius:'10px',
                  color:'#FFFFFF',border:'none',width:'90px',height:'30px'}}>Book now</button>
                </div>
                </div>
              </Card.Body>
            </Card>
          </Card.Body>
        </Card>
        </div>
   
      </Card.Body>
    </Card>

  );
}

export default Cards;