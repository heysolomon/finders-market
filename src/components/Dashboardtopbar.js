import arrowleft from '../Assets/Images/arrow-left.png' 
import search from '../Assets/Images/search.png'
import profi from '../Assets/Images/profi.png'

import Logo from './Logo';
import { Link } from 'react-router-dom';


const Dashboardtopbar = () => {

    

    return ( 
       <div className='px-10 pb-5 border-b-2'>
            <div className=' mt-5 flex items-center justify-between '>
                <Logo />

           <div className='flex items-center '>
          <Link to="/LandingPage">
          <div className='flex items-center mr-40'>
                    <img src={arrowleft} />
                    <p className='text-xl'>Back</p>
            </div>   
              </Link> 
            
            <div className='flex items-center justify-between border-2 px-5  py-2 rounded'>
                <input className='focus:outline-none' type="search" placeholder='search...' />
                <img src={search} />
            </div>
           
           </div>
           <img src={profi} width="50"/>
          

        </div>
     
       </div>
     );
}
 
export default Dashboardtopbar;