import React from 'react';
import Ann_reg_back from '../Ann_Register/Assests/Ann_reg_back.png';
import './ann_register.css';
import { Button } from '@mui/material';
import { Row, Col, Container } from 'react-bootstrap';

export default function Ann_Register() {
  return (
    <div className='Ann_reg_first' style={{ backgroundImage: `url(${Ann_reg_back})`, marginTop: "4%" }}>

      <div style={{ position: "absolute", marginLeft: "3%", display: "flex" }}>
        <p className='ann_login_text'>Already have an Account ?</p>
        <Button variant='contained' className='ann_button_login'> Login </Button>
      </div>

    <span>
      <p className='Ann_reg_footer'>"Welcome to Eventease, the premier platform connecting
        customers with top-rated service providers for all their event planning needs! Whether you're organizing a wedding,<br /> birthday party, corporate event, or
        any other special occasion, our easy-to-use platform lets you browse and
        book from a curated selection of vendors who are experts in their field.</p>
    </span>

      <Container>
        <Row>
          <Col>
            <div className='ann_reg_button_1'>
              <Button variant="outlined" href='/customer_Registration' className='ann_button_cust'> <span>Register as a <br /> <b> Customer </b> </span> </Button>
            </div>
          </Col>
          <Col>
            <div className='ann_reg_button_2'>
              <Button variant="outlined" href='/serviceprovider_Registration' className='ann_button_provider'> <span>Register as a <br /> <b> Service provider </b> </span> </Button>
            </div>
          </Col>
        </Row>
      </Container>

    </div>
  );
}
