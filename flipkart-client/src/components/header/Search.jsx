import React from 'react'
import { InputBase ,styled} from "@mui/material";
import { Box } from '@mui/system';
import SearchIcon from '@mui/icons-material/Search';
const HeaderSearch=styled(Box)`
background:#fff;
width:36%;
height:36px;
border-radius:2px;
margin-left:10px;
box-shadow:1px solid gray;
display:flex;
`;
const HeaderSearchInput=styled(InputBase)`
    padding-left:14px;
    width:100%;
    line-height: 20px;
    font-size: 14px;
    letter-spacing: .1px;;
    color:#000000;
`;
const HeaderBox=styled(Box)`
    color:blue;
    padding:8px;
    font-size:small;
`;
const Search = () => {
  return (
    <HeaderSearch>
        <HeaderSearchInput 
        placeholder='Search for products brand and more'/>
        <HeaderBox>
          <SearchIcon style={{fontSize:'medium'}}/>
        </HeaderBox>
    </HeaderSearch>
    
    
  )
}

export default Search