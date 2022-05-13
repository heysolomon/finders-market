import { Link } from "react-router-dom";
import MiniNav from "../../components/MiniNav";

const Service = () => {
    return (  
        <div>
            <MiniNav name="Back" link="./login" />
            <div>
                <h1 className="ml-60 text-5xl">Become a service provider.</h1>
                <div className="w-3/5 m-auto">
                <Link  className='flex justify-center mt-10  bg-[#4f7f19] hover:opacity-80 text-xl text-white p-10 rounded' to="/signin" >Farmer</Link>
                <Link  className='flex justify-center mt-10  bg-[#4f7f19] hover:opacity-80 text-xl text-white p-10 rounded' to="/storageSignin" >Storage</Link>
                <Link  className='flex justify-center mt-10  bg-[#4f7f19] hover:opacity-80 text-xl text-white p-10 rounded' to="/Vehiclereg" >Logistic</Link>

                </div>
            </div>
        </div>
    );
}
 
export default Service;