const Button = (props) => {
    return ( 
        <div className={props.class}>
            <button className=" bg-[#4f7f19] hover:opacity-80  flex justify-center text-[14px] text-white items-center text-md py-3 rounded-lg w-full 
             border-2 border-gray-300 placeholder-gray-600 shadow-md">
                 {props.value}
            </button>

        </div>
     );
}
 
export default Button;