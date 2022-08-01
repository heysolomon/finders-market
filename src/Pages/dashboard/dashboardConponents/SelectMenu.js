
const SelectMenu = (props) => {
    return ( 
        <div>

<div className="flex flex-col w-full mt-4 ">
        <label className="mb-4">{props.label}</label>
        <select className="form-select appearance-none block w-full  text-base font-normal shadow  p-2 text-gray-500 
        rounded pl-3 focus:outline-none transition ease-in-out focus:text-gray-600 focus:bg-white focus:border-green-600 " 
        aria-label="Default select example">
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
    </select>
    </div>


        </div>
     );
}
 
export default SelectMenu;


















