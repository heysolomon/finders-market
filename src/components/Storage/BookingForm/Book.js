// import { Form, Formik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BusinessDetails } from "./Steps/BusinessDetails";
// import { PersonalDetails } from "./Steps/PersonalDetails";

export const Book = () => {
  const [data, setData] = useState({
   
    businessName: "",
    address: "",
    city: "",
    startDate: "",
    endDate: "",
    storageTerm: ""
  });

  let navigate = useNavigate()
  const navigateSuccess = () => {
    navigate("/storage-page/booking/success")
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
  // <PersonalDetails next={handleNextStep} data={data} />, 
  <BusinessDetails next={handleNextStep} prev={handlePrevStep} data={data} />
];

  return (
    <div className="w-full mt-[30px] mx-auto px-10 py-10 ">
      {steps[currentStep]}
    </div>
  );
};

