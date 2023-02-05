import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import styled from '@emotion/styled';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useState } from 'react';
import MenuBottom from './MenuBottom';

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


`;

const Downup=styled(KeyboardArrowUpIcon)`
  font-size:small;
`
export default function AccountMenu({accountName}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [rotate,setRotate]=useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setRotate(true);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setRotate(false);
  };
  const DownArrow={
  fontSize:'small',
  transform: rotate
      ? `rotate(-180deg)`
      : `rotate(0deg)`,
  transition: `transform ${100}ms`,
  Maxwidth: '108px',
  leatterSpacing:'-1.2px'
  }
  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Account settings">
          <IconButton
            onMouseEnter={handleClick}            
            size="small"
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            style={{background:'none'}}
          >
            <HeaderTypography style={{color:'#fff'}}>
              {accountName}<KeyboardArrowDownIcon style={DownArrow}/>
            </HeaderTypography>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onMouseLeave={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: '50%',
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'center', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
      >
        <Box onMouseLeave={handleClose}>
          <MenuBottom />
        </Box>
       
      </Menu>
    </React.Fragment>
  );
}