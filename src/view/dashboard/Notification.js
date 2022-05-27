import Dashboardsidebar from "../../components/Dashboardsidebar";
import Dashboardtopbar from "../../components/Dashboardtopbar";
import "./scroll.css";

const Notification = () => {
  const noti = [
    {
      id: 1,
      message: "Sadiq Daba has ordered for five bags of corn. ",
      pame: "ore description goes here and it can be as long as this...",
      data: "4/4/2022",
      unreadstate: "Unread",
    },
    {
      id: 2,
      message: "Sadiq Daba has ordered for five bags of corn. ",
      pame: "ore description goes here and it can be as long as this...",
      data: "4/4/2022",
      readstate: "read",
    },
    {
      id: 3,
      message: "Sadiq Daba has ordered for five bags of corn. ",
      pame: "ore description goes here and it can be as long as this...",
      data: "4/4/2022",
      unreadstate: "Unread",
    },
    {
      id: 4,
      message: "Sadiq Daba has ordered for five bags of corn. ",
      pame: "ore description goes here and it can be as long as this...",
      data: "4/4/2022",
      readstate: "read",
    },
    {
      id: 4,
      message: "Sadiq Daba has ordered for five bags of corn. ",
      pame: "ore description goes here and it can be as long as this...",
      data: "4/4/2022",
      readstate: "read",
    },
    {
      id: 4,
      message: "Sadiq Daba has ordered for five bags of corn. ",
      pame: "ore description goes here and it can be as long as this...",
      data: "4/4/2022",
      readstate: "read",
    },
  ];

  return (
    <div className="">
      <div className="fixed z-10 bg-white w-full">
        <Dashboardtopbar />
      </div>
      <div className="flex ">
        <div className="fixed left-0 top-20 ">
          <Dashboardsidebar />
        </div>

        <div className="mt-[10%] ml-[25%] w-4/6 mt-20 m-auto">
          <label className="text-2xl">Notifications</label>
          <div className="scroll-dg">
            <div className="scroll-div">
              {noti.map((noti) => (
                <div
                  key={noti.id}
                  className="flex  items-center justify-between bg-[#F5F0F0] rounded p-4  my-5"
                >
                  <div>
                    <p>{noti.message}</p>
                    <p>{noti.pame}</p>
                  </div>
                  <div>
                    <p className="text-green-700 text-lg">{noti.readstate}</p>
                    <p className="text-red-700 text-lg">{noti.unreadstate}</p>
                    <p className="text-xm">{noti.data}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
