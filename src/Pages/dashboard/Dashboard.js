import Header from "./dashboardConponents/Header";
import Sidebar from "./dashboardConponents/SideBar";
import styles from "./dashboard.module.css";
// import naira from "../../Assets/Images/nigeria-naira-currency-symbol.png";
// import down from "../../Assets/Images/down-.png";
import { Outlet } from "react-router-dom";
const Dashboard = () => {
  return (
    <div>
      <div className="bg-gray-100  h-screen overflow-hidden relative">
        <div className={styles.dashboard}>
          <div className="h-screen hidden lg:block shadow-lg w-full">
            <Sidebar />
          </div>
          <div className="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
            <Header />
            <div className="overflow-auto h-screen pb-24 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
