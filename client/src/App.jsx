//import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './components/auth/Signup.jsx'
import Login from './components/auth/Login.jsx'
import Homepage from './components/homepage/Homepage.jsx'
import Player_details from './components/details/Player_details.jsx'
import Main from './components/main/Main.jsx'
import Standings from './components/features/Standings.jsx';
import Resume from './components/pages/Resume.jsx';
import CardResume from "./components/pages/CardResume.jsx";
import Training from "./components/features/Training.jsx";
import Injury from "./components/features/InjuryPage.jsx";
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
        <Route path="/cardresume/:id" element={<CardResume/>} ></Route>
        <Route path='/training' element={<Training/>}></Route>
        <Route path='/injury' element={<Injury/>}></Route>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
