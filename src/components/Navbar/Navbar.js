import { useCart } from "react-use-cart";
// import { useEffect, useState } from "react";
// import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "../UI/Button/Button";
import logo from "../../Assets/Images/finderslogo.png";
import bar from "../../Assets/Images/barm.png";
import { FaUser } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = ({ showInfo }) => {
  const { userInfo } = useSelector((state) => state);
  const { totalUniqueItems } = useCart();
  const [mobileNav, setMobileNav] = useState(false);
  const ShowBar = () => {
    setMobileNav(!mobileNav)
  }

  return (
    <div className=" ">
      <nav className="sm:hidden flex justify-between 
      w-full items-center bg-[#4F7F19] fixed z-10 top-0 pr-5">
        <img className="w-40" src={logo} alt="" />
        <div className=" flex items-center">
          {userInfo && userInfo.profilePhoto ? (
            <Link to="/dashboard">
              <div className="w-10 h-10 rounded-full cursor-pointer">
                <img
                  src={userInfo.profilePhoto}
                  alt="profile-img"
                  className="rounded-full cursor-pointer w-full h-full object-cover"
                />
              </div>
            </Link>
          ) : userInfo ? (
            <Link to="/dashboard">
              <FaUser className="text-2xl cursor-pointer text-white" />
            </Link>
          ) : (
            <Link to="">
              <Button onClick={showInfo} background="#7DD145" color="white">
                Sign up
              </Button>
            </Link>
          )}
          <img onClick={ShowBar} className="w-7 " src={bar} alt="" />
        </div>
      </nav>

      {
        mobileNav &&
        <div>
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 1 }}
              exit={{
                opacity: 1
              }}
              animate={{
                right: 0,
                position: "fixed",
                backgroundColor: "#4F7F19",
                width: '70%',
                top: 0
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                
              }}
              className=" sm:hidden h-screen z-30">
              <div className=" flex flex-col justify-center items-center  mt-10 z-40">
                <Link onClick={ShowBar} className=" p-4 my-4" to="/" >
                  Home
                </Link>

                <Link onClick={ShowBar} className=" p-4 my-4" to="/logistics-page" >
                  Logistics
                </Link>

                <Link onClick={ShowBar} className=" p-4 my-4" to="/storage-page" >
                  Storage
                </Link>

                <Link onClick={ShowBar} className=" p-4 my-4" to="/contact" >
                  Contact
                </Link>
              </div>

            </motion.div>
            </AnimatePresence>
          <div onClick={ShowBar} className=" fixed z-20 bg-black/60 blur-sm w-full h-screen top-0 right-0 sm:hidden"></div>
        </div>

      }

      {/* */}
      <div className=" fixed  bottom-0  z-20  bg-[#4F7F19]  shadow-lg w-full sm:hidden">
        <div className=" flex justify-center p-2 ">
      <Link  to="/cart">
              <Button>
                {/* <i class="fa-solid fa-cart-shopping text-white fa-xl hover:text-gray-200 bg-op"></i> */}
                <AiOutlineShoppingCart className="text-2xl" />
                <span className="relative z-20 bg-red-600 rounded-[100%] text-[10px] p-[2px] text-white flex items-center justify-center w-5 ml-[-5px] mt-[-16px]">
                  {totalUniqueItems}
                </span>
              </Button>
            </Link>
            </div>
      </div>

      <nav className="w-full hidden sm:flex  bg-[#4F7F19] fixed z-10 top-0 ">
        <div className="flex justify-between items-center max-w-[1040px] px-[10px] my-0 mx-auto w-full">
          <Link to="/" className="">
            <img className="w-[200px]" src={logo} alt="" />
          </Link>
          <ul className="flex">
            <li className="mr-3 text-white">
              <Link to="/" className="nav-item">
                Home
              </Link>
            </li>
            <li className="mr-3 text-white">
              <Link to="/logistics-page" className="nav-item">
                Logistics
              </Link>
            </li>
            <li className="mr-3 text-white">
              <Link to="/storage-page" className="nav-item">
                Storage
              </Link>
            </li>
            <li className="mr-3 text-white">
              <Link to="/contact" className="nav-item">
                Contact
              </Link>
            </li>
          </ul>
          <div className="flex items-center">
            <Link to="/cart">
              <Button>
                {/* <i class="fa-solid fa-cart-shopping text-white fa-xl hover:text-gray-200 bg-op"></i> */}
                <AiOutlineShoppingCart className="text-2xl" />
                <span className="relative z-20 bg-red-600 rounded-[100%] text-[10px] p-[2px] text-white flex items-center justify-center w-5 ml-[-5px] mt-[-16px]">
                  {totalUniqueItems}
                </span>
              </Button>
            </Link>
            {userInfo && userInfo.profilePhoto ? (
              <Link to="/dashboard">
                <div className="w-10 h-10 rounded-full cursor-pointer">
                  <img
                    src={userInfo.profilePhoto}
                    alt="profile-img"
                    className="rounded-full cursor-pointer w-full h-full object-cover"
                  />
                </div>
              </Link>
            ) : userInfo ? (
              <Link to="/dashboard">
                <FaUser className="text-2xl cursor-pointer text-white" />
              </Link>
            ) : (
              <Link to="">
                <Button onClick={showInfo} background="#7DD145" color="white">
                  Sign up
                </Button>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};
// const mapStateToProps = (state) => {
//   return {
//     cart: state.shop.cart,
//   };
// };

// export default connect(mapStateToProps)(Navbar);
export default Navbar;
