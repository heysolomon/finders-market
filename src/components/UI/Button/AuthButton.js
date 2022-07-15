import { SpinnerCircular } from "spinners-react";
import { FcGoogle } from "react-icons/fc";
// import { useSelector, useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { loginSuccess } from "../../../redux/userSlice";
import jwt_decode from "jwt-decode";
import { useEffect, useState } from "react";

const AuthButton = (props) => {
  // const { userInfo } = useSelector((state) => state);
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  const client_id = process.env.REACT_APP_GOOGLE_CLIENT_ID;

  const [googleError, setGoogleError] = useState(false);

  useEffect(() => {
    const loadGoogleScript = async () => {
      try {
        /* global google */
        await google.accounts.id.initialize({
          client_id,
          callback: onSuccess,
        });
        google.accounts.id.renderButton(document.getElementById("googleBtn"), {
          type: "standard",
          size: "large",
          theme: "outline",
        });
      } catch (err) {
        setGoogleError(true);
      }
    };
    loadGoogleScript();
  }, [client_id]);

  const onSuccess = (res) => {
    // const {
    //   googleId,
    //   name: fullname,
    //   imageUrl: profilePhoto,
    //   email,
    // } = res.profileObj;
    // dispatch(
    //   loginSuccess({
    //     email,
    //     googleId,
    //     fullname,
    //     profilePhoto,
    //     token: res.tokenId,
    //   })
    // );
    // console.log(res);
    const decoded = jwt_decode(res.credential);
    console.log(decoded);
    // navigate("/dashboard");
  };

  return (
    <div className="w-full flex justify-center">
      {props.icon && googleError ? (
        <button
          disabled
          className="mt-4 hover:opacity-80  flex justify-center text-sm text-black items-center text-md  px-3 py-2 rounded-lg w-56 border-2 border-gray-300 placeholder-gray-600 shadow-md cursor-not-allowed"
        >
          <FcGoogle className="mr-2" />
          something went wrong...
        </button>
      ) : props.icon ? (
        <button
          id="googleBtn"
          type={props.type}
          className="mt-4 rounded-lg shadow-md border-1 border-gray-300"
        ></button>
      ) : (
        <button
          type={props.type}
          className={`mt-4 hover:opacity-80  flex justify-center text-sm text-white items-center text-md  px-3 py-4 rounded-lg w-full
              border-2 border-gray-300 placeholder-gray-600 shadow-md ${props.clas}`}
          disabled={props.disable}
        >
          {props.loggingIn ? (
            <div className="w-full flex justify-center items-center">
              <SpinnerCircular
                color="#fff"
                className="mr-2"
                thickness={250}
                size={20}
              />
              Please wait...
            </div>
          ) : (
            props.value
          )}
        </button>
      )}
    </div>
  );
};

export default AuthButton;
