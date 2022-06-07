import { Outlet } from "react-router-dom";
import Menus from "../dashboardConponents/Menus";


const LogisticPage = () => {
  return (
    <div>
      <div className="w-[80.5%] mx-auto mt-[80px]">
        <Menus
          link2="transaction"
          link3="bookings"
          link4="logisticnewproduct"
          fname="Bookings"
          sname="Active Bookings"
        />
      </div>
      <Outlet />
    </div>
  );
};

export default LogisticPage;
