import { Link, Outlet } from "react-router-dom";
import { motion } from 'framer-motion'

const Orders = () => {
    return (
        <div className=" py-10 pt-[100px] ml-10 bg-white " >
            <motion.div
                initial={{
                    y: -100,
                }}
                animate={{
                    y: 0
                }}
                transition={{
                    duration: .5
                }}
                className=" p-3 bg-white  border-b mb-5 flex justify-between fixed w-[77%] m-auto pt-20 top-5">
                <p>Orders</p>
                <div className=" flex items-center ">
                    <Link  to="/dashboard/orders" className=" p-2 border-b px-5 mx-2 text-black">Active Order</Link>
                    <Link to="/dashboard/orders/closeorder"  className=" text-black border-b p-2 px-5 mx-2">Close Orders</Link>
                </div>
            </motion.div>
           <div className=" mt-20">
           <Outlet />
           </div>
        </div>
    );
}

export default Orders;