import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper,IconButton } from '@mui/material'
import {Search} from '@mui/icons-material'

const SearchBar = () => {
  return (
    <div>
      <Paper
      component="form"
      onSubmit={()=>{}}
      sx={{
        borderRadius:20,
        border:'1px solid #e3e3e3',
        pl:2,
        boxShadow:'none',
        mr:{sm:5}
      }}
      
      >
<input
className='search-bar'
placeholder='searchbar...'
value=""
onChange={()=>{}}
/>
<IconButton type='submit' sx={{
    p:'10px',color:'red'
}}>
<Search/>

</IconButton>


      </Paper>
    </div>
  )
}

export default SearchBar
