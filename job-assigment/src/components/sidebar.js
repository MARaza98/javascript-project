import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';


const Sidebar = () => {
  return (
    <div style={{boxShadow: '1px 2px 9px #817878'}}>
      <CDBSidebar textColor="#333" backgroundColor="#FFFFFF">
            <CDBSidebarMenuItem style={{font:'Lato',fontWeight:'800',fontSize:'35.48px',lineHeight:'42.58px'}}>LODGN</CDBSidebarMenuItem>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>

            <CDBSidebarHeader>
            <CDBSidebarMenuItem style={{color:'#72AA83',width:'231px',height:'70px',left:'29px',top:'884px'}} >Current requests</CDBSidebarMenuItem>
            </CDBSidebarHeader>
            <CDBSidebarHeader>
            <CDBSidebarMenuItem style={{color:'#494949',width:'158px',height:'33px',left:'19px',top:'227px'}}>Ongoing stays</CDBSidebarMenuItem>
            </CDBSidebarHeader>
            <CDBSidebarHeader>
            <CDBSidebarMenuItem style={{color:'#494949',width:'156px',height:'33px',left:'19px',top:'306px'}}>Previous stays</CDBSidebarMenuItem>
            </CDBSidebarHeader>
            <CDBSidebarHeader>
            <CDBSidebarMenuItem style={{color:'#494949',height:'33px',left:'19px',top:'385px'}}>Reports</CDBSidebarMenuItem>
            </CDBSidebarHeader>

          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center',padding:'180px 0 0 0' }}>
          <div style={{padding:'20px 5px'}}>
            <button style={{width:'231px',height:'70px',top:'884px',left:'29px',borderRadius:'10px',
            backgroundColor:'#69AC80',lineHeight:'33px',color:'#FFFFFF', fontWeight:'600',
             fontSize:'22px',border:'none'}}>
              Log-Out
            </button>
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
}


  
  export default Sidebar;