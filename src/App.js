import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import { Box } from '@mui/material'
import {NavBar,VideoDetail,ChannelDetail,SearchFeed,Feed} from './components'

const App = () => (
  <BrowserRouter>
<Box sx= {{backgroundColor:'#000'}}>
<NavBar></NavBar>
<Routes>
    <Route path='/' exact element={<Feed/>}></Route>
    <Route path='/video/:id' element={<VideoDetail/>}></Route>
    <Route path='/channel/:id' element={<ChannelDetail/>}></Route>
    <Route path='/search/:searchTerm' element={<SearchFeed/>}></Route>
</Routes>

</Box>
  </BrowserRouter>
  )


export default App
