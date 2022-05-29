import { Form, Formik } from "formik";
import * as Yup from "yup";

import AuthButton from "../../UI/Button/AuthButton";
import { TextField } from "../../UI/FormInput/TextField";

export const StepTwo = (props) => {
  const handleSubmit = (values) => {
    props.next(values, true);
  };
  const validate = Yup.object({
    
    nameOnCard: Yup.string().required("You cannot leave the name field empty"),
    cardNumber: Yup.number()
      .positive("Must be a positive number")
      .integer()
      .required("Card number is required"),
    expiryDate: Yup.date().required("Required"),
    cvv: Yup.number()
      .positive("Must be a positive Number")
      .integer()
      .required("cvv is required"),
  });

  return (
    <div>
      <h2 className="text-md text-left mb-5">Payment Details</h2>
      <Formik
        initialValues={props.data}
          validationSchema={validate}
        onSubmit={handleSubmit}
      >
        {({ values }) => (
          <Form className="w-full">
            <div className="w-full border-[#4f7f19] border-[1px] rounded-lg min-h-[193px] bg-[#bbef92] p-[12px]">
              <div className="flex justify-between mb-[11px]">
                <div className="flex items-center">
                  <i class="fa-solid fa-circle-check mr-[11px] text-[#4f7f19]"></i>
                  <p className="text-sm text-[#4f7f19]">Pay with credit card</p>
                </div>
                <div className="flex justify-end items-center text-[#4f7f19]">
                  <i class="fa-brands fa-cc-visa fa-xl mr-[9px]"></i>
                  <i class="fa-brands fa-cc-stripe fa-xl mr-[9px]"></i>
                  <i class="fa-brands fa-cc-mastercard fa-xl mr-[9px]"></i>
                </div>
              </div>
              <div className="flex justify-between mb-[22px]">
                <TextField
                  name="nameOnCard"
                  label="Name on Card"
                  placeholder="Mark Luca"
                  width=" h-[34px] w-[75%] text-left"
                  type="text"
                  newClass="bg-[white] border-[#4f7f19] border-[1px] "
                  labelClass="text-[#4f7f19] text-xs"
                />
                <TextField
                  name="expiryDate"
                  label="Expiry"
                  placeholder="Mark Luca"
                  width=" h-[34px] w-[25%] text-left"
                  type="date"
                  newClass="bg-[white] border-[#4f7f19] border-[1px] "
                  labelClass="text-[#4f7f19] text-xs"
                />
              </div>
              <div className="flex justify-between my-[40px]">
                <TextField
                  name="cardNumber"
                  label="Card Number"
                  width=" h-[34px] w-[75%] text-left "
                  type="text"
                  newClass="bg-[white] border-[#4f7f19] border-[1px] "
                  labelClass="text-[#4f7f19] text-xs"
                />
                <TextField
                  name="cvv"
                  label="CVV"
                  width=" h-[34px] w-[25%] text-left"
                  type="password"
                  newClass="bg-[white] border-[#4f7f19] border-[1px] "
                  labelClass="text-[#4f7f19] text-xs"
                />
              </div>
            </div>
            <div className="flex mt-[11px] items-center">
              <i class="fa-solid fa-lock fa-sm mr-[11px] text-gray-500"></i>
              <p className="text-xs text-gray-500">
                We protect your payment information using encryption to provide
                bank-level security.
              </p>
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
