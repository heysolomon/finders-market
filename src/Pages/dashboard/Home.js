import farmImg from '../dashboard/dashimg/undraw_festivities_tvvj.svg'
import Chart from './dashboardConponents/Chart';
import LinChart from './dashboardConponents/LinChart';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion'
import ServiceSetUp from './dashboardroutes/ServiceSetUp';
import { useState } from 'react';
import crow from "./dashimg/crow.png"
import { useCart } from "react-use-cart";

import home1 from "../../Assets/Images/home1.png";
import home2 from "../../Assets/Images/home2.png";
import home3 from "../../Assets/Images/home3.png";
import { AiOutlineShoppingCart } from "react-icons/ai";

import dash from "../../Assets/Images/dashlogo.png";
import truck from "../../Assets/Images/truck.png";
import farmer from "../../Assets/Images/seedling.png";
import storage from "../../Assets/Images/warehouse.png";






export const Home = () => {
  const user = useSelector((state) => state.userInfo);
  const [toggleS, setToggleS] = useState(false)
  const Show = () => {
    setToggleS(!toggleS)
  }


  return (
    <div className=''>
      <div className="mt-[80px] ml-5  sm:px-10 relative hidden sm:block">
        <div className="grid grid-cols-2 sm:grid-cols-6 gap-4 grid-rols-2">
          <motion.div
            initial={{
              y: -200,
              scale: .5
            }}
            animate={{
              y: 0,
              scale: 1
            }}
            transition={{
              delay: 1
            }}
            className="col-span-2 sm:col-span-3 shadow-xl bg-gray-50 row-span-2 flex items-center">

            <img className='w-[30%] ' src={farmImg} alt="" />

            <motion.div
            >
              <h1 className='text-xl font-semibold'>Hello {user.fullname}</h1>
              <p>Welcome to Your Dashboard</p>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{
              x: 100,
            }}
            animate={{
              x: 0,

            }} className="col-span-2 sm:col-span-3 shadow-xl bg-slate-50 row-span-3">
            <LinChart />
          </motion.div>

          <motion.div
            initial={{
              x: -100,
            }}
            animate={{
              x: 0,

            }} className=" rounded border col-span-3 shadow-xl bg-slate-50 row-span-2">
            <div className=" border-b p-3 flex justify-between items-center">
              <p>ACCOUNT DETAILS</p>
            </div>
            <div className="p-3">
              <p className=" my-2 text-[#4f7f19]">{user.fullname}</p>
              <p className="my-3">{user.email}</p>
              <p>+234 8147587636</p>
            </div>
            <Link to="/dashboard/changepassword"  >
              <p className="text-[#4f7f19] p2 rounded p-3">Change Password</p>
            </Link>
          </motion.div>
          <motion.div
            initial={{
              y: -50,
            }}
            animate={{
              y: 0,

            }} className="col-span-3 shadow-xl bg-slate-50 row-span-2">
            <Chart />
          </motion.div>

          <motion.div
            initial={{
              x: 100,
              scale: .8
            }}
            animate={{
              x: 0,
              scale: 1

            }} className=" rounded border col-span-3 shadow-xl bg-slate-50 row-span-2">
            <Link to="/dashboard/address" className='text-black'>
              <div className=" border-b p-3 flex justify-between items-center">
                <p>ADDRESS BOOK</p>
              </div>
              <div className="p-3">
                <p className=" my-2 text-[#4f7f19]">{user.fullname}</p>
                <p className="my-3">{user.address}</p>
                <p>+234 8147587636</p>
              </div>
            </Link>
          </motion.div>

          <motion.div
            initial={{
              x: -100,
              scale: .8
            }}
            animate={{
              x: 0,
              scale: 1

            }} onClick={Show} className="hover:cursor-pointer rounded border border-black  col-span-3 shadow-xl bg-green-100 row-span-2 mt-5">
            <div className=" border-b p-3 flex justify-between items-center border-black ">
              <p> FINDERS MARKET SERVICES</p>
            </div>
            <div className="p-3">
              <p className="my-3 ">An online marketplace that aims at eliminating middlemen. It also aims at providing both the farmers and consumers
                with transportation and storage facilities for their goods</p>
              <div className=" flex items-center  border border-black  justify-center rounded">
                <img className=' w-10 mr-5' src={crow} alt="" />
                <p>Become a Service Provider</p>
              </div>
            </div>

          </motion.div>
          {toggleS && <div>
            <motion.div onClick={Show} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .35 }} className=' fixed top-0 w-full bg-black/40 left-0 z-40 h-screen'></motion.div>

            <ServiceSetUp onClickL={Show} onClinkF={Show} onClinkS={Show} />

          </div>}


        </div>
      </div>


<Mobile />


    </div>
  );
};

