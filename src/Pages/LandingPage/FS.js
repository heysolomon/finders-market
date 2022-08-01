import logo from "../../Assets/Images/finderslogo.png";
import {motion} from 'framer-motion'
const FS = () => {
    return ( 
        <motion.div
  initial={{ scale: 1 }}
  animate={{  scale: 0 }}
  transition={{
    type: "spring",
    stiffness: 260,
    damping: 20
  }}
 className="fixed z-40 h-screen bg-[#4F7F19] w-full">
            <div className=" flex justify-center items-center m-auto h-screen">
                <img  src={logo}  alt=""  />
            </div>

        </motion.div>
     );
}
 
export default FS;