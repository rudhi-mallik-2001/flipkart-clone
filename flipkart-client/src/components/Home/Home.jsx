import { Stack } from '@mui/system';
import React, { useEffect } from 'react'
import { getProduct } from '../../redux/action/productAction';
import Banner from './Banner/Banner';
import Nav from "./HomeNav/Nav";
import { useDispatch } from 'react-redux';


const Home = () => {
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(getProduct());
  },[dispatch])
  return (
    <Stack sx={{marginTop:'34px',background:'#f1f3f6',height:'100vh'}}>
        <Nav/>
        <Banner/>
    </Stack>
  )
}

export default Home