import { Link, NavLink } from "react-router-dom";
import { motion } from 'framer-motion'
import Button from "../../../components/Button";
import back from '../../../Assets/Images/arrow-left.png'


const AddAddress = () => {
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
        <div className="  pt-[100px] ml-10 bg-white " >
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
                className=" p-3 bg-white  border-b mb-5 flex  fixed top-0 w-[77%] pt-20  items-center">
                <Link to="/dashboard/address"  >
                    <img className="w-5 mr-5" src={back} alt=" " />
                </Link>
                <p>Add a New Address</p>
            </motion.div>

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
                    <Button value="Save" />
                </div>
            </form>


        </div>
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


export default AddAddress;