import { useState } from 'react';
import eyeslash from '../Assets/Images/eye-slash.png'
import eye from '../Assets/Images/showeye.png'






const Password = (props) => {


        const [state, setstate] = useState(false);
        const togglebtn = () => {
            setstate(prevState => !prevState);
        }





    return (
            <div className={props.class}>
                <div className=' mt-4 flex justify-between items-center text-md  px-3 py-2 rounded-lg w-full 
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md'>
                    <input className='focus:placeholder-gray-500
                focus:bg-white 
                focus:border-gray-600  
                focus:outline-none' id='myInput'  type={state ? "text" : "password"} placeholder={props.placeholder} required />
                    <img onClick={togglebtn} id='show'src={state ? eye : eyeslash}  />
            </div>
            </div>

     );
}
 
export default Password;