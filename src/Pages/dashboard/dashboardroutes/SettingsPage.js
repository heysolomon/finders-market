import { useState } from "react";
import SetInfo from "../dashboardConponents/Setinfo";
import SettingsInfo from "../dashboardConponents/SettingsInfo";
import profi from "../../../Assets/Images/profi.png";
import cross from "../dashimg/icon-cross.svg";
import farm from "../dashimg/farmer1.jpg";
import ProfilePic from "../dashboardConponents/ProfilePic";

const SettingsPage = () => {
  const name = "john";
  const lastname = "Samson";

  const [toggle, setToggle] = useState(false);

  const [edit, setEdit] = useState(true);
  const [reEdit, setReEdit] = useState(false);

  const Show = () => {
    setToggle((toggle) => !toggle);
    setEdit(!edit);
    setReEdit(reEdit);
  };

  const [firstname, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [phonenum, setPhoneNum] = useState("");
  const [staten, setStaten] = useState("");
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setToggle((toggle) => !toggle);

    const date = { firstname, email, lastName, address, phonenum, staten };
    if (firstname && email && lastName && address && phonenum && staten) {
      setList((ls) => [...ls, date]);

      setFirstName("");
      setLastName("");
      setAddress("");
      setPhoneNum("");
      setStaten("");
      setEmail("");
    }
  };

  return (
    <div className="">
      <div className="grid grid-cols-3 ml-[20%]  w-[60%] gap-2 p-5 m-10  ">
        <div className=" p-2 border-[10px]  shadow-xl">
          <img alt="" className="w-full" src={farm} />
          <div className="flex justify-center p-3">
            <p>Farmer</p>
          </div>
        </div>
        <div className=" p-2 border-[10px] shadow-xl">
          <img alt="" className="w-full" src={farm} />
          <div className="flex justify-center p-3">
            <p>Logistic</p>
          </div>
        </div>
        <div className=" p-2 border-[10px]    shadow-xl">
          <img alt="" className="w-full" src={farm} />
          <div className="flex justify-center p-3">
            <p>Storage</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 bg-white shadow-xl p-5 m-10  ">
        <div className=" shadow p-2 ">
          <div className="ml-[20%] mt-[20%]">
            <img alt="" className="w-50" src={profi} />
            <p className="ml-[-9%] text-xl">
              {name} {lastname}
            </p>
          </div>
          <div className="ml-[30%] mt-[20%]">
            <p className="text-[#4F7F29] ">Account</p>
          </div>
        </div>

        <div className="col-span-3  p-2 shadow">
          <p>Account Settings</p>

          {list.map((a) => (
            <div className="grid grid-cols-2 gap-x-5 px-5 ">
              <SettingsInfo label="First Name" value={a.firstname} />
              <SettingsInfo label="Last Name" value={a.lastname} />
              <SettingsInfo label="Address" value={a.address} />
              <SettingsInfo label="Phone Number" value={a.phonenum} />
              <SettingsInfo label="State" value={a.staten} />
              <SettingsInfo label="Email" value={a.email} />
            </div>
          ))}

          <div className="flex w-full p-5">
            {edit && (
              <button
                onClick={Show}
                className="p-2 hover:shadow-xl px-6 hover:bg-[#4F7F29] w-full py-3 rounded text-white bg-[#4F7F19] mx-5"
              >
                Edit
              </button>
            )}
            {reEdit && <p>you cant edit</p>}
          </div>
        </div>
      </div>

      {toggle && (
        <div className="  transition-opacity top-0 z-40 bg-black/30 fixed left-0 h-screen w-full">
          <div className="grid grid-cols-4 bg-white shadow-xl p-5 m-10 w-[75%] ml-[20%]   pt-[70px]">
            <div className=" shadow p-2 ">
              <div className="relative ml-[20%] mt-[20%]">
                <ProfilePic />
                <p className="ml-[-9%] text-xl">
                  {name} {lastname}
                </p>
              </div>
              <div className="ml-[30%] mt-[20%]">
                <p className="text-[#4F7F29] ">Account</p>
              </div>
            </div>

            <div className="col-span-3  p-2 shadow">
              <div className="flex justify-between">
                <p>Account Settings</p>
                <img
                  alt=""
                  onClick={Show}
                  src={cross}
                  className="p-2 bg-white hover:shadow-none shadow rounded border-2 mx-5"
                />
              </div>
              <div className="grid grid-cols-2 gap-x-5 px-5 ">
                <SetInfo
                  label="First Name"
                  type="text"
                  placeholder="First Name"
                  value={firstname}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <SetInfo
                  label="First Name"
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                <SetInfo
                  label="Address"
                  type="text"
                  placeholder="Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                <SetInfo
                  label="Phone Number"
                  type="text"
                  placeholder="Phone Number"
                  value={phonenum}
                  onChange={(e) => setPhoneNum(e.target.value)}
                />
                <SetInfo
                  label="State"
                  type="text"
                  placeholder="State"
                  value={staten}
                  onChange={(e) => setStaten(e.target.value)}
                />
                <SetInfo
                  label="Email"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="flex p-5">
                <button
                  onClick={handleSubmit}
                  className="p-2 hover:shadow-xl px-6 hover:bg-[#4F7F29] rounded text-white bg-[#4F7F19] mx-5"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SettingsPage;
