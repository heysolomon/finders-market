import { Link } from "react-router-dom";
import { motion } from 'framer-motion'
import { useState } from "react";

const AddressPage = () => {
    const [toggle, setToggle] = useState(false)
    const Click = () => {
        setToggle(!toggle)
    }


    const detail = [
        {
            id: 1,
            value: 'Canon',
            type: "text",
            label: "First Name"

        },
        {
            id: 2,
            value: 'Samson',
            type: "text",
            label: "Last Name"

        },
    ]

    return (
        <div className=" h-screen pt-[100px] ml-10 bg-white " >
            <motion.div
                initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: .5 }}
                className=" p-3 bg-white  border-b mb-5 flex justify-between ">
                <p>Address</p>
                <Link onClick={Click} className="  bg-[#4f7f19] hover:opacity-80 p-1 rounded" to=""  >Add New Address </Link>
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
                        <p className="text-[#bbd69c] hover:cursor-pointer">Edit</p>
                    </div>
                    <div className="p-3">
                        <p className=" my-2 text-[#4f7f19]">Canon Samson</p>
                        <p className="my-3">Bingham University Teaching Hospital 23 zaria bypass 930105 jos Zaria Road, Plateau</p>
                        <p>+234 8147587636</p>
                    </div>

                </motion.div>

            </div>
            {
                toggle &&
                <motion.div>
                    <motion.div  initial={{ x:500, y: -200, scale: 0}} animate={{ x:0, y: 0, scale:1}} 
                    transition={{ duration: .35}} className=" fixed  bg-white  z-50 top-10 w-[50%] left-0 mx-[25%] rounded-xl">
                       <p className=" mt-5 mx-5 text-xl font-bold">Add New Address</p>
                        <form className=" grid grid-cols-2 gap-4 p-5">
                            
                            {
                                detail.map((detail) => (
                                    <InPut {...detail} />
                                ))
                            }
                            <div className=" flex flex-col col-span-2">
                                <label>Delivery Address</label>
                                <input className=" border p-2 rounded mt-2  focus:text-gray-700" type="text" placeholder="" />
                            </div>
                            <div className=" flex flex-col col-span-2">
                                <label>Additional information</label>
                                <input className=" border p-2 rounded mt-2  focus:text-gray-700" type="text" placeholder="" />
                            </div>
                            <div className=" flex flex-col">
                                <label>Phone Number (optional)</label>
                                <div className=" flex items-center w-full ">
                                    <p className=" border p-2 rounded-l mt-2 w-[10%] border-r-0 ">+234</p>
                                    <input className=" border p-2 mt-2 w-[90%] border-l-0 rounded-r" type="tel" value="8147587636" />

                                </div>
                            </div>
                            <div className=" flex flex-col">
                                <label>Region</label>
                                <select className=" flex items-center w-full border p-2 focus:outline-none mt-2 rounded">
                                    <option>Please select</option>
                                    <option>abia</option>
                                    <option>adamawa</option>
                                </select>
                            </div>
                            <div className=" flex flex-col">
                                <label>City</label>
                                <select className=" flex items-center w-full border p-2 focus:outline-none rounded mt-2 ">
                                    <option>Please select</option>
                                    <option>abia</option>
                                    <option>adamawa</option>
                                </select>
                            </div>
                            <div className=" col-span-2 mt-4">
                                <Button onClick={Click} value="Save" />
                            </div>
                        </form>
                    </motion.div>
                    <div onClick={Click} className=" fixed bg-black/40 w-full h-screen  z-40 top-0 left-0">

                    </div>
                </motion.div>
            }
        </div >
    );
}


const InPut = ({ label, type, value }) => {
    return (
        <div className=" flex flex-col">
            <label>{label}</label>
            <input className=" border p-2 rounded mt-2  focus:text-gray-700" type={type} placeholder={value} />
        </div>
    );
}


const Button = ({ value, onClick }) => {
    return (
        <div >
            <button onClick={onClick} className=" bg-[#4f7f19] hover:opacity-80  flex justify-center text-[14px] text-white items-center text-md py-3 rounded-lg w-full 
             border-2 border-gray-300 placeholder-gray-600 shadow-md"> {value} </button>

        </div>
    );
}

export default AddressPage;