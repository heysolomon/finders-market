import { Link, NavLink } from "react-router-dom";
import dash from "../../../Assets/Images/dashlogo.png";
import truck from "../../../Assets/Images/truck.png";
import farmer from "../../../Assets/Images/seedling.png";
import storage from "../../../Assets/Images/warehouse.png";
import settings from "../../../Assets/Images/settings.png";
import logo from '../../../Assets/Images/finderslogo.png'


const Sidebar = (props) => {
  // const navLinkStyles = ({ isActive }) => {
  //   return {
  //     color: isActive ? "black" : "none",
  //   };
  // };
  const links = [
    {
      id: 1,
      to: "/dashboard",
      icon: dash,
      name: "Dashboard",
    },
    {
      id: 2,
      to: "/dashboard/farmer/farmertrans",
      icon: farmer,
      name: "Farmer",
    },
    {
      id: 3,
      to: "/dashboard/logistic/transaction",
      icon: truck,
      name: "logistic",
    },
    {
      id: 4,
      to: "/dashboard/storage",
      icon: storage,
      name: "Storage",
    },
  ];
  return (
    <div className=" h-full bg-[#4f7f19] fixed z-10 w-[20%]">
      <Link to="/"><img src={logo} alt="" /></Link>
      <nav className="mt-0">
        <div className=" ml-5 mt-0">
            {
            links.map((links) => (
              <NavLink key={links.id} className="w-full hover:opacity-50 font-thin  uppercase text-white flex items-center p-4 my-2 transition-colors duration-200 justify-start bg-gradient-to-r " to={links.to}>
                <img src={links.icon} alt="" width="40" />
                <span className="mx-4 text-sm font-normal">{links.name}</span>
              </NavLink>
            ))
            
            }
        </div>

        <NavLink className="w-full  ml-5 mt-14  hover:opacity-50 font-thin  uppercase text-white flex items-center px-4  transition-colors duration-200 justify-start bg-gradient-to-r " to="/dashboard/settings" >
          <img src={settings} alt="" width="40" />
          <span className="mx-4 text-sm font-normal">Settings</span>
        </NavLink>

        <NavLink className="w-full  ml-16   hover:opacity-50 font-thin  uppercase text-white px-4 transition-colors duration-200 justify-start bg-gradient-to-r " to="/" >
          <span className="mx-4 mt-10 text-xs ">Log Out</span>
        </NavLink>

      </nav>
    </div>
  );
};

export default Sidebar;
