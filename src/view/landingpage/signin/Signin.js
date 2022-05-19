import { useState } from 'react';
import signlogo from '../../../Assets/Images/sign-img.png'
import Button from '../../../components/Button';
import Dashboardsidebar from '../../../components/Dashboardsidebar';
import Input from '../../../components/Input';
import MiniNav from '../../../components/MiniNav';
import Password from '../../../components/Password';


const Signin = () => {

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