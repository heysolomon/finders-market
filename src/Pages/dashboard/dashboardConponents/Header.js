import { Link } from "react-router-dom";
import profile from "../../../Assets/Images/profi.png";
import notification from "../../../Assets/Images/notifi.png";
import { useState } from "react";

const Header = (props) => {
  const [newnoti, setNewnoti] = useState(true);
  const Show = () => {
    setNewnoti(false);
  };
  return (
    <div>
      <header className="shadow-lg bg-white  items-center h-16 fixed z-40 right-0 w-[80%]">
        <div className="relative z-20 flex flex-col justify-center h-full px-3 mx-auto flex-center">
          <div className="relative items-center pl-1 flex w-full lg:max-w-68 sm:pr-2 sm:ml-0">
            <div className="container relative left-0 z-50 flex w-3/4 h-full">
              <div className="relative flex items-center w-full lg:w-64 h-full group">
                <div className="absolute z-50 items-center justify-center block w-auto h-10 p-3 pr-2 text-sm text-gray-500 uppercase cursor-pointer sm:hidden">
                </div>
                <input
                  type="text"
                  className="block w-full py-1.5 pl-10 pr-4 leading-normal rounded-2xl focus:border-transparent focus:outline-none ring-opacity-90 bg-gray-100  text-gray-400 aa-input"
                  placeholder="Search"
                />
                <span className="absolute right-0 hidden h-auto px-2 py-1 mr-2 text-xs text-gray-400 border border-gray-300 rounded-2xl md:block">
                  +
                </span>
              </div>
            </div>
            <div className="relative p-1 flex items-center justify-end w-1/4 ml-5 mr-4 sm:mr-0 sm:right-auto">
              <Link
                to="#"
                onClick={Show}
                className="block relative"
              >
                  <img src={notification} className=" w-7 mr-10" alt="" />
                  <div className={props.Notificationbar}>
                    {newnoti && (
                      <div>
                        <span className="bg-red-600 h-2 w-2 absolute top-[-5px] right-[40px] animate-ping text-red-600 rounded-xl px-1"></span>
                        <span className="bg-red-600 h-2 w-2 absolute top-[-5px] right-[40px]  text-red-600 rounded-xl px-1"></span>
                      </div>
                    )}
                  </div>
              </Link>

              <Link to="#" className="block relative">
                <img
                  alt="profil"
                  src={profile}
                  className="mx-auto object-cover rounded-full h-10 w-10 "
                />
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
