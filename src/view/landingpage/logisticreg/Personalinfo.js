import { Link } from "react-router-dom";
import Dropdown from "../../../components/Dropdown";
import InputWithLabel from "../../../components/InputWithLabel";
import MiniNav from "../../../components/MiniNav";
// import Password from "../../../components/Password";

const Personalinfo = () => {
    return ( 
        <div>
            <MiniNav name="Back" link="/Vehiclereg" />
         <div className="w-2/5 m-auto my-10  text-md block px-5 rounded-lg
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md
                focus:placeholder-gray-500
                focus:bg-white 
                focus:border-gray-600  
                focus:outline-none py-10">
         <div>
                <p className="text-center text-bold text-xl">Personal information and vehicle details</p>
                <p  className="text-center text-l">Only your first name and vehicle details are visible to clients. </p>
            </div>
            <div className="mt-10">
              <div className="flex justify-between">
              <InputWithLabel label="First Name"  placeholder="Enter Frist name..." />
                <InputWithLabel label="Last Name"  placeholder="Enter Last name..." />
              </div>
                
                <InputWithLabel label="Vahicle manufacturer"  placeholder="Enter Vahicle manufacturer..." />
               <div className="flex justify-between">
               <InputWithLabel label="License Number"  placeholder="Enter License Number..." />
                <InputWithLabel label="License Plate"  placeholder="Enter License Plate..." />
                
               </div>
               
        
                <Dropdown label="City" />
                <Link className='flex justify-center mt-6  bg-[#4f7f19] hover:opacity-80 text-white p-4 rounded ' to="/emailvari" >Next</Link>
               


            </div>
         </div>
          
        </div>
     );
}
 
export default Personalinfo;