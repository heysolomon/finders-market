const AuthButton = (props) => {
    return (
      <div className="w-full flex justify-center">
        <button
          type={props.type}
          onClick={props.onClick}
          className={`mt-4 hover:opacity-80  flex justify-center text-sm text-white items-center text-md  px-3 py-4 rounded-lg w-full
              border-2 border-gray-300 placeholder-gray-600 shadow-md ${props.clas}`}
        >
        <i class={props.icon}></i>
          {props.value}
        </button>
      </div>
    );
  };
  
  export default AuthButton;
  