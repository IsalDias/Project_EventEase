import React from 'react'
import serv_provider_home from '../Serv_provid_Home/service_provider_home.png'
import { Col, Row } from 'react-bootstrap'
import './serv_provid_home.css'

export const Serv_provid_Home = () => {
  return (
    <>
    <div style={{ overflowX: 'hidden'}}>
        <div style={{ backgroundImage: `url(${serv_provider_home})`, 
    display: "flex",
    height: "125vh",
    backgroundColor: "rgb(0, 0, 0)",
    backgroundPosition: "center",
    width: "100%" ,
    position: "fixed",
    zIndex: "-10",
        }}>
    </div>
    <div>
    <Row>
        <h2 className='serv_prov_welcome'> Welcome </h2>
    </Row>

    <Row>
        <p className='Serv_prov_underwelcome'>Boost up you <em className='Serv_prov_Digital'> DIGITAL </em> presence </p>
    </Row>

    <Row style={{padding:"5% 25%",  margin:"10"}}>
        <Col xs={12} lg={4}>

            <button className='Serv_prov_button_appt'>Appointments</button>
        </Col>
        <Col xs={12} lg={4}>
        <button className='Serv_prov_button_bookings'>Bookings</button>
        </Col>
        <Col xs={12} lg={4}>
        <button className='Serv_prov_button_Portfolio'>Portfolio</button>
        </Col>
    </Row>

    </div>

    </div>


    </>
  )
}
