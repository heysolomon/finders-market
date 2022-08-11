import Button from "../../../components/Button";
import { motion } from 'framer-motion'
import { Link } from "react-router-dom";



const ChangePassword = () => {
    const password = [
        {
            id: 1,
            label: "Current Password ",
            value: "*************"
        }

    ]
    return (
        <div className=" pt-[100px] sm:ml-10 bg-white  h-screen" >
            <motion.div
                initial={{
                    y: -100,
                }}
                animate={{
                    y: 0
                }}
                transition={{
                    duration: .5
                }} className=" p-3 bg-white flex justify-between border-b mb-5">
                    <Link to="/dashboard" className=" sm:hidden">Back</Link>
                <p>Change Password</p>
            </motion.div>
            <form className=" w-full max-w-[300px] sm:max-w-[500px] sm:w-[40%] m-auto">
                {
                    password.map((password) => (
                        <InPut {...password} />
                    ))
                }
                <motion.div
                    initial={{
                        y: -40,
                    }}
                    animate={{
                        y: 0
                    }}
                    transition={{
                        duration: .2,
                        delay: .1
                    }} className=" flex flex-col my-3">
                    <label>New Password</label>
                    <input className=" border p-2 rounded mt-2  focus:text-gray-700" type='password' />
                </motion.div>
                <motion.div
                    initial={{
                        y: -40,
                    }}
                    animate={{
                        y: 0
                    }}
                    transition={{
                        duration: .2,
                        delay: .2
                    }} className=" flex flex-col ">
                    <label>Retype New Password</label>
                    <input className=" border p-2 rounded mt-2  focus:text-gray-700" type='password' />
                </motion.div>
                <div className=" mt-4">
                    <Button value="SUBMIT" />
                </div>
            </form>
        </div>
    );
}

const InPut = ({ label, type, value }) => {
    return (
        <motion.div
            initial={{
                y: -50,
            }}
            animate={{
                y: 0
            }}
            transition={{
                duration: .2
            }} className=" flex flex-col">
            <label>{label}</label>
            <input className=" border p-2 rounded mt-2  focus:text-gray-700" type={type} value={value} />
        </motion.div>
    );
}

export default ChangePassword;