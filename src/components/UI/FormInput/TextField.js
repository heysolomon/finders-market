import { useState } from "react";
import { ErrorMessage, useField } from "formik";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

export const TextField = ({
  width,
  type,
  newClass,
  labelClass,
  label,
  ...props
}) => {
  const [field, meta] = useField(props);

  const [passwordType, setPasswordType] = useState(type);

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };
  return (
    <div className={`flex flex-col mb-2 ${width}`}>
      <label className={`text-sm text-left ${labelClass}`} htmlFor={field.name}>
        {label}
      </label>
      <div
        className={`mt-1 mr-2 mb-0 flex justify-between items-center text-md  px-3 py-4 rounded-lg w-[full] 
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md
                focus:placeholder-gray-500 h-[40px] ${newClass} ${
          meta.touched && meta.error && "border-red-600"
        }`}
      >
        <input
          {...field}
          {...props}
          autoComplete="off"
          type={passwordType}
          className="w-full text-xs"
        />
        {type === "password" && props.name !== "cvv" && (
          <span onClick={togglePassword}>
            {passwordType === "password" ? (
              <AiOutlineEyeInvisible className="mr-1 cursor-pointer" />
            ) : (
              <AiOutlineEye className="mr-1 cursor-pointer" />
            )}
          </span>
        )}
      </div>

      <ErrorMessage
        className="text-red-600 text-xs mt-0"
        component="div"
        name={field.name}
      />
    </div>
  );
};
