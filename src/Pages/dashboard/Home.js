import farmImg from '../dashboard/dashimg/undraw_festivities_tvvj.svg'
import Chart from './dashboardConponents/Chart';
import LinChart from './dashboardConponents/LinChart';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion'






export const Home = () => {
  const user = useSelector((state) => state.userInfo);
  return (
    <div className="mt-[80px] ml-5  px-10">
      <div className="grid grid-cols-6 gap-4 grid-rols-2">
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
          className="col-span-3 shadow-xl bg-gray-50 row-span-2 flex items-center">

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

          }} className="col-span-3 shadow-xl bg-slate-50 row-span-3">
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
            <p className="text-[#4f7f19]">Edit</p>
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
          <div className=" border-b p-3 flex justify-between items-center">
            <p>ADDRESS BOOK</p>
            <p className="text-[#4f7f19]">Edit</p>
          </div>
          <div className="p-3">
            <p className=" my-2 text-[#4f7f19]">{user.fullname}</p>
            <p className="my-3">{user.address}</p>
            <p>+234 8147587636</p>
          </div>

        </motion.div>

        <motion.div
          initial={{
            x: -100,
            scale: .8
          }}
          animate={{
            x: 0,
            scale: 1

          }} className=" rounded border  col-span-3 shadow-xl bg-slate-50 row-span-2 mt-5">
          <div className=" border-b p-3 flex justify-between items-center">
            <p> FINDERS MARKET SERVICES</p>
          </div>
          <div className="p-3">
            <p className="my-3">An online marketplace that aims at eliminating middlemen. It also aims at providing both the farmers and consumers
              with transportation and storage facilities for their goods</p>

          </div>
        </motion.div>

      </div>
    </div>
  );
};


export default Home;