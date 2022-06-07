const DashboardInput = (props) => {
    return ( 
        <div className="flex flex-col w-full mt-4 ">
        <label className="mb-4">{props.label}</label>
        <input className="shadow w-full p-3 text-gray-500 rounded pl-3 focus:outline-none" type={props.type} placeholder={props.placeholder}  />
    </div>
     );
}
 
export default DashboardInput;