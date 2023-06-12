import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import "./cust_reg.css";
import { useFormik } from "formik";
import { basicSchema } from "../../../Schemas/Index";
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";


const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);
  await new Promise((resolve) => setTimeout(resolve, 500));
  actions.resetForm();
};

const Cust_reg = () => {
  const {values, errors,touched,isSubmitting ,handleBlur, handleChange, handleSubmit} = useFormik({
    initialValues: {
      email:"",
      password:"",
      reenterPassword:"",
      firstName:"",
      lastName:"",
      phoneNumber:"",
      address:"",
      birthday:"",
      nicNumber:"",
      occupation:"",
      agreeCheckbox:"",
      
      
    },
    validationSchema : basicSchema,
    onSubmit,
  });


  console.log(errors);

  return (
    <div className="form-container">
      <h2 className="form-heading">Customer Registration Form</h2>

      <form onSubmit={handleSubmit} autoComplete="off" >
        <div>
          

          
            <Row>
              <Col xs={12} lg={6}>
                <label>
                  First Name:
                  <input
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="text" name="firstName" />
                </label>
                {errors.firstName && touched.firstName && <p className="error"> {errors.firstName} </p> }
              </Col>

              <Col xs={12} lg={6}>
                <label>
                  Last Name:
                  <input 
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.lastName ? 'input-error' : ''}
                  type="text" name="lastName" />
                </label>
                {errors.lastName && touched.lastName && <p className="error"> {errors.lastName} </p> }
              </Col>
            </Row>

            <Row>
              <Col xs={12} lg={12}>
                <label>
                  Phone Number:
                  <input 
                  value={values.phoneNumber}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="text" name="phoneNumber" />
                </label>

                {errors.phoneNumber && touched.phoneNumber && <p className="error"> {errors.phoneNumber} </p> }
              </Col>

              <Col xs={12} lg={12}>
                <label>
                  E-mail:
                  <input 
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.email && touched.email ? 'input-error' : ''}
                  type="email" name="email" />
                </label>
                {errors.email && touched.email && <p className="error"> {errors.email} </p> }

              </Col>
            </Row>

            <Row>
              <Col xs={12} lg={12}>
                <label>
                  Address:
                  <input 
                  value={values.address}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="text" name="address" />
                </label>
                {errors.address && touched.address && <p className="error"> {errors.address} </p> }
              </Col>
            </Row>

            <Row>
              <Col xs={12} lg={6} >
              <FormControl  >
            <label > Gender: </label>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
              style={{ display: "flex", flexDirection: "row" }}
            >
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
          </FormControl>
              </Col>

              <Col xs={12} lg={6}>
                <label style={{ padding: "10% 0%" }}>
                  Birthday:
                  <input 
                  value={values.birthday}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="date" name="birthday" />
                   {errors.birthday && touched.birthday && <p className="error"> {errors.birthday} </p> }
                </label>
               
              </Col>
            </Row>

            <Row>
              <Col xs={12} lg={6}>
                <label>
                  NIC Number:
                  <input 
                  value={values.nicNumber}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="text" name="nicNumber" />
                </label>
                {errors.nicNumber && touched.nicNumber && <p className="error"> {errors.nicNumber} </p> }
              </Col>
            </Row>

            <Row>
              <Col xs={12}>
                <label>
                  Occupation:
                  <input 
                  value={values.occupation}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="text" name="occupation" />
                </label>
                {errors.occupation && touched.occupation && <p className="error"> {errors.occupation} </p> }
              </Col>
            </Row>

            <br></br>
            <br></br>
            <hr style={{ width: "auto", color: "white" }}></hr>


            <br></br>

            <Row>
              <Col xs={12} lg={6}>
                <label>
                  Password:
                  <input 
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.password && touched.password ? 'input-error' : ''}
                  type="password" name="password" />
                </label>
                {errors.password && touched.password && <p className="error"> {errors.password} </p> }
              </Col>

              <Col xs={12} lg={6}>
                <label>
                  Re-enter Password:
                  <input 
                  value={values.reenterPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.reenterPassword && touched.reenterPassword ? 'input-error' : ''}
                  type="password" name="reenterPassword" />
                </label>
                {errors.reenterPassword && touched.reenterPassword && <p className="error"> {errors.reenterPassword} </p> }
              </Col>
            </Row>

            <Row style={{ marginTop: "3%" }}>
              <Col xs={12} lg={12}>
                <span>
                  <label>
                    <input
                    value={values.agreeCheckbox}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.agreeCheckbox && touched.agreeCheckbox ? 'input-error' : ''}
                    type="checkbox" name="agreeCheckbox" />
                    <span style={{ color: "white", marginLeft: "10px" }}>
                      I have read and agreed to the Terms and Conditions and
                      Privacy Policy.
                    </span>
                    {errors.agreeCheckbox && touched.agreeCheckbox && <p className="error"> {errors.agreeCheckbox} </p> }
                  </label>
                </span>
              </Col>
            </Row>

            <br></br>

            <Row>
              <button
                type="submit"
                style={{
                  width: "25%",
                  backgroundColor: "silver",
                  marginLeft: "90%",
                }}
              >
                Register
              </button>
            </Row>
            <br></br>
            <br></br>

            <Row>
              <Col style={{ display: "flex" }}>
                <p style={{ color: "white" }}>Already have an account?</p>

                <Button disabled={isSubmitting}
                  style={{
                    backgroundColor: "red",
                    borderColor: "red",
                    margin: "0% 3%",
                  }}
                  href="/login"
                >
                  {" "}
                  Login{" "}
                </Button>
              </Col>
              <Col></Col>
            </Row>
          
        </div>
      </form>
    </div>
  );
};

export default Cust_reg;
