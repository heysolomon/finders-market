import Dashbtn from "./Dashbtn";
import dashlogo from "../Assets/Images/dashlogo.png";
import seedling from "../Assets/Images/seedling.png";
import truck from "../Assets/Images/truck.png";
import warehouse from "../Assets/Images/warehouse.png";
import bell from "../Assets/Images/bell.png";

const Dashboardsidebar = () => {
  const btn = [
    {
      id: 1,
      link: "/Dashboard",
      img: dashlogo,
      name: "Dashboard",
    },
    {
      id: 2,
      link: "/farmer",
      img: seedling,
      name: "Farmer",
    },
    {
      id: 3,
      link: "#",
      img: truck,
      name: "Logistic",
    },
    {
      id: 4,
      link: "/storage",
      img: warehouse,
      name: "Storage",
    },
    {
      id: 5,
      link: "/notification",
      img: bell,
      name: "Notifications",
    },
  ];

  return (
    <div className="p-5 h-screen pb-60 bg-[#bbef92] ">
      {btn.map((btn) => (
        <Dashbtn key={btn.id} link={btn.link} name={btn.name} img={btn.img} />
      ))}
    </div>
  );
};

export default Dashboardsidebar;
