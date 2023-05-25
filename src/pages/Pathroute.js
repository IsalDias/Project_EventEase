import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Home from './home/Home'
import Events from './Events'
import Services from '../pages/Services/Services'
import { Aboutus } from './About us/Aboutus'

export default function Pathroute() {
  return (

    <div>
      <Router>
        <Routes>
            <Route exact path = "/" element={<Home/>}></Route>
            <Route path = "/events" element={<Events/>}></Route>
            <Route path='/services' element={<Services/>}></Route>
            <Route path='/aboutus' element={<About/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}
