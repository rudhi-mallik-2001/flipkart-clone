import { Box, Button, Typography, styled } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {useState} from 'react';
import Login from '../Login/Login';
import AccountMenu from '../LoginMenu/AccountMenu'
import {Createcontex} from "../../DataProvider/DataProvider";
import { useContext } from 'react';
const HeaderButtonsBox = styled(Box)`
padding-left:15px;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    gap:2rem;
    line-height: 20px;
    font-size: 16px;
    letter-spacing: .1px;
`;
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
`;

const LoginButton=styled(Button)`
background:#fff;
color:#2874f0;
line-height: 20px;
font-size: 16px;
letter-spacing: .1px;
text-transform:none;
padding:5px 40px;
border-radius:2px;
box-shadow:none;
font-weight:550;
`;
const HeaderButtons = () => {
    const [open,setopen]=useState(false);
    const {account}=useContext(Createcontex);
    //console.log(account);
    return (
        <HeaderButtonsBox>
            {
                account?<AccountMenu accountName={account}/>:<LoginButton variant="contained" onClick={()=>{setopen(true)}}>Login</LoginButton>
            }
            
            <HeaderTypography style={{width:130}}>Become a seller</HeaderTypography>
            <HeaderTypography>More<ExpandMoreIcon style={{fontSize:'small',color:'#dbdbdbed'}}/></HeaderTypography>
            <HeaderTypography><ShoppingCartIcon />Cart</HeaderTypography>
            <Login open={open} setopen={setopen}/>
        </HeaderButtonsBox>
    )
}

export default HeaderButtons