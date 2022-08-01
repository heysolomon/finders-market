const SetInfo = (props) => {
    return ( 
    <div className="flex flex-col w-full mt-4 ">
        <label>{props.label}</label>
        <input className="shadow w-full p-2 text-gray-500 rounded pl-3" type={props.type} placeholder={props.placeholder} value={props.value}  onChange={props.onChange} />
    </div>
     );
}
 
export default SetInfo;