const Mobile = () => {

  const user = useSelector((state) => state.userInfo);
  const { totalUniqueItems } = useCart();
  const links = [

    {
      id: 1,
      to: "/dashboard",
      icon: dash,
      name: "Dashboard",
    },
    {
      id: 2,
      to: "/dashboard",
      icon: dash,
      name: "Analyics",
    },
    {
      id: 2,
      to: "/dashboard/farmer/farmertrans",
      icon: farmer,
      name: "Farmer",
    },
    {
      id: 3,
      to: "/dashboard/logistic/transaction",
      icon: truck,
      name: "logistic",
    },
    {
      id: 4,
      to: "/dashboard/storage",
      icon: storage,
      name: "Storage",
    },
  ];

  const defaultacc = [
    {
      id: 1,
      to: "/dashboard/orders",
      name: "Orders",
    },
    {
      id: 2,
      to: "/dashboard/details",
      name: "Details",
    },
    {
      id: 3,
      to: "/dashboard/address",
      name: "Address Book",
    },
    {
      id: 4,
      to: "/dashboard/changepassword",
      name: "Change Password",
    },

  ];
  return (
    <div className='sm:hidden'>
      <div className='  pt-[80px] px-5'>
        <div className='p-2 border-b-2 my-2'>
          <p>Your Findes Market Account</p>
        </div>
        <motion.div
          initial={{
            y: -200,
            scale: .5
          }}
          animate={{
            y: 0,
            scale: 1
          }}
          transition={{
            delay: 1
          }}
          className=" shadow-xl bg-gray-50 row-span-2 flex items-center">

          <img className='w-[30%] ' src={farmImg} alt="" />

          <motion.div
          >
            <h1 className='text-xl font-semibold'>Hello {user.fullname}</h1>
            <p>Welcome to Your Dashboard</p>
          </motion.div>
        </motion.div>
        <motion.div
                  initial={{
                    x: 200,
                    scale: .5
                  }}
                  animate={{
                    x: 0,
                    scale: 1
                  }}
                  transition={{
                    duration: .35
                  }} className=' mt-5'>
          {
            links.map((item) => (

              <Link key={item.id} to={item.to} className="m-0 p-0 " >
                <div className=' border-b  bg-white  p-3 my-2 flex items-center'>
                  <img className=' w-[24px] mr-5' src={item.icon} alt="" />
                  <p>{item.name}</p>
                </div>
              </Link>

            ))
          }
        </motion.div>
        <p className='mt-5'>Personal Infomation</p>
        <div className=' mt-5'>
         <motion.div
                   initial={{
                    x: -200,
                    scale: .5
                  }}
                  animate={{
                    x: 0,
                    scale: 1
                  }}
                  transition={{
                    duration: .35
                  }}>
         {
            defaultacc.map((item) => (

              <Link key={item.id} to={item.to} className="m-0 p-0 " >
                <div className=' border-b  bg-white  p-3 my-2'>
                  <p>{item.name}</p>
                </div>
              </Link>

            ))
          }
         </motion.div>

          <motion.div
            initial={{
              x: -100,
              scale: .8
            }}
            animate={{
              x: 0,
              scale: 1

            }} className="hover:cursor-pointer mb-[100px]  rounded border border-black  col-span-3 shadow-xl bg-green-100 row-span-2 mt-5">
            <div className=" border-b p-3 flex justify-between items-center border-black ">
              <p> FINDERS MARKET SERVICES</p>
            </div>
            <div className="p-3">
              <p className="my-3 ">An online marketplace that aims at eliminating middlemen. It also aims at providing both the farmers and consumers
                with transportation and storage facilities for their goods</p>
              <div className=" flex items-center  border border-black  justify-center rounded">
                <img className=' w-10 mr-5' src={crow} alt="" />
                <p>Become a Service Provider</p>
              </div>
            </div>

          </motion.div>


        </div>


      </div>

      <div className=" fixed  bottom-0  z-20  bg-white shadow-2xl  shadow-black rounded-t-xl
      flex items-center justify-between p-2 w-full ">

        <Link to="/" className=' flex flex-col justify-center items-center' >
          <img className="" src={home1} alt="" />
          <p className=' text-[12px]'>Home</p>
        </Link>
        <Link className="" to="/cart">
          <div className="text-black rounded-lg p-2 relative flex flex-col justify-center items-center  ">
            <AiOutlineShoppingCart className="text-2xl  " />
            <span className="  absolute z-20 bg-red-600 rounded-[100%] text-[10px]
               text-white flex items-center justify-center px-2 py-1 top-[0px] right-[0px]">
              {totalUniqueItems}

            </span>
            <p className=' text-[12px]'>Cart</p>
          </div>
        </Link>
        <Link to="/logistics-page" className=' flex flex-col justify-center items-center' >
          <img src={home2} alt="" />
          <p className=' text-[12px]'>Logistic</p>
        </Link>
        <Link to="/storage-page" className=' flex flex-col justify-center items-center'>
          <img src={home3} alt="" />
          <p className=' text-[12px]'>Storage</p>
        </Link>


      </div>
    </div>
  );
}




export default Home;