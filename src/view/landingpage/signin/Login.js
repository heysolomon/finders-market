import { Formik, Form } from "formik";
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import * as Yup from "yup";
import AuthButton from "../../../components/UI/Button/AuthButton";
import axios from "axios";
import { TextField } from "../../../components/UI/FormInput/TextField";
import { useSelector, useDispatch } from "react-redux";
import {
  loginStart,
  loginSuccess,
  loginFailure,
} from "../../../redux/userSlice";

const Login = ({ showInfo, modal }) => {
  const [message, setMessage] = useState("");
  const validate = Yup.object({
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be atleast 6 characters long")
      .required("Password is required"),
  });

  const dispatch = useDispatch();
  const { userInfo, loggingIn, error } = useSelector((state) => state);
  // redirecting
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from;

  // login
  const login = async (values) => {
    dispatch(loginStart());
    try {
      const user = await axios.post(
        "https://morning-headland-70594.herokuapp.com/auth/login",
        { ...values }
      );
      dispatch(loginSuccess(user.data));
      setMessage("Login success!");
      setTimeout(() => {
        navigate("/dashboard");
        if (from) navigate(from);
      }, 1000);
    } catch (err) {
      if (err) {
        dispatch(loginFailure());
        console.log(err);
        setMessage(err.response.data.message);
      }
    }
  };

  return (
    <div className="flex flex-col justify-center  items-center fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-20 bg-[white] max-h-[90%] rounded-xl p-10">
      {/* error block */}
      {error && !loggingIn ? (
        <div className="w-full h-[50px] flex justify-center items-center ">
          <p className="text-red-700 text-xs">{message}</p>
        </div>
      ) : (
        !error &&
        userInfo && (
          <div className="w-full h-[50px] flex justify-center items-center ">
            <p className="text-[#81d324] text-xs">{message}</p>
          </div>
        )
      )}
      <div className="flex justify-between w-full items-center mt-5">
        <h2 className="text-[#4f7f19] text-md ">Login</h2>
      </div>
      <AuthButton
        clas="text-slate-900 h-[40px]"
        icon="fa-brands fa-google mr-2"
        value="Sign in with Google"
      />

      <hr className="mt-4 w-full mb-8" />
      <div className="">
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={validate}
          onSubmit={async (values) => {
            login(values);
          }}
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
                clas={`h-[40px] bg-[#4f7f19] ${
                  loggingIn && "bg-[#9fcf68] cursor-not-allowed"
                }`}
                type="submit"
                value="Submit"
                disable={loggingIn}
                loggingIn={loggingIn}
              />
            </Form>
          )}
        </Formik>

        <p className="text-xs mt-3">
          Dont have an account?
          <Link
            onClick={modal ? showInfo : undefined}
            className="text-[#4f7f19] text-xs hover:text-gray-800 "
            to={!modal ? "/register" : ""}
          >
            {" "}
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
