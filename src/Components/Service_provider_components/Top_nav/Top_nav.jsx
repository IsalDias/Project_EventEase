import React, { useState } from 'react';
import './top_nav.css';
import Appoint_Tble from '../Appointments_table/Appoint_Tble'

function Buttontabs() {
  const [activeButton, setActiveButton] = useState('button-1'); // Initialize the active button state

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId); // Update the active button when a button is clicked
  };

  return (
    <div className="first_section_buttontabs">
      <div className="button-container">
        <button
          className={`button ${activeButton === 'button-1' ? 'active' : ''}`}
          onClick={() => handleButtonClick('button-1')}
        >
          New Appointments
        </button>
        <button
          className={`button ${activeButton === 'button-2' ? 'active' : ''}`}
          onClick={() => handleButtonClick('button-2')}
        >
          Suggested Appointments
        </button>
        <button
          className={`button ${activeButton === 'button-3' ? 'active' : ''}`}
          onClick={() => handleButtonClick('button-3')}
        >
          Confirmed Appointments
        </button>
        <button
          className={`button ${activeButton === 'button-4' ? 'active' : ''}`}
          onClick={() => handleButtonClick('button-4')}
        >
          Canceled Appointments
        </button>
        <button
          className={`button ${activeButton === 'button-5' ? 'active' : ''}`}
          onClick={() => handleButtonClick('button-5')}
        >
          Past Appointments
        </button>
      </div>

      {/* Render the relevant component based on the active button */}
      {activeButton === 'button-1' ? <NewAppointmentsComponent /> : null}
      {activeButton === 'button-2' ? <SuggestedAppointmentsComponent /> : null}
      {activeButton === 'button-3' ? <ConfirmedAppointmentsComponent /> : null}
      {activeButton === 'button-4' ? <CanceledAppointmentsComponent /> : null}
      {activeButton === 'button-5' ? <PastAppointmentsComponent /> : null}
    </div>
  );
}

// Define the components for each button
function NewAppointmentsComponent() {
  return (
    <div className="content">
      <Appoint_Tble/>
    </div>
  );
}

function SuggestedAppointmentsComponent() {
  return (
    <div className="content">
      Suggested Appointments Component
    </div>
  );
}

function ConfirmedAppointmentsComponent() {
  return (
    <div className="content">
      Confirmed Appointments Component
    </div>
  );
}

function CanceledAppointmentsComponent() {
  return (
    <div className="content">
      Canceled Appointments Component
    </div>
  );
}

function PastAppointmentsComponent() {
  return (
    <div className="content">
      Past Appointments Component
    </div>
  );
}

export default Buttontabs;
