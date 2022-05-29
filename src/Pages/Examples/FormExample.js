import React from "react";
import { TextField } from "../../components/UI/FormInput/TextField";

const FormExample = () => {
  return (
    <div className="grid grid-cols-2">
      <TextField
        width="w-full h-[34px]"
        label="First Name"
        type="text"
        placeholder="Max"
      />
      <TextField
        label="First Name"
        type="text"
        placeholder="Max"
        width="w-full h-[34px]"
      />
    </div>
  );
};

export default FormExample;
