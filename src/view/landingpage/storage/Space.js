import Dropdown from "../../../components/Dropdown";
import InputWithLabel from "../../../components/InputWithLabel";
import MiniNav from "../../../components/MiniNav";

const Space = () => {
    return ( 
        <div>
            <MiniNav name="Back" link="/storageSignin" />
            <div className="w-2/6 m-auto mt-10 text-md block px-5 rounded-lg
                bg-white 
                 py-10">
                <Dropdown label="Storage Type" />
                <InputWithLabel placeholder="Enter  Storage Size" label="Storage Size" />
                <InputWithLabel placeholder="Enter  Address" label="Address" />
                <InputWithLabel placeholder="Enter  City" label="City" />

            </div>

        </div>
     );
}
 
export default Space;