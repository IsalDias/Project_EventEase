import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './login.css';
import login_pht from '../../../Components/Assests/login_photos_design.png';
import eventease_logo from '../../../Components/Assests/eventease_logo.png';


const Login = () => {
  return (
    <Container fluid className='login_container'>

      <Row className='login_row' style={{width:"100%", padding:"0 0 0 "}}>

        <Col className='login_left_side'>

          
          
        <img src={login_pht} alt="img"className='login_img' />
        <img src={eventease_logo} className='logo' />

        </Col>
        <Col className='login_right_side'>
          <div style={{marginTop:"10vh"}}>
          login
          </div>
         
        </Col>

      </Row>
    </Container>
  );
};

export default Login;
