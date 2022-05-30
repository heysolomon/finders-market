// import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import Dropdown from "../../../components/Dropdown";
import InputWithLabel from "../../../components/InputWithLabel";
import MiniNav from "../../../components/MiniNav";
import Password from "../../../components/Password";

const VehicleReg = () => {
    return ( 
        <div>
            <MiniNav name="Back" link="/service" />
            <div className=" m-auto mt-10 text-md block px-5 rounded-lg w-full 
                    bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md
                    focus:placeholder-gray-500
                    focus:bg-white 
                    focus:border-gray-600  
                    focus:outline-none py-10">
                <div>
                    <p>Register your vehicle below</p>
                    <p>If you have multiple vehicles and drivers,<span  className="text-[#4f7f19]" > signup as a fleet owner here.</span></p>
                </div>
                <div>
                    <InputWithLabel label="Email"  placeholder="Enter Email address..." />
                    <InputWithLabel label="Phone number"  placeholder="Enter Phone Number..." />
                    <Password placeholder="Password"/>
                    <Password placeholder="Confirm Password"/>
            
                    <Dropdown label="City" />
                    
                    <Button value="Next" />
                


                </div>
            </div>
          
        </div>
     );
}
 
export default VehicleReg;