import { Link } from "react-router-dom";
import MiniNav from "../../../components/MiniNav";
import Name from "../../../components/Name";

const EmailVari = () => {
    return ( 
        <div >
            <MiniNav name="Back" link="/business"/>
         <div className="  items-center text-md  px-3 py-4 rounded-lg
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md
                focus:placeholder-gray-500 w-1/3 m-auto mt-40">
         <div className="text-center">
                <h1 className="text-green-600 my-10">Verify Your Email.</h1>
                <p className="text-xl w-4/6 m-auto">Hi, Hassan. Enter Verificstion code sent to your email.</p>
            </div>
            <div className="m-auto w-3/4">
                <Name placeholder="Enter Verificstion code..." />
                
            </div>

                  <Link className="flex justify-center w-3/4 m-auto mt-5 hover:opacity-80  bg-[#4f7f19] p-4 rounded text-white" to="/congratulation" >Continue</Link>
                
                  
         </div>
        </div>
     );
}
 
export default EmailVari;