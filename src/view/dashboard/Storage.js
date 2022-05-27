// import Button from "../../components/Button";
import Dashboardcontent from "../../components/Dashboardcontent";
import Dashboardsidebar from "../../components/Dashboardsidebar";
import Dashboardtopbar from "../../components/Dashboardtopbar";

const Storage = () => {
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

          <div className="ml-[25%] mt-40">
            <Dashboardcontent />

            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Storage;
