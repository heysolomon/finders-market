import { Link } from "react-router-dom";
import house from '../../../Assets/Images/house.png'
import Input from "../../../components/Input";

import MiniNav from "../../../components/MiniNav";
import Password from "../../../components/Password";


const StorageSignin = () => {
    return ( 
        <div>
        <form>
                
            <MiniNav name="Log In" link="/login"/>
            <div className='mt-20 flex justify-evenly mt- items-center'>
                <div>
                    <h1 className='text-4xl w-4/6'>Lease your storage space.</h1>
                    <img src={house}  className="w-10/12"  />
                </div>
                <div className='w-1/3 shadow-md p-20'>
                
                    <Input placeholder='Enter Name...'/>
                    <Input placeholder='Email Address...'/>

                    <Password placeholder="Password..."/>
                    <Password placeholder="Confirm Password..."/>
                    <div className='flex mt-5 justify-between items-center'>
                        <button className='p-1 border-2 rounded '>Sign Up With Google</button>
                        <p>or</p>
                        <button className='p-1 border-2 rounded '>Sign Up With Facebook</button>
                    </div>
                

                    <Link  className='flex justify-center mt-5  bg-[#4f7f19] hover:opacity-80 text-white p-4 rounded' to="/space" >Continue</Link>     
                </div>
            </div>
        </form>




        
        </div>
     );
}
 
export default StorageSignin;