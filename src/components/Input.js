const Input = (props) => {
    return ( 
        <div>
            <input className=' mt-4 flex justify-between items-center text-md  px-3 py-4 rounded-lg w-full 
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md
                focus:placeholder-gray-500'
                 type={props.type} value={props.value}  Placeholder={props.placeholder}  required />
                 <p className="text-red-600 ml-2 mt-5">{props.errormessage}</p>
        </div>
     );
}
 
export default Input;