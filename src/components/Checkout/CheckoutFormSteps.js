// import { Form, Formik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import AuthButton from "../UI/Button/AuthButton";
// import { TextField } from "../UI/FormInput/TextField";
import { StepOne } from "./Steps/StepOne";
import { StepTwo } from "./Steps/StepTwo";

export const CheckoutForm = () => {
  const [data, setData] = useState({
    firstName: "",
    secondName: "",
    email: "",
    streetAddress: "",
    state: "",
    city: "",
    zip: "",
    phoneNumber: "",
    billingAdress: false,
    createAccount: false,
    nameOnCard: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  let navigate = useNavigate()
  const navigateSuccess = () => {
    navigate("/checkout/success")
  }

  // current steps you're in
  const [currentStep, setCurrentStep] = useState(0);

  const makeRequest = (formData) => {
    // console.log("form submitted", formData)
  }
  const handleNextStep = (newData, final=false) => {
    setData(prev =>({...prev, ...newData}))

    if (final) {
      makeRequest(newData)
      navigateSuccess()
      return
    }
    setCurrentStep(prev => prev + 1)
  }

  const handlePrevStep = (newData) => {
    setData(prev =>({...prev, ...newData}))
    setCurrentStep(prev => prev - 1)
  }

  // set bring in the steps
  const steps = [
  <StepOne next={handleNextStep} data={data} />, 
  <StepTwo next={handleNextStep} prev={handlePrevStep} data={data} />
];

  return (
    <div className="w-[50%] shadow-2xl rounded-3xl mt-[30px] mx-auto px-10 py-10 ">
      {steps[currentStep]}
    </div>
  );
};

