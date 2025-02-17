//import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './components/auth/Signup.jsx'
import Login from './components/auth/Login.jsx'
import Homepage from './homepage/Homepage'
import Player_details from './details/Player_details'
import Main from './main/Main.jsx'
import Standings from './pages/Standings';
import Resume from './pages/Resume';
//import SearchPlayers from "./SearchPlayers";
import {BrowserRouter, Routes, Route} from 'react-router-dom'



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/playerdetails' element={<Player_details/>} ></Route>
        <Route path="/" element={<Homepage />} ></Route>
        <Route path='/register' element={<Signup/>} ></Route>
        <Route path='/login' element={<Login/>} ></Route>
        <Route path='/main' element={<Main/>} ></Route>
        <Route path='/live-match' element={<Standings />} />
        <Route path='/resume' element={<Resume/>} ></Route> 
        {/* <Route path="/searchplayers" element={<SearchPlayers/>} </Route> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
