import { Link } from 'react-router-dom';
import person from '../../../Assets/Images/person.png'
import Button from '../../../components/Button';
import InputWithLabel from '../../../components/InputWithLabel';
import Logo from '../../../components/Logo';
import Password from '../../../components/Password';
const User = () => {
    return ( 
        <div className='flex  '>
            <div className='bg-[#4f7f19] p-4  w-2/4 h-screen '>
                <Logo />
                <div className=' ' >
                    <h1 className='w-2/4 m-auto text-5xl text-white'>Shop for your food items from the convinience of your home.</h1>
                    <img className='m-auto w-4/6  ' src={person}  />
                </div>

            </div>
            <div className='w-2/4 '>
                <div className='flex justify-between items-center mx-10 mt-5'>
                    <h2 className='text-[#4f7f19] text-4xl '>Create account</h2>
                    <p>Already have an account?<Link  className='text-[#4f7f19] text-xl hover:text-gray-800 ' to="/login" > Sign in</Link></p>
                </div>
          
               <form >
                
               <div className=' w-5/6 flex mx-10 '>
               <div className='w-2/4'>
                <InputWithLabel class="mt-14"  label="Full Name" placeholder="Enter Full Name" />
                 <InputWithLabel class="mt-14" label="Phone number" type="tel" placeholder="Enter Phone number" />
                 <InputWithLabel class="mt-14" label="Email Address" type="text" placeholder="Enter Emaill Address" />
                 <Password class="mt-14"  placeholder="Enter a Password"/>
                </div>
                <div className='p-10'>

                </div>

               <div className='w-2/4'>
               <InputWithLabel class="mt-14" label="Address" type="text" placeholder="Enter Home Address" />
                 <InputWithLabel class="mt-14" label="State/city" type="text" placeholder="Enter state/city of residence" />
    

               
                 <Password class="mt-24" placeholder="Confirm  Password"/>
           
               </div>
             
               
               </div>
               <div className='flex items-center w-5/6  mx-10 justify-between '>
               <Button class="w-2/4" value="Create account" />
               <p className='p-9'>or</p>
               <button className='w-2/4 border-2 p-2 rounded-3xl'>Sign up with Facebook</button>
               
               </div>

         </form>
      

            </div>
        </div>

     );
}
 
export default User;