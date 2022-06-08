import { useCart } from "react-use-cart";
// import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "../UI/Button/Button";
import logo from '../../Assets/Images/finderslogo.png'

const Navbar = ({ showInfo }) => {
  const { totalUniqueItems } = useCart();
  return (
    <nav className="w-full  bg-[#4F7F19] fixed z-10 top-0">
      <div className="flex justify-between items-center max-w-[1040px] px-[10px] my-0 mx-auto">
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
              <i class="fa-solid fa-cart-shopping text-white fa-xl hover:text-gray-200 bg-op"></i>
              <span className="relative z-20 bg-red-600 rounded-[100%] text-[10px] p-[2px] text-white flex items-center justify-center w-5 ml-[-5px] mt-[-16px]">
                {totalUniqueItems}
              </span>
            </Button>
          </Link>
          <Link to="">
            <Button onClick={showInfo} background="#7DD145" color="white">
              Sign up
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Navbar);
