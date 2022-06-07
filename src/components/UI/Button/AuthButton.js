import { SpinnerCircular } from "spinners-react";

const AuthButton = (props) => {
  return (
    <div className="w-full flex justify-center">
      <button
        type={props.type}
        onClick={props.onClick}
        className={`mt-4 hover:opacity-80  flex justify-center text-sm text-white items-center text-md  px-3 py-4 rounded-lg w-full
              border-2 border-gray-300 placeholder-gray-600 shadow-md ${props.clas}`}
        disabled={props.disable}
      >
        <i class={props.icon}></i>
        {props.loggingIn ? (
          <div className="w-full flex justify-center items-center">
            <SpinnerCircular color="#fff" className="mr-2" thickness={250} size={20} />
            Please wait...
          </div>
        ) : (
          props.value
        )}
      </button>
    </div>
  );
};

export default AuthButton;
