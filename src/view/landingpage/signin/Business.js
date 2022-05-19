import { Link } from "react-router-dom";
import Dropdown from "../../../components/Dropdown";

import InputWithLabel from "../../../components/InputWithLabel";
import MiniNav from "../../../components/MiniNav";


const Business = () => {
    return ( 
        <div>
            <MiniNav name="Back"  link="/Signin"/>
            <h1 className="text-5xl ml-60 ">Business Information</h1>
          <div className="w-2/5 m-auto">
              <InputWithLabel label="Farm/Business name" placeholder="Enter Your Farm/Business name..." />
              <InputWithLabel label="Address" placeholder="Enter Your  address..." />
              <InputWithLabel label="City" placeholder="Enter Your  city..." />
              <InputWithLabel label="State" placeholder="Enter Your  state..." />
              <InputWithLabel label="Phone Number" placeholder="Enter Your  Phone number.." />
                <Dropdown label="Product Type" />

          </div>
      
                  
                  <Link className='flex justify-center mt-6 mb-20 bg-[#4f7f19] hover:opacity-80 text-white p-4 rounded w-2/5 m-auto' to="/emailvari" >Continue</Link>
        

        
        </div>
     );
}
 
export default Business;