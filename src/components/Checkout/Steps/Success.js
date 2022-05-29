import { Link, useNavigate } from "react-router-dom";
import { useCart } from "react-use-cart";
import success from "../../../Assets/Images/congrate.png";
import AuthButton from "../../UI/Button/AuthButton";
export const Success = () => {
  const { totalUniqueItems, cartTotal } = useCart();

  let navigate = useNavigate();
  return (
    <div className="w-[50%] shadow-2xl rounded-3xl mt-[30px] mx-auto px-10 py-10 ">
      <div className="w-full flex justify-center flex-col">
        <img className="w-[120px] m-auto mb-[20px]" src={success} alt="" />
        <h2 className="mb-[8px]">Thanks a lot for putting up this order</h2>
        <p className="text-gray-500 text-xs">
          Your <span></span> has succesfully been placed. Youll find all the
          details about your order below, and we will send you a shipping
          confirmation email as soon as your order ships.
        </p>
        <br />
        <p className="text-gray-500 text-xs">
          Questions? Suggestions? Insightful show of thoughts?
        </p>
        <Link to="" className="text-slate-900 text-xs mb-[20px]">
          Shoot us an email
        </Link>
        <div className="w-full border-[1px] border-gray-500 rounded-lg h-[71px] p-[12px] flex flex-col">
          <div className="flex justify-between w-full">
            <p className="text-xs">Order Review</p>
            <p></p>
          </div>
          <div className="flex justify-between w-full h-full items-end">
            <p className="text-xs">{totalUniqueItems} items in cart</p>
            <p className="text-xs">&#8358; {cartTotal}</p>
          </div>
        </div>

        <AuthButton
          value="Back to Shop"
          onClick={() => navigate("/")}
          clas="w-full bg-[#4f7f19] h-[37px] justify-end border-0"
          type="button"
        />
      </div>
    </div>
  );
};
