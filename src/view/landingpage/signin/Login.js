import human from '../../../Assets/Images/human.png'
import eyeslash from '../../../Assets/Images/eye-slash.png'
import eyes from '../../../Assets/Images/showeye.png'
import { Link } from 'react-router-dom';
import Password from '../../../components/Password';
import MiniNav from '../../../components/MiniNav';
import Button from '../../../components/Button';
import Input from '../../../components/Input';

const Login = () => {


    return ( 
      <div>
 
            <MiniNav name="Sign In" link="/service"/>
            <div className='flex justify-evenly mt-40 items-center'>
            <div>
                <img src={human} className="w-10/12"   />
            </div>
                <form className='w-1/3 shadow-md p-10'>
                    <Input type="email" placeholder="Email address.." />
                    <Password placeholder="Password..."/>
                    <Link className='flex justify-end m-4 ' to=""  >Forgot password?</Link>        
                    <Button value="Log In" />       
                </form>
            </div>

      </div>
     );
}
 

export default Login;