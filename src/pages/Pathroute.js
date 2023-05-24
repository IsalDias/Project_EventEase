import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Home from './home/Home'
import Events from './Events'
export default function Pathroute() {
  return (

    <div>
      <Router>
        <Routes>
            <Route exact path = "/" element={<Home/>}></Route>
            <Route path = "/events" element={<Events/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}
