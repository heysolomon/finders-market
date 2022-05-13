import human from '../../../Assets/Images/human.png'
import eyeslash from '../../../Assets/Images/eye-slash.png'
import eyes from '../../../Assets/Images/showeye.png'
import { Link } from 'react-router-dom';
import Password from '../../../components/Password';
import MiniNav from '../../../components/MiniNav';

const Login = () => {


    return ( 
      <div>
 <form>
 <MiniNav name="Sign In" link="/service"/>
            <div className='flex justify-evenly mt-40 items-center'>
            <div>
                <img src={human}   />
            </div>
            <div className='w-1/3 shadow-md p-20'>
                <input className='text-md block px-5 py-4 rounded-lg w-full 
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md
                focus:placeholder-gray-500
                focus:bg-white 
                focus:border-gray-600  
                focus:outline-none' type="email" placeholder="Email address.." required/>


              <Password placeholder="Password..."/>
                <div className='flex justify-end m-4 '>
                    <Link to=""  >Forgot password?</Link>
                </div>
                
                  
                <Link  className='flex justify-center bg-[#4f7f19] hover:opacity-80 text-white p-4 rounded' to="#home" >Log in</Link>
                
            </div>
        </div>
 </form>
      </div>
     );
}
 

export default Login;