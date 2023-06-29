import * as Yup from "yup";
const RegisterValidationSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  // last_name: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid email").required("**Please add an @"),
  password: Yup.string()
    .min(8, "*Password must have at least 8 characters")
    .max(15, "*Password can't be longer than 15 characters")
    .required("*Password is required"),
  password_again: Yup.string()
    .min(8, "*Password 2 must have at least 8 characters")
    .max(15, "*Password 2 can't be longer than 15 characters")
    .required("*Password 2 is required"),
});
export default RegisterValidationSchema;
