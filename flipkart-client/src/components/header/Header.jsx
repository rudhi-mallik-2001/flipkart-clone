import React from 'react'
import {AppBar,Toolbar,styled,Box}from '@mui/material';
import  Search  from "./Search";
import HeaderButtons from "./HeaderButtons"
const HeaderStyle=styled(AppBar)`
    background:#2874f0;
    height:56px;
    box-shadow:none;
`

const HeaderBox=styled(Box)`
margin-left:10.2%;
padding-top:3px;
`
const Header = () => {
  return (
    <HeaderStyle>
        <Toolbar style={{minHeight:55}}>
            <HeaderBox>
                <img src="./fk-plus.png" alt="logo" style={{height:'30px',padding:3}}/>
            </HeaderBox>
            <Search/>
            <Box>
              <HeaderButtons/>
            </Box>
            
        </Toolbar>
        
    </HeaderStyle>
  )
}

export default Header