// import MiniNav from "../components/MiniNav";
import congratelogo from '../Assets/Images/congrate.png'
import { Link } from "react-router-dom";

const Congrate = () => {
    return (
        <div>
            <div className=" w-3/5 m-auto  items-center">
                <p className="text-center text-4xl my-20 text-green-600">Congratulations!</p>
                <img className="m-auto w-60" src={congratelogo} alt="" />
                <p className="text-center my-10 text-4xl">You have successfully completed your registration.</p>
                <Link  className='flex justify-center mt-5 w-2/3 m-auto  bg-[#4f7f19] hover:opacity-80 text-white text-xl p-4 rounded' to="/login" >Continue</Link>

            </div>
            
        </div>
     );
}
 
export default Congrate;