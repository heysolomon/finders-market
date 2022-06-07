import { Formik, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useContext, useState } from "react";
import { LoginContext } from "../../../Helper/Context";

import { Link } from "react-router-dom";
import AuthButton from "../../../components/UI/Button/AuthButton";
import { TextField } from "../../../components/UI/FormInput/TextField";
const User = ({ showLogin }) => {
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

  // Create account
  const [success, setSuccess] = useState(false);

  // Signing in process
  const { signingIn, setSigningIn } = useContext(LoginContext);

  // Login error Message
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  // reqister
  const register = async (values) => {
    try {
      setSigningIn(true);
      const user = await axios.post(
        "https://morning-headland-70594.herokuapp.com/auth/register",
        { ...values }
      );

      console.log(user)
      setError(false);
      setErrorMessage(null);
      setSuccess(true);
      setTimeout(() => {
        showLogin();
        setSigningIn(false);
      }, 5000);

    } catch (err) {
      setSigningIn(false);
      setSuccess(false);
      setErrorMessage(err.response.data.message);
      setError(true);
    }
  };

  return (
    <div className="flex justify-center fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-20 bg-[white] max-h-[90%] rounded-xl">
      <div className="w-[80%] m-[40px]">
        {/* error block */}
        {error && (
          <div className="w-full h-[35px] flex justify-center items-center ">
            <p className="text-red-700 text-xs">{errorMessage}</p>
          </div>
        )}

        {success && (
          <div className="w-full h-[50px] flex justify-center items-center ">
            <p className="text-[#81d324] text-xs text-center">
              You have successfully created an account. Please wait we are
              directing you to login...
            </p>
          </div>
        )}
        <div className="flex justify-between items-center mt-5">
          <h2 className="text-[#4f7f19] text-md ">Create account</h2>
          <p className="text-xs">
            Already have an account?
            <Link
              onClick={showLogin}
              className="text-[#4f7f19] text-xs hover:text-gray-800 "
              to=""
            >
              {" "}
              Sign in
            </Link>
          </p>
        </div>
        <AuthButton
          clas="text-slate-900 h-[40px]"
          icon="fa-brands fa-google mr-2"
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
              <div className="grid grid-cols-2 w-full">
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
                  signingIn && "bg-[#9fcf68] cursor-not-allowed"
                } `}
                type="submit"
                value="Submit"
                disable={signingIn}
                loggingIn={signingIn}
              />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default User;
