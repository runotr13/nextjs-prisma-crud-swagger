import * as Yup from "yup";
const LoginValidationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("**Please add an @"),

});
export default LoginValidationSchema;
