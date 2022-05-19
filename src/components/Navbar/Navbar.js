import {  useCart } from "react-use-cart";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
// import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import logo from '../../Assets/Images/logo.png'
import { Button } from "../UI/Button/Button";

const Navbar = () => {

    const { totalUniqueItems } = useCart();
    return(
        <nav className="w-full py-[15px] bg-[#4F7F19] fixed z-50 top-0">
            <div className="flex justify-between items-center max-w-[1040px] px-[10px] my-0 mx-auto">
                <Link to="/" className="">
                    <img className="w-[50px]" src={logo} alt="" />
                </Link>
                <ul className="flex">
                    <li className="mr-3 text-white"><Link to="/" className="nav-item">Home</Link></li>
                    <li className="mr-3 text-white"><Link to="/logistics" className="nav-item">Logistics</Link></li>
                    <li className="mr-3 text-white"><Link to="/storage"className="nav-item">Storage</Link></li>
                    <li className="mr-3 text-white"><Link to="/contact" className="nav-item">Contact</Link></li>
                </ul>
                <div className="flex">
                    <Link to="/cart">
                        <Button>Cart{totalUniqueItems}</Button>
                    </Link>
                    <Link to="/sigin">
                        <Button background="#7DD145" color="white">Sign in</Button>
                    </Link>
                    <Link to="/signup">
                        <Button background="transparent" color="white">Sign up</Button>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
const mapStateToProps = state => {
    return {
        cart: state.shop.cart
    }
}

export default connect(mapStateToProps)(Navbar)