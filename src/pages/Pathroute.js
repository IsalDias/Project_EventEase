import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Home from './home/Home'
import Events_1 from '../pages/Events_1/Events_1'
import Services from '../pages/Services/Services'
import Aboutus from '../pages/About us/Aboutus';


export default function Pathroute() {
  return (

    <div>
      <Router>
        <Routes>
            <Route exact path = "/" element={<Home/>}></Route>
            <Route path = "/events" element={<Events_1/>}></Route>
            <Route path='/services' element={<Services/>}></Route>
            <Route path='/aboutus' element={<Aboutus/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}
