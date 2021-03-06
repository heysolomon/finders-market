import { Link } from 'react-router-dom';
import logo from '../Assets/Images/logo.png'
// import Logo from './Logo';
const MiniNav = (props) => {
    return ( 
        <div className='bg-[#4f7f19]  p-2'>
            <div className='flex items-center justify-between text-xl text-white w-5/6 m-auto'>
                <img src={logo}  className="w-20" alt=""  />
                <Link to={props.link}>{props.name}</Link>
            </div>
        </div>
     );
}
 
export default MiniNav;