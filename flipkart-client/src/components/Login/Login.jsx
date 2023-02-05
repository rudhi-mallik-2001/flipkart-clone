import React from 'react'
import Dialog from '@mui/material/Dialog';
import { Box, TextField, Typography, Button } from '@mui/material';
import styled from '@emotion/styled';
import { useState } from 'react';
import  {fatchDatafromApi,CheckLoginDatafromApi}  from "../Api/Api";
import {Createcontex} from "../../DataProvider/DataProvider";
import { useContext } from 'react';
import AccountMenu from '../LoginMenu/AccountMenu'
const BoxContiner = styled(Box)`
    width:49vw;
    height:85vh;
    display:flex;
    flex-direction:row;
    max-width:75vw;
`
const LoginLeft = styled(Box)`
    background:#2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 90% no-repeat	;
    height:100%;
    width:42%;
`;
const LoginRight = styled(Box)`
    height:100%;
    width:65%;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
`;
const Typographytext = styled(Typography)`
    color: white;
    padding: 41px 20px 15px 35px;
    font-size: 28px;
    font-weight: 600;
    font-family: Roboto, Arial, sans-serif;
    line-height: 1.4;
    letter-spacing: -1.2px;
`
const Typographytext2 = styled(Typography)`
    color: #dbdbdb;
    padding: 0px 25px 5px 35px;
    font-size: 18px;
    font-weight: 500;
    font-family: Roboto, Arial, sans-serif;
    line-height: 1.4;
    letter-spacing: -.2px;
`

const MinText = styled(Typography)`
color: #878787;
font-size: 12px;
font-weight: 400;
padding-top:20px;


`;
const InsideRight = styled(Box)`
    width:82%;
    padding-top:43px;
    display:flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    & button{
        margin-top:50px;
        width:100%;
        background: #fb641b;
        box-shadow: 0 1px 2px 0 rgb(0 0 0 / 20%);
        border: none;
        color: #fff;
    }
    & button:hover{
        margin-top:50px;
        width:100%;
        background: #fb641b;
        box-shadow: 0 1px 2px 0 rgb(0 0 0 / 20%);
        border: none;
        color: #fff;
    }
`;
const IntialValue={
    login:{
        id:'login',
        view:"Login",
        subtitle:"Get access to your Orders, Wishlist and Recommendations"
    },
    signup:{
        id:'Signup',
        view:"Looks like you're new here!",
        subtitle:"Sign up with your mobile number to get started"
    }
}
const SignupData={
    FirstName:'',
    LastName:'',
    UserName:'',
    Email:'',
    Phone:'',
    Password:''
}
const LoginData={
    Username:'',
    Password:''
}
const Login = ({ open, setopen }) => {
    const [login,setLogin]=useState(IntialValue.login);
    const [error,setError]=useState(false);
    const {setAccount}=useContext(Createcontex);
    const handleClose = () => {
        setopen(false);
        setLogin(IntialValue.login);
    }
    const [Signupuser,setSignupuser]=useState(SignupData);
    const [loginupuser,setloginupuser]=useState(LoginData);
    const StoreData=(e)=>{
        setSignupuser({...Signupuser,[e.target.name]:e.target.value});
    }
    //signup data
    const Signup=async()=>{
        setopen(false);
        const response= await fatchDatafromApi(Signupuser);
        if (!response) {
            return;
        }
        console.log(Signupuser.FirstName);
        setAccount(Signupuser.FirstName);
    }

    const Takeuser=(e)=>{
        setloginupuser({...loginupuser,[e.target.name]:e.target.value})
    }
    const Login=async()=>{
        
        const response= await CheckLoginDatafromApi(loginupuser);
        if (response.status===200) {
            setopen(false);
            setAccount(response.data.data.FirstName);
            setError(false);
        }else{
            setError(true);
        }
     console.log(response.data.data.FirstName);   
    }
    return (
        <Dialog onClose={handleClose} open={open}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            PaperProps={{ sx: { maxWidth: 'unset' } }}
        >
            <BoxContiner>
                <LoginLeft>
                    <Typographytext>{login.view}</Typographytext>
                    <Typographytext2>{login.subtitle}</Typographytext2>
                </LoginLeft>
                {
                    login.id==='login' ?
                    <LoginRight>
                        <InsideRight>
                            <TextField style={{ width: '100%', fontSize: '12px' }} onChange={(e)=>{Takeuser(e);}}
                            id="Email/Phone" label="Enter Email/Phone" name='Username' variant="standard" />
                            <TextField style={{ width: '100%' }} onChange={(e)=>{Takeuser(e);}}
                            id="Password" label="Password" variant="standard" name='Password' />
                            <MinText variant='subtitle2'>
                                By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.
                            </MinText>
                            { error ?<Typography color={'red'} variant='subtitle2'>Wrong username and password</Typography>:''}
                            <Button variant="contained" onClick={()=>{Login();}}>Login</Button>
                        </InsideRight>
                        <InsideRight style={{marginTop:'180px'}}>
                            <Typography onClick={()=>{setLogin(IntialValue.signup);}}
                            style={{ color: '#2874f0', fontSize: '12px',cursor:'pointer' }} variant='subtitle2'>
                                New to Flipkart? Create an account
                            </Typography>
                        </InsideRight>
                    </LoginRight>

                    : <LoginRight>
                        <InsideRight>
                            <TextField onChange={(e)=>{StoreData(e);}}
                            style={{ width: '100%', fontSize: '12px' }} id="FirstName" name='FirstName' label="Enter FirstName" variant="standard" />
                            <TextField onChange={(e)=>{StoreData(e);}}
                            style={{ width: '100%', fontSize: '12px' }} id="LastName" name='LastName' label="Enter LastName" variant="standard" />
                            <TextField onChange={(e)=>{StoreData(e);}}
                            style={{ width: '100%', fontSize: '12px' }} id="UserName" name='UserName' label="Enter UserName" variant="standard" />
                            <TextField onChange={(e)=>{StoreData(e);}}
                            style={{ width: '100%', fontSize: '12px' }} id="Email" name='Email' label="Enter Email" variant="standard" />
                            <TextField onChange={(e)=>{StoreData(e);}}
                            style={{ width: '100%', fontSize: '12px' }} id="Phone" name='Phone' label="Enter Phone" variant="standard" />
                            <TextField onChange={(e)=>{StoreData(e);}}
                            style={{ width: '100%' }} id="Password" name='Password' label="Password" variant="standard" />
                            <Button variant="contained" onClick={()=>{Signup()}}
                            style={{textTransform: 'none'}}>Sign Up</Button>
                            <Button variant="contained" onClick={()=>{setLogin(IntialValue.login);}}
                            style={{background:'white',color:'#2874f0',textTransform: 'none'}}>Existing User?Login</Button>
                        </InsideRight>
                    </LoginRight>
                }
            </BoxContiner>
        </Dialog>
    )
}

export default Login