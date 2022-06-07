import { Outlet } from "react-router-dom";
import Menus from "../dashboardConponents/Menus";

const FarmerPage = () => {
  return (
    <div className="mt-[80px]">
      <div className="w-[80%] m-auto">
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
