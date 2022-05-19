import Name from "./Name";

const InputWithLabel = (props) => {
    return ( 
        <div>
             <div className="mt-4">
                <label className="text-xl">{props.label}</label>
                <Name placeholder={props.placeholder}/>
            </div>


        </div>
     );
}
 
export default InputWithLabel;