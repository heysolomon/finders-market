import { Form, Formik } from "formik";
import AuthButton from "../../UI/Button/AuthButton";
import { TextField } from "../../UI/FormInput/TextField";
import * as Yup from "yup";

export const StepOne = (props) => {
  const handleSubmit = (values) => {
    props.next(values);
  };

  const validate = Yup.object({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    streetAddress: Yup.string().required("Required"),
    // state: Yup.string().required("Required"),
    // city: Yup.string().required("Required"),
    // zip: Yup.number().positive("Must be a positive number").integer(),
    // phoneNumber: Yup.number()
    //   .positive("Must be a positive number")
    //   .integer()
    //   .required("Required"),
    // billingAddress: Yup.boolean().isTrue(),
    // createAccount: Yup.boolean().isTrue(),
  });

  return (
    <div>
      <Formik
        initialValues={props.data}
          validationSchema={validate}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <Form className="w-full">
            <h2 className="text-md text-left mb-5">Billing Address</h2>
            <div className="grid grid-cols-2 mb-[40px]">
              <TextField
                name="firstName"
                width="w-full h-[34px] text-left"
                label="First Name"
                type="text"
                placeholder="Max"
              />
              <TextField
                name="lastName"
                label="Last Name"
                type="text"
                placeholder="Luca"
                width="w-full h-[34px] text-left"
              />
            </div>
            <div className="mb-[11px]">
              <TextField
                name="email"
                label="Email"
                width="w-full text-left"
                type="email"
                placeholder="max.luca@mail.com"
              />
            </div>
            <div className="mb-[11px]">
              <TextField
                name="streetAddress"
                label="Street Address"
                width="w-full text-left"
                type="text"
                placeholder=""
              />
            </div>
            <div className="">
              <AuthButton
                clas="w-[175px] bg-[#4f7f19] h-[37px]"
                value="Next"
                type="submit"
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
