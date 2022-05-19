import Input from "./Input";

const InputWithLabel = (props) => {
    return ( 
        <div className={props.class}>
             <div className="mt-4">
                <label className="text-xl">{props.label}</label>
                <Input value={props.value} type={props.type} placeholder={props.placeholder}/>
              
            </div>
        </div>
     );
}
 
export default InputWithLabel;