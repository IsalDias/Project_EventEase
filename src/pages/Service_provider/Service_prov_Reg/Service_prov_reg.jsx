import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import './service_prov_reg.css';

export const Service_prov_reg = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    contactNumbers: [''],
    address: '',
    city: '',
    serviceCategory: '',
    website: '',
    registrationId: '',
    registrationDocument: null,
    password: '',
    confirmPassword: '',
    agreedToTerms: false,
  });

  const [contactNumberCount, setContactNumberCount] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleContactNumberChange = (index, value) => {
    setFormData((prevData) => {
      const newContactNumbers = [...prevData.contactNumbers];
      newContactNumbers[index] = value;
      return {
        ...prevData,
        contactNumbers: newContactNumbers,
      };
    });
  };

  const handleRegistrationDocumentChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      registrationDocument: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  const addContactNumber = () => {
    setFormData((prevData) => ({
      ...prevData,
      contactNumbers: [...prevData.contactNumbers, ''],
    }));
    setContactNumberCount((prevCount) => prevCount + 1);
  };

  return (
    <div style={{ overflowX: 'hidden'}} className='Serv_Prov_form-container'>
       
      <h2 className="form-heading">Service Provider Registration</h2>
      
      <form onSubmit={handleSubmit}>
        <Row>
         
            <label>
              Company Name:
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
              />
            </label>
          
        </Row>
        <Row>
          
            <label>
              E-mail:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </label>
         
        </Row>

        {formData.contactNumbers.map((number, index) => (
          <Row key={index}>
            <Col xs={12} lg={6}>
              <label>
                {index === 0 ? 'Contact Number:' : `Contact Number ${index + 1}:`}
                <input
                  type="text"
                  name="contactNumbers"
                  value={number}
                  onChange={(e) => handleContactNumberChange(index, e.target.value)}
                />
              </label>
            </Col>
            <Col xs={12} lg={6} style={{padding:"4.5% 4% 0%"}}>
            {contactNumberCount < 2 && (
              <button type="button" onClick={addContactNumber} className='addcontact_button'>
                Add Contact Number
              </button>
            )}
          </Col>
          </Row>
        ))}


        <Row>
          <Col xs={12} lg={6}>
            <label>
              Address:
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
            </label>
          </Col>
          <Col xs={12} lg={6}>
            <label>
              City:
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
              />
            </label>
          </Col>

        </Row>

        <Row>
          
        </Row>

        <Row style={{ padding: "3% 0%" }}>
        <label>
            Service Category:
            <select
            name="serviceCategory"
            value={formData.serviceCategory}
            onChange={handleChange}
            style={{ width: "200px", margin:"0% 2%" }} // Adjust the width as per your requirements
            >
            <option value="">Select</option>
            <option value="category1">Category 1</option>
            <option value="category2">Category 2</option>
            <option value="category3">Category 3</option>
            </select>
        </label>
</Row>

        <Row>

            <label>
              Web Site:
              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={handleChange}
              />
            </label>

        </Row>

        <Row>

            <label>
              Registration ID:
              <input
                type="text"
                name="registrationId"
                value={formData.registrationId}
                onChange={handleChange}
              />
            </label>

        </Row>

        <Row>
          <Col xs={12} lg={6}>
            <label>
              Registration Document:
              <input
                type="file"
                accept="image/png"
                name="registrationDocument"
                onChange={handleRegistrationDocumentChange}
              />
            </label>
          </Col>
        </Row>
        <br></br>
        <hr style={{width:"200%", backgroundColor:"white", height:"2px"}}></hr>
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
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </label>
          </Col>
        </Row>

        <Row style={{padding:"2% 0%"}}>
          
            <label>
              I have read and agreed to the Terms and Conditions and Privacy Policies:
              <input 
                type="checkbox"
                style={{margin:"0% 1% 0% "}}
                name="agreedToTerms"
                checked={formData.agreedToTerms}
                onChange={(e) =>
                  setFormData((prevData) => ({
                    ...prevData,
                    agreedToTerms: e.target.checked,
                  }))
                }
              />
            </label>
        </Row>

        <Row>
          <Col xs={12} lg={6}>
            <button type="submit">Submit</button>
          </Col>
        </Row>
      </form>
    </div>
  );
};
