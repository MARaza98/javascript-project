import Sidebar from './components/sidebar';
import Requestscard from './components/requests_card';
import Acceptcard from './components/accept_card';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App" style={{display:'flex', backgroundColor:'#D9D9D9'}}>
      <Sidebar />
    <div style={{padding:'30px 0 0 85px'}}>
    <h3 style={{fontSize:'28.56px',lineHeight:'42.83px',fontWeight:'600',
    font:'poppins',color:'#72AA83'}}>You currently have 3 requests</h3>
    <Requestscard />
    <Acceptcard />
    </div>
    </div>
  </Router>
  );
}

export default App;
