import React from 'react';
import {
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';


const Sidebar = () => {
  return (
    <div style={{boxShadow: '1px 2px 9px #817878',width:'260px',backgroundColor:'#FFFFFF'}}>
   
            <CDBSidebarMenuItem style={{fontWeight:'700',fontSize:'30px',lineHeight:'42px'}}>LODGN</CDBSidebarMenuItem>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>

            
            <CDBSidebarMenuItem style={{color:'#72AA83',width:'231px',height:'10%',left:'29px',top:'884px',fontWeight:'700'}} >Current requests</CDBSidebarMenuItem>
            <CDBSidebarMenuItem style={{color:'#494949',width:'158px',height:'10%',left:'19px',top:'227px',fontWeight:'700'}}>Ongoing stays</CDBSidebarMenuItem>
            <CDBSidebarMenuItem style={{color:'#494949',width:'156px',height:'33px',left:'19px',top:'306px',fontWeight:'700'}}>Previous stays</CDBSidebarMenuItem>
            <CDBSidebarMenuItem style={{color:'#494949',height:'33px',left:'19px',top:'385px',fontWeight:'700'}}>Reports</CDBSidebarMenuItem>

          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center',paddingTop:'220px' }}>
          <div>
            <button style={{padding:'10px 45px',borderRadius:'10px',
            backgroundColor:'#69AC80',lineHeight:'25px',color:'#FFFFFF', fontWeight:'600',
             fontSize:'15px',border:'none'}}>
              Log-Out
            </button>
            <div style={{fontSize:'15px',fontWeight:'600',paddingTop:'6px'}}>
              Help-Desk:
            </div>
            <div style={{fontSize:'15px',fontWeight:'600'}}>
              786-874 9988
            </div>
          </div>
        </CDBSidebarFooter>
   
    </div>
  );
}


  
  export default Sidebar;