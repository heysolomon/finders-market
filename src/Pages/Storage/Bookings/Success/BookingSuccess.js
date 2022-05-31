import { Link, useNavigate } from "react-router-dom";
import AuthButton from "../../../../components/UI/Button/AuthButton";
import approved from "../../../../Assets/Images/approved.png";
import Navbar from "../../../../components/Navbar/Navbar";
export const BookingSuccess = () => {
  let navigate = useNavigate();
  return (
    <div className="">
      <Navbar />
      <div className="w-[50%] shadow-2xl rounded-3xl mt-[100px] m-auto px-10 py-10">
        <div className="w-full flex justify-center flex-col text-center">
          <img className="w-[150px] m-auto mb-[20px]" src={approved} alt="" />
          <h2 className="mb-[8px]">Thanks a lot for booking this facility</h2>
          <p className="text-gray-500 text-xs">
            Your <span>order</span> has succesfully been placed.
          </p>
          <br />
          <p className="text-gray-500 text-xs">
            Questions? Suggestions? Insightful show of thoughts?
          </p>
          <Link to="" className="text-slate-900 text-xs mb-[20px]">
            Shoot us an email
          </Link>

          <AuthButton
            value="Back to Home"
            onClick={() => navigate("/")}
            clas="w-full bg-[#4f7f19] h-[37px] justify-end border-0"
            type="button"
          />
        </div>
      </div>
    </div>
  );
};
