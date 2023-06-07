import React from 'react';
import Ann_reg_back from '../Ann_Register/Assests/Ann_reg_back.png';
import './ann_register.css';
import { Button } from '@mui/material';
import { Row, Col, Container } from 'react-bootstrap';

export default function Ann_Register() {
  return (
    <div style={{overflowX: 'hidden'}}>
    <div
    style={{ backgroundImage: `url(${Ann_reg_back})`, 
    display: "flex",
    height: "98vh",
    backgroundColor: "rgb(0, 0, 0)",
    backgroundPosition: "center",
    width: "100%" ,
    position: "fixed",
    zIndex: "-10",
    }}></div>

    <div className='Ann_reg_first'>


        <Row>
          <Col style={{margin:"3% 4% 0%"}}>
        <p className='ann_login_text'>Already have an Account ?</p>
        </Col>
        <Col style={{position:"relative", top:"58px", right:"680px"}}>
        <Button variant='contained' style={{backgroundColor:"red"}} > Login </Button>
          </Col>
        </Row>

        <Row>
          <Col xs={12} lg={6} >
            <div className='ann_reg_button_1'>
              <Button variant="outlined" href='/register/customer_register' className='ann_button_cust'> <span>Register as a <br /> <b> Customer </b> </span> </Button>
            </div>
          </Col>
          <Col xs={12} lg={6}>
            <div className='ann_reg_button_2'>
              <Button variant="outlined" href='/serviceprovider_Registration' className='ann_button_provider'> <span>Register as a <br /> <b> Service provider </b> </span> </Button>
            </div>
          </Col>
        </Row>

      
    <Row>
      <Col xs={12} lg={12} style={{margin:"9.5% 0% 0% 0%"}} >
    <span>
      <p className='Ann_reg_footer'>"Welcome to Eventease, the premier platform connecting
        customers with top-rated service providers for all their event planning needs! Whether you're organizing a wedding,<br /> birthday party, corporate event, or
        any other special occasion, our easy-to-use platform lets you browse and
        book from a curated selection of vendors who are experts in their field."</p>
    </span>
    </Col>
    </Row>

    </div>
    </div>

  );
}
