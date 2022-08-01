import { useState } from "react";
import { Link } from "react-router-dom";

const Settings = () => {
    const sets = [
        {
            id:1,
            value: 'Enter anything here',
            label: 'The Label Tag'
        },
        {
            id:2,
            value: 'Enter anything here',
            label: 'The Label Tag'
        },
        {
            id:3,
            value: 'Enter anything here',
            label: 'The Label Tag'
        },
        {
            id:3,
            value: 'Enter anything here',
            label: 'The Label Tag'
        },
        {
            id:4,
            value: 'Enter anything here',
            label: 'The Label Tag'
        },
        {
            id:4,
            value: 'Enter anything here',
            label: 'The Label Tag'
        },
    ]
    return (    
        <div className="pt-[70px] ml-5  px-10 relative " >
            <div className=" grid grid-cols-10 gap-4  grid-rows-10">
                <div className=" shadow-xl  row-span-1  bg-white col-span-3">
                    <ProfilePic />
                </div>
                <Link to="/service" className=" col-span-7 grid-row-1  shadow-xl bg-white flex justify-center p-4 py-[10%]"> Become a Service Provider </Link>
                <div className=" col-span-7 row-span-2  shadow-xl p-5   bg-white ">
                    <label>General Settings</label>
                 <form className="grid grid-cols-2  p-5 gap-5">
                    {
                        sets.map((items) => (
                            <Input key={items.id} label={items.label} type="text"  placeholder={items.value}   onChange={() => {alert("onchange")}} />
                        ))
                    }
                    <button className=" bg-[#4f7f19] h-10  rounded p-1 text-white w-full ">Update</button>
                 </form>
                    
                  
                </div>
                <form action="" className=" pt-6 row-span-1 py-4  shadow-xl  bg-white col-span-3 p-3 ">
                    <label>Password Settings</label>
                    <Input label="Password" type="password"   placeholder="********" />
                    <p className=" text-right text-sm py-[5px]">Forgotten Password?</p>
                    <button className=" bg-[#4f7f19]  rounded p-1 my-2 text-white w-full ">Change Password</button>
                </form>
                <form action="" className=" pt-6 row-span-2 py-4  shadow-xl  bg-white col-span-3 p-3 ">
                    <label>Password Settings</label>
                    <Input label="Password" type="password"   placeholder="********" />
                    <Input label="Change Password" type="text"   placeholder="Change password" />
                    <p className=" text-right text-sm py-[5px]">Forgotten Password?</p>
                    <button className=" bg-[#4f7f19]  rounded p-1 my-2 text-white w-full ">Update</button>
                </form>

                <div className=" col-span-7 row-span-3 shadow-xl p-5 gap-5  bg-white ">
                    <p className=" text-center py-[10%]">You are not a Service Provider</p>
                </div>
                
            </div>
        </div>
    );
}

const ProfilePic = () => {

  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }
    return ( 
        <div className=" p-5 flex flex-col w-full items-center">
            <img className="w-20  rounded-full h-20 " src={file} alt="" />
            <div className=" w-full m-auto mt-1 relative">
                <input type="file" className=" absolute opacity-0" onChange={handleChange} />
                <p className=" text-center  p-1 rounded text-sm text-[#4f7f19]">Change profile picture</p>
            </div>
        </div>
     );
}

const Input = ({ type,  placeholder, label, value}) => {
    return (
        <div className="text-black my-1  flex flex-col">
            <label>{label}</label>
            <input className=" bg-gray-50 border-2 my-1 rounded p-1 focus:outline-none" value={value} type={type} placeholder={placeholder}  />
        </div>
      );
}
 


 
export default Settings;