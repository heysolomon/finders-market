import { useState } from 'react';
import signlogo from '../../../Assets/Images/sign-img.png'
import Button from '../../../components/Button';
import Dashboardsidebar from '../../../components/Dashboardsidebar';
import Input from '../../../components/Input';
import MiniNav from '../../../components/MiniNav';
import Password from '../../../components/Password';


const Signin = () => {
<<<<<<< HEAD
    
    return ( 
        <div>
            <form>
                 <MiniNav name="Log In" link="/login"/>
            <div className='flex justify-evenly mt- items-center'>
            <div>
                <h1 className='text-4xl w-4/6'>Sell Your Farm Produce Or Livestock.</h1>
                <img alt="" src={signlogo}  className="w-10/12"  />
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
=======

    const input = [
        {
            id:1,
            name: "username",
            type: "text",
            placeholder: "Enter Your Name...", 
            error: "what the for is doing you" 
             },
        {
            id:2,
            name: "email",
            type: "email",
            placeholder: "Email Address Your Name",
        }
      
    ]


>>>>>>> d04bf61befa301c2dabf2ec1b95da152f12da140


    return ( 

        <div>
         
            <MiniNav name="Log In" link="/login"/>
            <div className='flex justify-evenly mt- items-center'>
                <div>
                    <h1 className='text-4xl w-4/6'>Sell Your Farm Produce Or Livestock.</h1>
                    <img src={signlogo}  className="w-8/12"  />
                </div>


                <form  className='w-2/5 shadow-md p-10'>

                    {
                        input.map((input) =>(
                            <Input key={input.id}  placeholder={input.placeholder}/>
                            
                        ))
                    }
                    <Password placeholder="Enter Password" />
                    <Password placeholder="Confilm Password" />
                    <div className='flex mt-5 justify-between items-center'>
                        <button className='p-1 border-2 rounded '>Sign Up With Google</button>
                        <p>or</p>
                        <button className='p-1 border-2 rounded '>Sign Up With Facebook</button>
                    </div>
                    <Button 
                     value="Continue" />

                </form>
            </div>
      
        </div>
   
    
     );
}
 
export default Signin;