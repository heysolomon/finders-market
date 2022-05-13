import { Link } from 'react-router-dom';
import signlogo from '../../../Assets/Images/sign-img.png'
import MiniNav from '../../../components/MiniNav';
import Name from '../../../components/Name';
import Password from '../../../components/Password';

const Signin = () => {
    return ( 
        <div>
         


            <form>
                 <MiniNav name="Log In" link="/login"/>
            <div className='flex justify-evenly mt- items-center'>
            <div>
                <h1 className='text-4xl w-4/6'>Sell Your Farm Produce Or Livestock.</h1>
                <img src={signlogo}  className="w-10/12"  />
            </div>
            <div className='w-1/3 shadow-md p-20'>
             
                <Name placeholder='Enter Your Name...'/>
                <Name placeholder='Email Address Your Name...'/>

              <Password placeholder="Password..."/>
              <Password placeholder="Confirm Password..."/>
              <div className='flex mt-5 justify-between items-center'>
                  <button className='p-1 border-2 rounded '>Sign Up With Google</button>
                  <p>or</p>
                  <button className='p-1 border-2 rounded '>Sign Up With Facebook</button>
              </div>
           

                <Link  className='flex justify-center mt-5  bg-[#4f7f19] hover:opacity-80 text-white p-4 rounded' to="/business" >Continue</Link>
              
              
            </div>
        </div>
 </form>







        </div>
   
    
     );
}
 
export default Signin;