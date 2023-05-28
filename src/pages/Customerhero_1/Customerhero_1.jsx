import React from 'react';
import './customerhero_1.css';
import Customer_hero1 from '../../Components/Assests/Customer_hero1.png';
import Button from '@mui/material/Button';

export default function Customerhero_1() {
  return (
    <div>
      <div className='cust_hero_first' style={{ backgroundImage: `url(${Customer_hero1})` }}>
        <Button variant="contained" href='/services' className='services_button_left' style={{ backgroundColor: "rgb(2, 179, 55)", fontSize: "1vw", width: "7%" }}>
          Services
        </Button>

        <Button variant="contained" href='/events' className='services_button_right' style={{ backgroundColor: "rgb(2, 179, 55)", fontSize: "1vw", width: "7%" }}>
          Events
        </Button>

        <h1 className='welcome'>WELCOME</h1>
        <p className='underwelcome'>To the easiest way to plan your events with Eventease!</p>
        <p className='other_text_bottom'>
          <em className='creating'>CREATING</em> your dream event,
          <br />
          One detail at a time.
        </p>
      </div>
    </div>
  );
}
