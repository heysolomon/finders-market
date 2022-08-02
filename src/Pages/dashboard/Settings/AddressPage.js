import { Link } from "react-router-dom";
import { motion } from 'framer-motion'

const AddressPage = () => {
    return (
        <div className=" h-screen pt-[100px] ml-10 bg-white " >
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
                className=" p-3 bg-white  border-b mb-5 flex justify-between ">
                <p>Address</p>
                <Link className="  bg-[#4f7f19] hover:opacity-80 p-1 rounded" to="/dashboard/addaddress"  >Add New Address </Link>
            </motion.div>
            <div className=" grid grid-cols-2 w-[95%] m-auto gap-4">
                <motion.div
                    initial={{
                        x: -100,
                        scale: .8
                    }}
                    animate={{
                        x: 0,
                        scale: 1

                    }} className=" rounded border shadow-lg">
                    <div className=" border-b p-3 flex justify-between items-center">
                        <p>SET AS DEFAULT</p>
                        <p className="text-[#4f7f19]">Edit</p>
                    </div>
                    <div className="p-3">
                        <p className=" my-2 text-[#4f7f19]">Canon Samson</p>
                        <p className="my-3">Bingham University Teaching Hospital 23 zaria bypass 930105 jos Zaria Road, Plateau</p>
                        <p>+234 8147587636</p>
                    </div>

                </motion.div>
                
            </div>

        </div>
    );
}

export default AddressPage;