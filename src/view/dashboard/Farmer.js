import Button from "../../components/Button";
import Dashboardcontent from "../../components/Dashboardcontent";
import Dashboardsidebar from "../../components/Dashboardsidebar";
import Dashboardtopbar from "../../components/Dashboardtopbar";
import Dropdown from "../../components/Dropdown";
import InputWithLabel from "../../components/InputWithLabel";

const Farmer = () => {
  return (
    <div className="w-screen">
      <div className="fixed z-10 bg-white w-full">
        <Dashboardtopbar />
      </div>
      <div className="flex ">
        <div className="fixed left-0 top-20 ">
          <Dashboardsidebar />
        </div>

        <div className="ml-[25%] mt-40">
          <Dashboardcontent />

          <form className="mt-10">
            <div className="flex">
              <div className="mr-10 w-2/6">
                <Dropdown label="Categories" />
                <Dropdown label="Categories" />
                <InputWithLabel label="Price" placeholder="Price" />
                <Button value="Save" />
              </div>
              <div className="w-2/6">
                <InputWithLabel label="Product" />
                <InputWithLabel label="Tags" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Farmer;
