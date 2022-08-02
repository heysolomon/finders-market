import { Link, NavLink } from "react-router-dom";
import dash from "../../../Assets/Images/dashlogo.png";
import truck from "../../../Assets/Images/truck.png";
import farmer from "../../../Assets/Images/seedling.png";
import storage from "../../../Assets/Images/warehouse.png";
// import settings from "../../../Assets/Images/settings.png";
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

  const defaultacc = [
    {
      id: 1,
      to: "/dashboard/details",
      name: "Details",
    },
    {
      id: 2,
      to: "/dashboard/address",
      name: "Address Book",
    },
    {
      id: 3,
      to: "/dashboard/changepassword",
      name: "Change Password",
    },
    {
      id: 4,
      to: "/dashboard/settings",
      name: "Close Account",
    },

  ];
  return (
    <div className=" h-full bg-[#4f7f19] fixed z-10 w-[20%]">
      <Link to="/"><img src={logo} alt="" width="200" /></Link>
      <nav className="mt-0">
        <div className="">
          {
            links.map((links) => (
              <NavLink key={links.id} className=" 
              p-2 my-2 w-full hover:opacity-50 font-thin
            text-white flex items-center transition-colorsjustify-start " to={links.to}>
                <img src={links.icon} alt="" width="25" />
                <span className="ml-4 text-[14px] font-normal">{links.name}</span>
              </NavLink>
            ))
          }

        <div className=" border-t rounded-t-2xl ">
        {
            defaultacc.map((links) => (
              <NavLink key={links.id} className=" 
              p-2 my-2 w-full hover:opacity-50 font-thin
            text-white flex items-center transition-colorsjustify-start " to={links.to}>
                <span className="ml-4 text-[14px] font-normal">{links.name}</span>
              </NavLink>
            ))
          }
          <p className=" text-center w-full text-white mt-5 ">LOGOUT</p>
        </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
