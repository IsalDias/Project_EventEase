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
    <div>
      <Navbar
        fixed="top"
        collapseOnSelect
        className="collapseOnSelect"
        bg="dark"
        variant="dark"
      >
        <Container fluid style={{ padding: "0 3%" }}>
          <div>
            <Navbar.Brand href="/">
              <Image
                src={eventease_logo}
                alt="EventEase Logo"
                style={{ height: "auto", width: "60%", marginLeft: "1%" }}
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
                    title="Customer Name"
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
