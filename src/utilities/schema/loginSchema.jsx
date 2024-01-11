import * as Yup from "yup";
const loginSchema = Yup.object({
  email: Yup.string().email().required("Please enter your email !"),
  password: Yup.string()
    .min(6, "invalid password mayur")
    .required("Please enter your password !"),
});
export default loginSchema;
