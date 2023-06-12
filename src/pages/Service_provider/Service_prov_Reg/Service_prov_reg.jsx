import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './service_prov_reg.css';

export const Service_prov_reg = () => {
  const formik = useFormik({
    initialValues: {
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
    },
    validationSchema: Yup.object({
      companyName: Yup.string().required('Company Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      contactNumbers: Yup.array().of(
        Yup.string().required('Contact Number is required')
      ),
      address: Yup.string().required('Address is required'),
      city: Yup.string().required('City is required'),
      serviceCategory: Yup.string().required('Service Category is required'),
      website: Yup.string().required('Website is required'),
      registrationId: Yup.string().required('Registration ID is required'),
      registrationDocument: Yup.mixed().required('Registration Document is required'),
      password: Yup.string().required('Password is required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
      agreedToTerms: Yup.boolean()
        .oneOf([true], 'You must accept the Terms and Conditions and Privacy Policies'),
    }),
    onSubmit: (values) => {
      // Handle form submission here
      console.log(values);
    },
  });

  const addContactNumber = () => {
    formik.push('contactNumbers', '');
  };

  const handleContactNumberChange = (index, value) => {
    formik.setFieldValue(`contactNumbers[${index}]`, value);
  };

  return (
    <div style={{ overflowX: 'hidden'}} className='Serv_Prov_form-container'>
      <h2 className="form-heading">Service Provider Registration</h2>
      
      <form onSubmit={formik.handleSubmit}>
        <Row>
          <label>
            Company Name:
            <input
              type="text"
              name="companyName"
              value={formik.values.companyName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </label>
          {formik.touched.companyName && formik.errors.companyName && (
            <div className="error">{formik.errors.companyName}</div>
          )}
        </Row>
        <Row>
          <label>
            E-mail:
            <input
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </label>
          {formik.touched.email && formik.errors.email && (
            <div className="error">{formik.errors.email}</div>
          )}
        </Row>

        {formik.values.contactNumbers.map((number, index) => (
          <Row key={index}>
            <Col xs={12} lg={6}>
              <label>
                {index === 0 ? 'Contact Number:' : `Contact Number ${index + 1}:`}
                <input
                  type="text"
                  name={`contactNumbers[${index}]`}
                  value={number}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </label>
              {formik.touched.contactNumbers && formik.errors.contactNumbers && (
                <div className="error">{formik.errors.contactNumbers[index]}</div>
              )}
            </Col>
            <Col xs={12} lg={6} style={{padding:"4.5% 4% 0%"}}>
              {formik.values.contactNumbers.length < 2 && (
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
                value={formik.values.address}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </label>
            {formik.touched.address && formik.errors.address && (
              <div className="error">{formik.errors.address}</div>
            )}
          </Col>
          <Col xs={12} lg={6}>
            <label>
              City:
              <input
                type="text"
                name="city"
                value={formik.values.city}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </label>
            {formik.touched.city && formik.errors.city && (
              <div className="error">{formik.errors.city}</div>
            )}
          </Col>
        </Row>

        <Row style={{ padding: "3% 0%" }}>
          <label>
            Service Category:
            <select
              name="serviceCategory"
              value={formik.values.serviceCategory}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              style={{ width: "200px", margin:"0% 2%" }} // Adjust the width as per your requirements
            >
              <option value="">Select</option>
              <option value="category1">Category 1</option>
              <option value="category2">Category 2</option>
              <option value="category3">Category 3</option>
            </select>
          </label>
          {formik.touched.serviceCategory && formik.errors.serviceCategory && (
            <div className="error">{formik.errors.serviceCategory}</div>
          )}
        </Row>

        <Row>
          <label>
            Web Site:
            <input
              type="text"
              name="website"
              value={formik.values.website}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </label>
          {formik.touched.website && formik.errors.website && (
            <div className="error">{formik.errors.website}</div>
          )}
        </Row>

        <Row>
          <label>
            Registration ID:
            <input
              type="text"
              name="registrationId"
              value={formik.values.registrationId}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </label>
          {formik.touched.registrationId && formik.errors.registrationId && (
            <div className="error">{formik.errors.registrationId}</div>
          )}
        </Row>
        <br></br>
        <Row>
          <Col xs={12} lg={6}>
            <label>
              Registration Document:
              <input
                type="file"
                accept="image/png"
                name="registrationDocument"
                onChange={(e) =>
                  formik.setFieldValue('registrationDocument', e.target.files[0])
                }
                onBlur={formik.handleBlur}
              />
            </label>
            {formik.touched.registrationDocument && formik.errors.registrationDocument && (
              <div className="error">{formik.errors.registrationDocument}</div>
            )}
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
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </label>
            {formik.touched.password && formik.errors.password && (
              <div className="error">{formik.errors.password}</div>
            )}
          </Col>

          <Col xs={12} lg={6}>
            <label>
              Re-enter Password:
              <input
                type="password"
                name="confirmPassword"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </label>
            {formik.touched.confirmPassword && formik.errors.confirmPassword && (
              <div className="error">{formik.errors.confirmPassword}</div>
            )}
          </Col>
        </Row>

        <Row style={{padding:"2% 0%"}}>
          <label>
            I have read and agreed to the Terms and Conditions and Privacy Policies:
            <input 
              type="checkbox"
              style={{margin:"0% 1% 0% "}}
              name="agreedToTerms"
              checked={formik.values.agreedToTerms}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </label>
          {formik.touched.agreedToTerms && formik.errors.agreedToTerms && (
            <div className="error">{formik.errors.agreedToTerms}</div>
          )}
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
