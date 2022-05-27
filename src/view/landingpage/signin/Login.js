import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import AuthButton from "../../../components/UI/Button/AuthButton";
// import { Link } from "react-router-dom";

import { TextField } from "../../../components/UI/FormInput/TextField";

const Login = () => {
  const validate = Yup.object({
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be atleast 6 characters long")
      .required("Password is required"),
  });
  return (
    <div className="flex flex-col justify-center  items-center fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-20 bg-[white] max-h-[90%] rounded-xl p-10">
      <div className="flex justify-between w-full items-center mt-5">
        <h2 className="text-[#4f7f19] text-md ">Login</h2>
      </div>
      <AuthButton
        clas="text-slate-900 h-[40px]"
        icon="fa-brands fa-facebook-square mr-2"
        value="Sign in with Facebook"
      />

      <hr className="mt-4 w-full mb-8" />
      <div className="">
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={validate}
        >
          {(formik) => (
            <Form>
              <div>
                <TextField
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="example@mail.com"
                />
                <TextField
                  label="Password"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                />
                <p className="text-xs text-right  ">
                  <Link
                    className="text-[#4f7f19] text-xs hover:text-gray-800 underline-offset-1"
                    to=""
                  >
                    {" "}
                    Forgot Password?
                  </Link>
                </p>
              </div>
              <AuthButton
                clas=" h-[40px] bg-[#4f7f19]"
                type="submit"
                value="Submit"
              />
            </Form>
          )}
        </Formik>

        <p className="text-xs mt-3">
          Dont have an account?
          <Link className="text-[#4f7f19] text-xs hover:text-gray-800 " to="">
            {" "}
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
