import { Form, Formik } from "formik";
import * as Yup from "yup";
import AuthButton from "../../../UI/Button/AuthButton";
import { TextField } from "../../../UI/FormInput/TextField";

export const BusinessDetails = (props) => {
  const handleSubmit = (values) => {
    props.next(values, true);
  };
  const validate = Yup.object({
    businessName: Yup.string(),
    address: Yup.string().required("Address is required"),
    city: Yup.string().required("Required"),
  });

  return (
    <div>
      <Formik
        initialValues={props.data}
        validationSchema={validate}
        onSubmit={handleSubmit}
      >
        {({ values }) => (
          <Form className="w-full">
            <h2 className="text-md text-left mb-5">Business Details</h2>
            <div className="mb-[40px]">
              <TextField
                name="businessName"
                width="w-full h-[34px] text-left"
                label="Business Name(If applicable)"
                type="text"
                placeholder=""
              />
            </div>
            <div className="grid grid-cols-2 mb-[11px]">
              <TextField
                name="address"
                label="Address"
                width="w-full text-left"
                type="text"
                placeholder=""
              />
              <TextField
                name="city"
                label="City"
                width="w-full text-left"
                type="text"
                placeholder=""
              />
            </div>
            <div className="grid grid-cols-2 mb-[11px]">
              <TextField
                name="startDate"
                label="Start Date"
                width="w-full text-left"
                type="date"
              />
              <TextField
                name="endDate"
                label="End Date"
                width="w-full text-left"
                type="date"
              />
            </div>
            <div className="flex justify-between w-full">
              <AuthButton
                clas="w-[175px] bg-[#4f7f19] h-[37px] justify-start"
                value="Back"
                type="button"
                onClick={() => props.prev(values)}
              />

              <AuthButton
                clas="w-[175px] bg-[#4f7f19] h-[37px] justify-end"
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
