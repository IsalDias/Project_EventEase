import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./navibar.css";
import eventease_logo from "../Assests/eventease_logo.png";
import Image from "react-bootstrap/Image";

function CollapsibleExample() {
  return (
    <div style={{fontFamily:"Inter", fontWeight: "200px",fontSize: "120%"}}>
      <Navbar
        fixed="top"
        className="collapseOnSelect"
        bg="dark"
        variant="dark"
            expand="lg"
      >
        <Container fluid >
          <div>
            <Navbar.Brand href="/">
              <Image
                src={eventease_logo}
                alt="EventEase Logo"
                style={{ height: "auto", width: "60%", padding:"5px 3%" }}
              />
            </Navbar.Brand>
          </div>
          <div>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>
              <div className="button_navbar">
                <Nav style={{ gap: "1rem" }}>

                  <Nav.Link
                    id="each_button_navbar"
                    className="active-link"
                    href="/"
                  >
                    Home
                  </Nav.Link>

                  <Nav.Link id="each_button_navbar" href="/services">
                    Services
                  </Nav.Link>

                  <Nav.Link id="each_button_navbar" href="events">
                    Events
                  </Nav.Link>

                  <Nav.Link id="each_button_navbar" href="aboutus">
                    About Us
                  </Nav.Link>
                  
                  <Nav.Link id="each_button_navbar" href="contactus">
                    Contact Us
                  </Nav.Link>

                  <NavDropdown
                    title=" Customer Name "
                    id="collasible-nav-dropdown"
                    className="right_corner"
                  >
                    <NavDropdown.Item href="profile">Profile</NavDropdown.Item>

                    <NavDropdown.Item href="appointments">
                      Appointments{" "}
                    </NavDropdown.Item>

                    <NavDropdown.Item href="bookings">
                      Bookings
                    </NavDropdown.Item>
                    <NavDropdown.Divider />

                    <NavDropdown.Item href="#action/3.4">
                      {" "}
                      Log Out{" "}
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </div>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

export default CollapsibleExample;


// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import "bootstrap/dist/css/bootstrap.min.css";

// function CollapsibleExample() {
//   return (
//     <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
//       <Container>
//         <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="#features">Features</Nav.Link>
//             <Nav.Link href="#pricing">Pricing</Nav.Link>
//             <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action/3.4">
//                 Separated link
//               </NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//           <Nav>
//             <Nav.Link href="#deets">More deets</Nav.Link>
//             <Nav.Link eventKey={2} href="#memes">
//               Dank memes
//             </Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default CollapsibleExample;
