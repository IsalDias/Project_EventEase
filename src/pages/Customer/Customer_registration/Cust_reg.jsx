import React, { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import './cust_reg.css';

function Cust_reg() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    address: '',
    gender: '',
    birthday: '',
    nicNumber: '',
    occupation: '',
    password: '',
    reenterPassword: ''
  });

  const [formErrors, setFormErrors] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    nicNumber: '',
    reenterPassword: ''
  });

  const validateField = (name, value) => {
    let error = '';

    // Check if the field is empty
    if (!value) {
      error = 'This field is required.';
    } else {
      // Perform field-specific validation
      switch (name) {
        case 'email':
          // Validate email format
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(value)) {
            error = 'Invalid email format.';
          }
          break;
        case 'phoneNumber':
          // Validate phone number (Sri Lankan format: XXXXXXXXXX)
          const phoneRegex = /^[0-9]{10}$/;
          if (!phoneRegex.test(value)) {
            error = 'Invalid phone number format.';
          }
          break;
        case 'nicNumber':
          // Validate NIC number (Sri Lankan format: XXXXXXXXXXV)
          const nicRegex = /^[0-9]{9}[Vv]$/;
          if (!nicRegex.test(value)) {
            error = 'Invalid NIC number format.';
          }
          break;
        default:
          break;
      }
    }

    setFormErrors((prevState) => ({
      ...prevState,
      [name]: error
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));

    // Validate the current field
    validateField(name, value);

    // Check if the field is password or reenterPassword
    if (name === 'password' || name === 'reenterPassword') {
      // Validate if password and reenterPassword match
      const password = name === 'password' ? value : formData.password;
      const reenterPassword = name === 'reenterPassword' ? value : formData.reenterPassword;
      if (password === reenterPassword) {
        setFormErrors((prevState) => ({
          ...prevState,
          reenterPassword: ''
        }));
      } else {
        setFormErrors((prevState) => ({
          ...prevState,
          reenterPassword: 'Passwords do not match.'
        }));
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform overall form validation
    const isValid = Object.values(formErrors).every((error) => !error);

    if (isValid) {
      // Perform form submission or further processing here
      console.log('Form is valid. Submitting...');
    } else {
      console.log('Form contains errors. Please fix them.');
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-heading">Customer Registration Form</h2>

      <form onSubmit={handleSubmit}>
        <Row>
          <Col xs={12} lg={6}>
            <label>
              First Name:
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
              {formErrors.firstName && <span className="error">{formErrors.firstName}</span>}
            </label>
          </Col>

          <Col xs={12} lg={6}>
            <label>
              Last Name:
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
              {formErrors.lastName && <span className="error">{formErrors.lastName}</span>}
            </label>
          </Col>
        </Row>

        <Row>
          <Col xs={12} lg={12}>
            <label>
              Phone Number:
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
              {formErrors.phoneNumber && <span className="error">{formErrors.phoneNumber}</span>}
            </label>
          </Col>

          <Col xs={12} lg={12}>
            <label>
              E-mail:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {formErrors.email && <span className="error">{formErrors.email}</span>}
            </label>
          </Col>
        </Row>

        <Row>
          <Col xs={12} lg={12}>
            <label>
              Address:
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
              {formErrors.address && <span className="error">{formErrors.address}</span>}
            </label>
          </Col>
        </Row>

        <Row>
          <Col xs={12} lg={6}>
            <label>
              Gender:
              <br />
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData.gender === 'male'}
                  onChange={handleChange}
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === 'female'}
                  onChange={handleChange}
                />
                Female
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="other"
                  checked={formData.gender === 'other'}
                  onChange={handleChange}
                />
                Other
              </label>
              {formErrors.gender && <span className="error">{formErrors.gender}</span>}
            </label>
          </Col>

          <Col xs={12} lg={6}>
            <label style={{ padding: '10% 0%' }}>
              Birthday:
              <input
                type="date"
                name="birthday"
                value={formData.birthday}
                onChange={handleChange}
              />
              {formErrors.birthday && <span className="error">{formErrors.birthday}</span>}
            </label>
          </Col>
        </Row>

        <Row>
          <Col xs={12} lg={6}>
            <label>
              NIC Number:
              <input
                type="text"
                name="nicNumber"
                value={formData.nicNumber}
                onChange={handleChange}
              />
              {formErrors.nicNumber && <span className="error">{formErrors.nicNumber}</span>}
            </label>
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <label>
              Occupation:
              <input
                type="text"
                name="occupation"
                value={formData.occupation}
                onChange={handleChange}
              />
              {formErrors.occupation && <span className="error">{formErrors.occupation}</span>}
            </label>
          </Col>
        </Row>

        <br></br>
        <br></br>
        <hr style={{width:"auto", color:"white"}}></hr>

        <Row>
          <Col xs={12} lg={6}>
            <label>
              Username:
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
              {formErrors.username && <span className="error">{formErrors.username}</span>}
            </label>
          </Col>
        </Row>

<br></br>


        <Row>
          <Col xs={12} lg={6}>
            <label>
              Password:
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </label>
          </Col>

          <Col xs={12} lg={6}>
            <label>
              Re-enter Password:
              <input
                type="password"
                name="reenterPassword"
                value={formData.reenterPassword}
                onChange={handleChange}
              />
              {formErrors.reenterPassword && (
                <span className="error">{formErrors.reenterPassword}</span>
              )}
            </label>
          </Col>
        </Row>

        <Row style={{marginTop:"3%"}}>
          <Col xs={12} lg={12}>
          <span>
            <p style={{color:"white"}}>
            
          I have read and agreed to the Terms and Conditions and Privacy Policy.
            </p>
          </span>
          </Col>
        </Row>

        <Row>
        <button type="submit" style={{width:"10%"}}>submit</button>
        </Row>
        <br></br>
        <br></br>

        <Row>
          <Col style={{display:"flex"}}>
          <p style={{color:"white"}}>Already have an account?</p>
          
          <Button style={{backgroundColor:"red", borderColor:"red", margin:"0% 3%"}}> Login </Button>
          </Col>
          <Col> 
          
           </Col>
        </Row>



        
      </form>
    </div>
  );
}

export default Cust_reg;
