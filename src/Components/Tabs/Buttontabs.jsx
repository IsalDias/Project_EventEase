import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import './buttontabs.css';
import Event_BasicTable from '../../Components/Events_myevents'

function Buttontabs() {
  const [activeTab, setActiveTab] = useState('link-1'); // Initialize the active tab state

  const handleTabSelect = (eventKey) => {
    setActiveTab(eventKey); // Update the active tab when a tab is selected
  };

  return (
    <div className='first_section_buttontabs'>
      <Nav fill variant="tabs" defaultActiveKey="/link-1" activeKey={activeTab} onSelect={handleTabSelect}>
        <Nav.Item>
          <Nav.Link eventKey="link-1">My Events</Nav.Link>
        </Nav.Item> 
        <Nav.Item>
          <Nav.Link eventKey="link-2">Past Events</Nav.Link>
        </Nav.Item>     
      </Nav>

      {/* Render the relevant component based on the active tab */}
      {activeTab === 'link-1' ? <MyEventsComponent /> : null}
      {activeTab === 'link-2' ? <PastEventsComponent /> : null}
    </div>
  );
}

// Define the components for My Events and Past Events
function MyEventsComponent() {
  return <div style={{position:"relative" ,top:"4vh"}}>
    <Event_BasicTable/>
    </div>;
}

function PastEventsComponent() {
  return <div>Past Events Component</div>;
}

export default Buttontabs;
