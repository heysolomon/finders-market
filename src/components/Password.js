import eyeslash from '../Assets/Images/eye-slash.png'


const Password = (props) => {
    return ( 
        <div>
              <div className=' mt-4 flex justify-between items-center text-md  px-3 py-2 rounded-lg w-full 
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md
                focus:placeholder-gray-500
                focus:bg-white 
                focus:border-gray-600  
                focus:outline-none'>
                    <input className='focus:placeholder-gray-500
                focus:bg-white 
                focus:border-gray-600  
                focus:outline-none' id='myInput'  type="password" placeholder={props.placeholder} required />
                    <img id='show'src={eyeslash} alt="" />
                </div>

        </div>
     );
}
 
export default Password;