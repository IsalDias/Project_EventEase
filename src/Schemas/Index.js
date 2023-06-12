import * as yup from 'yup';

const passwordRules = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
// Contains at least one lowercase letter.
// Contains at least one uppercase letter.
// Contains at least one digit.
// Contains at least one special character from the set [!@#$%^&*].
// Has a minimum length of 8 characters.s

const nicRules = /^(?:\d{9}|\d{2}[VvXx]\d{7}|\d{12})$/;

const phoneRules = /^(?:\+94|0)[1-9]\d{8}$/;

export const basicSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Required"),
  password: yup.string().min(8, "Password must be at least 8 characters long").matches(passwordRules, "Please create a stronger Password").required("Required"),
  reenterPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required("Required"),
  firstName: yup.string().required("Required"),
  lastName: yup.string().required("Required"),
  phoneNumber: yup.string().min(10, "Enter a valid Phone Number").matches(phoneRules, "Enter a valid Phone Number").required("Required"),
  address: yup.string().required("Required"),
  nicNumber: yup.string().min(12, "Enter a valid NIC number").matches(nicRules, "Enter a valid NIC number").required("Required"),
  occupation: yup.string().required("Required"),
  birthday: yup.string().required("Required"),
  agreeCheckbox: yup.boolean().oneOf([true], 'Must Accept Terms and Conditions').required("Required"),
});
