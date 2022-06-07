const SettingsInfo = (props) => {
    return ( 
        <div className="flex flex-col w-full mt-4 ">
        <label>{props.label}</label>
        <p type={props.type} className="shadow w-full p-2 text-gray-500 rounded pl-3" >{props.value}</p>
    </div>
     );
}
 
export default SettingsInfo;