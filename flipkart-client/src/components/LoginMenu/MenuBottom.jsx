import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import styled from '@emotion/styled';

import { useContext } from "react";
import {Createcontex} from "../../DataProvider/DataProvider";

const HeaderTypography = styled(Typography)`
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
line-height: 20px;
font-size: 16px;
letter-spacing: .1px;
font-weight: 540;
cursor:pointer;
color:gray;
& :hover{
  background-color:none;
}
`
const MenuBottom = () => {
  const {setAccount}=useContext(Createcontex);

  const LogoutUser=()=>{
    setAccount('');
  }
  return (
     <Box  style={{width:'250px'}}>
        <MenuItem>
          <Avatar style={{width:'16px',height:'16px',color:"white",background:'#2874f0'}}/><HeaderTypography>My Profile</HeaderTypography>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <PersonAdd style={{width:'16px',height:'16px',color:"#2874f0"}} />
          </ListItemIcon>
          <HeaderTypography>SupperCoin Zone</HeaderTypography>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <Settings style={{width:'16px',height:'16px',color:"#2874f0"}} />
          </ListItemIcon>
          <HeaderTypography>Flipkart Plus Zone</HeaderTypography>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <Logout style={{width:'16px',height:'16px',color:"#2874f0"}} />
          </ListItemIcon>
          <HeaderTypography>Orders</HeaderTypography>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <Logout style={{width:'16px',height:'16px',color:"#2874f0"}} />
          </ListItemIcon>
          <HeaderTypography>Wishlist</HeaderTypography>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <Logout style={{width:'16px',height:'16px',color:"#2874f0"}} />
          </ListItemIcon>
          <HeaderTypography>Coupons</HeaderTypography>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <Logout style={{width:'16px',height:'16px',color:"#2874f0"}} />
          </ListItemIcon>
          <HeaderTypography>Gift Cards</HeaderTypography>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <Logout style={{width:'16px',height:'16px',color:"#2874f0"}} />
          </ListItemIcon>
          <HeaderTypography>Notifications</HeaderTypography>
        </MenuItem>
        <Divider />
        <MenuItem onClick={()=>{LogoutUser()}}>
          <ListItemIcon>
            <Logout style={{width:'16px',height:'16px',color:'#2874f0'}} />
          </ListItemIcon>
          <HeaderTypography>Logout</HeaderTypography>
        </MenuItem>
        </Box>
  )
}

export default MenuBottom