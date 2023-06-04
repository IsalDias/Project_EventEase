import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Ann_Hero from '../pages/Annonymous/Ann_Hero/Ann_Hero'
import Events_1 from '../pages/Customer/Events_1/Events_1'
import Services from '../pages/Customer/Services/Services'
import Aboutus from '../pages/Customer/About us/Aboutus';
import Login from '../pages/Annonymous/Login/Login'
import { Appointments } from './Service_provider/Appointments/Appointments'
import Ann_Register from '../pages/Annonymous/Ann_Register/Ann_Register'


export default function Pathroute() {
  return (

    <div>
      <Router>
        <Routes>
            <Route exact path = "/" element={<Ann_Hero/>}></Route>
            <Route path = "/events" element={<Events_1/>}></Route>
            <Route path='/services' element={<Services/>}></Route>
            <Route path='/aboutus' element={<Aboutus/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/serviceprovider/appointments' element={<Appointments/>}></Route>
            <Route path='/register' element={<Ann_Register/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}
