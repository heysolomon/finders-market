// import { Link } from 'react-router-dom';
import profi from "../../Assets/Images/profi.png";
import Dashboardsidebar from "../Dashboardsidebar";
import Dashboardtopbar from "../Dashboardtopbar";
import InputWithLabel from "../InputWithLabel";
import Button from "../Button";

const Dashboard = () => {
  return (
    <div>
      <div className="">
        <div className="fixed z-10 bg-white w-full">
          <Dashboardtopbar />
        </div>
        <div className="flex ">
          <div className="fixed left-0 top-20 ">
            <Dashboardsidebar />
          </div>

          <div className="w-4/6 mt-[10%] ml-[25%] m-auto ">
            <div className="mt-10">
              <div className="flex items-center">
                <div className="mr-10">
                  <img src={profi} alt="" />
                </div>
                <div>
                  <p className="text-2xl">Tijani Bitrus</p>
                  <p className="text-[#4F7F19]">Change profile picture.</p>
                </div>
              </div>
              <form className="w-3/6">
                <div className="flex justify-between  w-full">
                  <div className="mr-10">
                    <InputWithLabel value="Tijani" label="First Name" />
                  </div>
                  <InputWithLabel value="Bitrus" label="Last Name" />
                </div>
                <InputWithLabel
                  label="Email Address"
                  value="ogatijanibitrus@gmail.com"
                />
                <InputWithLabel label="Phone Number" value="09012345689" />
                <Button value="Update Profile" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
