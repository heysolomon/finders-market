import { RiEBike2Fill } from "react-icons/ri";
import { AiFillCar } from "react-icons/ai";
import { FaShuttleVan, FaTruck } from "react-icons/fa";

export const Rides = () => {
  return (
    <div className="grid grid-cols-4 max-w-[1040px] mx-auto my-[30px]">
      <div className="shadow-2xl rounded-lg text-[#4F7F19] p-10 mx-[10px] flex justify-center item-center">
        <RiEBike2Fill className="text-5xl" />
      </div>
      <div className="shadow-2xl rounded-lg text-[#4F7F19] p-10 mx-[10px] flex justify-center item-center">
        <AiFillCar className="text-5xl" />
      </div>
      <div className="shadow-2xl rounded-lg text-[#4F7F19] p-10 mx-[10px] flex justify-center item-center">
        <FaShuttleVan className="text-5xl" />
      </div>
      <div className="shadow-2xl rounded-lg text-[#4F7F19] p-10 mx-[10px] flex justify-center item-center">
        <FaTruck className="text-5xl" />
      </div>
    </div>
  );
};
