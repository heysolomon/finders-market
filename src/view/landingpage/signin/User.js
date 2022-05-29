import { Formik, Form } from "formik";
import * as Yup from "yup";

import { Link } from "react-router-dom";
import AuthButton from "../../../components/UI/Button/AuthButton";
import { TextField } from "../../../components/UI/FormInput/TextField";
const User = () => {
  const inputs = [
    {
      id: 1,
      label: "First Name",
      name: "firstName",
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
    firstName: Yup.string()
      .min(3, "Must be 3 characters or more")
      .required("Required"),
    lastName: Yup.string()
      .min(3, "Must be 3 characters or more")
      .required("Required"),
    address: Yup.string()
      .max(30, "Must be 30 characters or less")
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

  return (
    <div className="flex justify-center fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-20 bg-[white] max-h-[90%] rounded-xl">
      <div className="w-[80%] m-[40px]">
        <div className="flex justify-between items-center mt-5">
          <h2 className="text-[#4f7f19] text-md ">Create account</h2>
          <p className="text-xs">
            Already have an account?
            <Link
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
          icon="fa-brands fa-facebook-square mr-2"
          value="Sign up with Facebook"
        />

        <hr className="mt-4" />

        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            address: "",
            phone_number: "",
            state: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={validate}
          onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 500));
            alert(JSON.stringify(values, null, 2));
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
                clas="w-[60%] h-[40px] bg-[#4f7f19]"
                type="submit"
                value="Submit"
              />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default User;
