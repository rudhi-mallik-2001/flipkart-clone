import { Stack ,Fragrament} from '@mui/system';
import React from 'react'
import Banner from './Banner/Banner';
import Nav from "./HomeNav/Nav";
const Home = () => {
  return (
    <Stack sx={{marginTop:'34px',background:'#f1f3f6',height:'100vh'}}>
        <Nav/>
        <Banner/>
    </Stack>
  )
}

export default Home