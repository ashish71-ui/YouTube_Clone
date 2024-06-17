import React, { useEffect } from 'react'
import { useState } from 'react';
import { Box,Typography,Stack } from '@mui/material';
import { ViewSidebar } from '@mui/icons-material';
import SideBar from './SideBar';
import Videos from './Videos';
import { fetchFromApi } from '../utils/fetchFromApi';

const Feed = () => {
const [selectedCategory,setselectedCategory] = useState('New');
const [videos,SetVideos] = useState([]);
useEffect(()=>{
fetchFromApi('search?part=snippet&q=${selectedCategory}')
.then((data)=> SetVideos(data.items))
  },[selectedCategory]
);
  return (
    <Stack
    sx={{flexDirection:{sx
      :"column",md:'row'
    }}}
    >
      <Box sx={{height:{sx:'auto',md:'92vh'},
      borderRight: ' 1px solid #3d3d3d',px:{sx:0,md:2}
    
    }}>
      <SideBar
      selectedCategory={selectedCategory}
      setselectedCategory={setselectedCategory}
      >


      </SideBar>
      <Typography className='copyright' variant='body2' sx={{mt:1.5,color:'#fff'}}>
Copyright 2024 Ashish Dhakal

      </Typography>

      </Box>
<Box p={2} sx={{
  overflowY:'auto',
  height:'90vh',
  flex:'2'
}}>
  <Typography variant='h4' fontWeight="bold" mb={2} sx={{
    color:'white'
  }} >
    {selectedCategory}
    <span style={{color:'#F31503'}}>
videos
    </span>
  </Typography>
  <Videos videos={[videos]}/>
</Box>

    </Stack>
  )
}

export default Feed
