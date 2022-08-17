import { Link } from "react-router-dom";
import car1 from "../../Assets/Images/car1.png";
import car2 from "../../Assets/Images/car2.png";
import car3 from "../../Assets/Images/car3.png";
import car4 from "../../Assets/Images/car4.png";
import arrow from "../../Assets/Images/arrow_right.svg";
const cars = [
  {
    id: 1,
    img: car1,
    link: "/",
    name: "Car",
    desc: "lorem",
  },
  {
    id: 2,
    img: car3,
    link: "/",
    name: "Car",
    desc: "lorem",
  },
  {
    id: 3,
    img: car2,
    link: "/",
    name: "Car",
    desc: "lorem",
  },
  {
    id: 4,
    img: car4,
    link: "/",
    name: "Car",
    desc: "lorem",
  },
];

export const Rides = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-[80px] gap-x-[100px] w-screen lg:max-w-[1040px] mx-auto my-[30px] my-[80px] px-10">
      {cars.map((car) => (
        <div className="" key={car.id}>
          <img src={car.img} className="w-[200px] h-[200px]" alt="" />
          <Link to={car.link}>
            <div className="w-[60%] lg:w-[70%] min-h-[100px] relative shadow-large z-[5] mt-[-150px] ml-[150px] bg-white p-[20px]">
              <h2 className="font-[600] text-[20px]">{car.name}</h2>
              <p className="font-[400] text-[12px] text-[#6F6969]">
                {car.desc}
              </p>
              <div className="flex bg-[#D9FF99] p-2 w-[80px]">
                <p className="mr-2">Find</p>
                <img src={arrow} className="w-[20px]" alt="" />
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};
