import { Box, padding, styled, width } from '@mui/system'
import React from 'react'
import  Carousel  from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

import {bannerData} from '../../../Constants/data';
const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const Image=styled('img')({
    height:'280px',
    width:'101%',
    padding:0,
    marginTop:'8px'
  })
  const BannerBoxCont=styled(Box)`
    width:100%;
    height:auto;
    display:flex;
    justify-content:center;
    align-items:center;
  `;
const Banner = () => {
  return (
    <BannerBoxCont>    
        <Box style={{width:'99%',marginTop:'10px'}}>
            <Carousel responsive={responsive} 
            draggable={false}
            infinite={true}
            autoPlay={ true }
            autoPlaySpeed={3000}
            >
                {
                    bannerData.map((data)=>
                            <Image src={data.url}  />
                    )
                }
                
                
            </Carousel>
        </Box>
    </BannerBoxCont>
  )
}

export default Banner