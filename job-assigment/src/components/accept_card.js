import React from 'react';
import Card from 'react-bootstrap/Card';
import vector from '../assest/Vector 1.png'
import Holiday from '../assest/Holiday Inn.png'
function Acceptcard() {
  return (
    <Card style={{ marginTop: '50px', borderRadius: '54px', paddingBottom: '50px', marginBottom: '50px'}}>
      <Card.Body style={{}} >
        <div style={{ display: 'flex', marginTop: '30px' }}>
          <div style={{ borderRight: '1px solid', paddingRight: '40px' }}>
            <h4 style={{ color: '#48AF78' }}>St judes Hospital</h4>
            <text style={{ color: '#959595' }}>sarasota.FL 33178</text>
          </div>
          <div style={{ paddingRight: '40px', paddingLeft: '40px' }}>
            <h4 style={{ color: '#48AF78' }}>10</h4>
            <text style={{ color: '#959595' }}>October</text>
          </div>
          <div>
            <h4 style={{ color: '#48AF78', paddingRight: '40px' }}> - </h4>
          </div>
          <div style={{ borderRight: '1px solid', paddingRight: '40px' }}>
            <h4 style={{ color: '#48AF78' }}>17</h4>
            <text style={{ color: '#959595' }}>December</text>
          </div>
          <div style={{ paddingRight: '40px', paddingLeft: '40px' }}>
            <h4 style={{ color: '#48AF78' }}>20 Rooms</h4>
            <text style={{ color: '#959595' }}>10 Singles, 10 doubles</text>
          </div>
        </div>

        <div style={{ marginTop: '40px', border: '1px solid ', borderRadius: '50px', backgroundColor: '#44A16F', padding: '5px', width: '700px', display: 'flex' }}>
          <div>
            <text style={{ color: '#FFFFFF', padding: '0 80px', }}>COMPLETED</text>
          </div>
        </div>
        <div style={{display:'flex'}}>
        <Card style={{ width: '274px', marginTop: '30px', height: '220px',
         borderRadius: '10px', backgroundColor: '#F5F4F4',marginRight:'35px' }}>
          <Card.Body style={{alignSelf:'center'}}>
            <div style={{paddingLeft:'25px'}}>
            <img src={vector} />
            </div>
            <div>
            <img src={Holiday}/>
            </div>

            <Card style={{ width: '276px', position: 'absolute', height: '93px',
             boxShadow: '0 0 9px #817878', borderRadius: '10px', backgroundColor: '#EEEEEE',
              top: '125px', left: '0.2px',color:'#959595' }}>
              <Card.Body>
              <text>
                  1.5 miles away from job location.
                </text>
                <div style={{display:'flex',}}>
                <div style={{paddingRight:'55px'}}>
                  <div>
                    Singles:$120
                  </div>
                  <div>
                    Doubles:$145
                  </div>
                </div>
                <div style={{alignSelf:'end',marginBottom:'4px'}}>
                  <button style={{backgroundColor:'#44A16F',borderRadius:'10px',color:'#FFFFFF',border:'none',width:'100px',height:'40px'}}>Book now</button>
                </div>
                </div>
              </Card.Body>
            </Card>
          </Card.Body>
        </Card>

        <Card style={{ width: '274px', marginTop: '30px', height: '220px',
         borderRadius: '10px', backgroundColor: '#F5F4F4',marginRight:'35px' }}>
          <Card.Body style={{alignSelf:'center'}}>
            <div style={{paddingLeft:'25px'}}>
            <img src={vector} />
            </div>
            <div>
            <img src={Holiday}/>
            </div>
            <Card style={{ width: '276px', position: 'absolute', height: '93px',
             boxShadow: '0 0 9px #817878', borderRadius: '10px', backgroundColor: '#EEEEEE',
              top: '125px', left: '0.2px', color:'#959595'}}>
              <Card.Body>
                <text>
                  1.5 miles away from job location.
                </text>
                <div style={{display:'flex',}}>
                <div style={{paddingRight:'55px'}}>
                  <div>
                    Singles:$120
                  </div>
                  <div>
                    Doubles:$145
                  </div>
                </div>
                <div style={{alignSelf:'end',marginBottom:'4px'}}>
                  <button style={{backgroundColor:'#44A16F',borderRadius:'10px',color:'#FFFFFF',border:'none',width:'100px',height:'40px'}}>Book now</button>
                </div>
                </div>
                
              </Card.Body>
            </Card>
          </Card.Body>
        </Card>

        <Card style={{ width: '274px', marginTop: '30px', height: '220px',
         borderRadius: '10px', backgroundColor: '#F5F4F4' }}>
          <Card.Body style={{alignSelf:'center'}}>
            <div style={{paddingLeft:'25px'}}>
            <img src={vector} />
            </div>
            <div>
            <img src={Holiday}/>
            </div>
            <Card style={{ width: '276px', position: 'absolute', height: '93px',
             boxShadow: '0 0 9px #817878', borderRadius: '10px', backgroundColor: '#EEEEEE',
              top: '125px', left: '0.2px',color:'#959595' }}>
              <Card.Body>
              <text>
                  1.5 miles away from job location.
                </text>
                <div style={{display:'flex',}}>
                <div style={{paddingRight:'55px'}}>
                  <div>
                    Singles:$120
                  </div>
                  <div>
                    Doubles:$145
                  </div>
                </div>
                <div style={{alignSelf:'end',marginBottom:'4px'}}>
                  <button style={{backgroundColor:'#44A16F',borderRadius:'10px',color:'#FFFFFF',border:'none',width:'100px',height:'40px'}}>Book now</button>
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

export default Acceptcard;