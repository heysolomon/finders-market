import { Formik, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  loginStart,
  loginSuccess,
  loginFailure,
} from "../../../redux/userSlice";
import { Link, useNavigate } from "react-router-dom";
import AuthButton from "../../../components/UI/Button/AuthButton";
import { TextField } from "../../../components/UI/FormInput/TextField";
import Fixed from "../../../components/Navbar/Fixed";

const User = ({ showLogin, modal }) => {
  const inputs = [
    {
      id: 1,
      label: "Full Name",
      name: "fullname",
      type: "text",
      placeholder: "Peter",
    },
    {
      id: 2,
      label: "Last Name",
      name: "lastName",
      type: "text",
      placeholder: "Adamson",
    },
    {
      id: 3,
      label: "Address",
      name: "address",
      type: "text",
      placeholder: "Enter your home address",
    },
    {
      id: 4,
      label: "Phone Number",
      name: "phone_number",
      type: "text",
      placeholder: "09068433658",
    },
    {
      id: 5,
      label: "State",
      name: "state",
      type: "text",
      placeholder: "Abuja, NG",
    },
    {
      id: 6,
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "example@mail.com",
    },
    {
      id: 7,
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "Enter your password",
    },
    {
      id: 8,
      label: "Confirm Password",
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
    },
  ];
  const validate = Yup.object({
    fullname: Yup.string()
      .min(3, "Must be 3 characters or more")
      .required("Required"),
    // lastName: Yup.string()
    //   .min(3, "Must be 3 characters or more")
    //   .required("Required"),
    address: Yup.string()
      // .max(30, "Must be 30 characters or less")
      .required("Required"),
    phone_number: Yup.number()
      .positive("Must be a positive number")
      .integer()
      // .moreThan(11, "Must be 11 characters or more")
      // .lessThan(11, "Must be 11 characters or more")
      .required("Required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be atleast 8 characters long")
      .required("Password is required")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*)[A-Za-z\d]{8,}$/,
        `Must Contain 8 Characters, One Uppercase, One Lowercase,
        One Number and one special case Character [@$!%*#?&-_]`
      ),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password must match")
      .required("Confirm Password is required"),
    privacy: Yup.boolean()
      .isTrue()
      .oneOf([true], "The terms and conditions must be accepted."),
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userInfo, loggingIn, error: isError } = useSelector((state) => state);

  // Signing in process

  // Login error Message
  const [message, setMessage] = useState("");

  // reqister
  const register = async (values) => {
    dispatch(loginStart());
    try {
      const user = await axios.post(
        "https://morning-headland-70594.herokuapp.com/auth/register",
        { ...values }
      );
      setMessage(
        "You have successfully created an account. Please wait we are directing you to login..."
      );
      dispatch(loginSuccess(user.data));
      setTimeout(() => {
        navigate("/dashboard");
      }, 3000);
    } catch (err) {
      setMessage(err.response.data.message);
      dispatch(loginFailure());
    }
  };

  // google register
  const googleRegister = async () => {
    try {
      const user = await axios.get(
        "https://morning-headland-70594.herokuapp.com/auth/google"
      );
      console.log(user);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="flex mb-12 sm:mb-0 justify-center sm:fixed sm:top-[50%] sm:left-[50%] sm:translate-x-[-50%] sm:translate-y-[-50%] z-20 bg-[white] max-h-[90%] rounded-xl">
      <div className="w-[80%] m-[40px]">
        {/* error block */}
        {isError && (
          <div className="w-full h-[35px] flex justify-center items-center ">
            <p className="text-red-700 text-xs">{message}</p>
          </div>
        )}

        {userInfo && (
          <div className="w-full h-[50px] flex justify-center items-center ">
            <p className="text-[#81d324] text-xs text-center">{message}</p>
          </div>
        )}
        <div className="flex flex-col sm:flex-row sm:justify-between items-center mt-5">
          <h2 className="text-[#4f7f19] text-md mr-5 sm:mr-0">Create account</h2>
          <p className="text-xs">
            Already have an account?
            <Link
              onClick={modal ? showLogin : undefined}
              className="text-[#4f7f19] text-xs hover:text-gray-800 "
              to={!modal ? "/login" : ""}
            >
              {" "}
              Sign in
            </Link>
          </p>
        </div>
        <AuthButton
          onClick={googleRegister}
          clas="text-slate-900 h-[40px]"
          icon={true}
          value="Sign up with Google"
        />

        <hr className="mt-4" />

        <Formik
          initialValues={{
            fullname: "",
            // lastName: "",
            address: "",
            phone_number: "",
            // state: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={validate}
          onSubmit={async (values) => {
            register(values);
          }}
        >
          {(formik) => (
            <Form className="my-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 w-full">
                {inputs.map((input) => (
                  <TextField
                    key={input.id}
                    name={input.name}
                    type={input.type}
                    label={input.label}
                    placeholder={input.placeholder}
                  />
                ))}
              </div>

              <AuthButton
                clas={`w-[60%] h-[40px] bg-[#4f7f19] ${
                  loggingIn && "bg-[#9fcf68] cursor-not-allowed"
                } `}
                type="submit"
                value="Submit"
                disable={loggingIn}
                loggingIn={loggingIn}
                icon={false}
              />
            </Form>
          )}
        </Formik>
      </div>
      <Fixed />
    </div>
  );
};

export default User;
