import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';
import React from 'react'
import {navData} from '../../../Constants/data';

const NavBoxContainer=styled(Box)`
    display:flex;
    flex-direction:row;
    width:100%;
    justify-content :center;
    align-items:center;
    background:#fff;
    box-shadow: .1px .1px 2px gray;
    `
const NavBox=styled(Box)`
    display:flex;
    flex-direction:row;
    justify-content :space-between;
    align-items:center;
    flex-warp:warp;
    width:90%;
    height:16vh;
`;
const ImgcontBox=styled(Box)`
    display:flex;
    flex-direction:column;
    justify-content :center;
    align-items:center;
    margin-top:4px;
    cursor:pointer;
`
const Nav = () => {
  return (
    <NavBoxContainer>
        <NavBox>
        {
            
            navData.map(data=>
                <ImgcontBox key={data.text} >
                    <img src={data.url} style={{width:'64px',height:'64px',marginBottom:'4px'}}/>
                    <Typography style={{fontSize:'14px',fontWeight:'500',color:'black',fontFamily:''}}>{data.text}</Typography>
                </ImgcontBox>
            )
        }
        </NavBox>
    </NavBoxContainer>
  )
}

export default Nav