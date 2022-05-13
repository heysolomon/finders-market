const Name = (props) => {
    return ( 
        <div>
            <input className=' mt-4 flex justify-between items-center text-md  px-3 py-4 rounded-lg w-full 
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md
                focus:placeholder-gray-500'
                 type={props.name} Placeholder={props.placeholder} />
        </div>
     );
}
 
export default Name;