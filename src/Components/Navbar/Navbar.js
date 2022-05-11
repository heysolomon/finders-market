// import logo from '../../images'
import { Link } from "react-router-dom";
import logo from '../../Assets/Images/logo.png'
import { Button } from "../UI/Button/Button";
// import classes from './navbar.module.css'

const Navbar = () => {
    return(
        <nav className="w-full py-[15px]">
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

export default Navbar