import { Outlet, Link } from "react-router-dom";
import Menus from "../dashboardConponents/Menus";
import {motion } from 'framer-motion'


const FarmerPage = () => {
  return (
    <div className="">
        <motion.div
                initial={{
                    y: -100,
                }}
                animate={{
                    y: 0
                }}
                transition={{
                    duration: .5
                }}
                className=" p-3 bg-white sm:hidden  border-b mb-5 flex justify-between fixed w-[100%] m-auto pt-20 top-5">
                     <Link to="/dashboard" className=" sm:hidden">Back</Link>
                <p>Farmer</p>
               
            </motion.div>
      <div className="sm:w-[80%] pt-[150px] m-auto">
        <Menus
          link2="farmertrans"
          link3="farmerproduct"
          link4="farmernewproduct"
          fname="Products"
          sname="Add New Products"
        />
      </div>
      <Outlet />

      
    </div>
  );
};

export default FarmerPage;
