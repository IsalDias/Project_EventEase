import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import './navibar.css'
import eventease_logo from '../Assests/eventease_logo.png';
import Image from 'react-bootstrap/Image';

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect className = "collapseOnSelect" bg="dark" variant="dark" >
      <Container>
      <Navbar.Brand href="/">
         <Image src={eventease_logo} alt="EventEase Logo" />
      </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/services">Services</Nav.Link>
            <Nav.Link href="events">Events</Nav.Link>
            <Nav.Link href="aboutus">About Us</Nav.Link>
            <Nav.Link href="contactus">Contact Us</Nav.Link>

            <NavDropdown title="Customer Name" id="collasible-nav-dropdown">
              <NavDropdown.Item href="profile">Profile</NavDropdown.Item>

              <NavDropdown.Item href="appointments">
                Appointments{" "}
              </NavDropdown.Item>

              <NavDropdown.Item href="bookings">Bookings</NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item href="#action/3.4"> Log Out </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
