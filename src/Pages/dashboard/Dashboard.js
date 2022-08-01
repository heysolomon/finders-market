import Header from "./dashboardConponents/Header";
import Sidebar from "./dashboardConponents/SideBar";
import styles from "./dashboard.module.css";
import { Outlet } from "react-router-dom";
const Dashboard = () => {
  return (
    <div>
      <div className="bg-gray-100  h-screen overflow-hidden relative">
        <div className={styles.dashboard}>
          <div className="h-screen  shadow-lg w-full">
            <Sidebar />
          </div>
          <div className="flex flex-col w-full pl-0 ">
            <Header />
            <div className="overflow-auto h-screen pb-24 pt-2 pr-2 pl-2  ">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
