import Button from "./Button";
import Dashboardsidebar from "./Dashboardsidebar";
import Dashboardtopbar from "./Dashboardtopbar";
import Dropdown from "./Dropdown";
import InputWithLabel from "./InputWithLabel";

const Bars = () => {
    return (  
        <div>
            <Dashboardtopbar/>
            <div>
                <div className="w-[20%]">
                    <Dashboardsidebar />
                </div>
                <div className="w-[80%]">
                <form className='mt-10 w-full'>
                        <div className='flex'>

                            <div className='mr-10 w-2/6'>
                                <Dropdown label="Categories" />
                            <Dropdown label="Categories" />
                                <InputWithLabel label="Price" placeholder="Price" />   
                                <Button value="Save" />
                            </div>
                            <div className="w-2/6">
                                <InputWithLabel label="Product" />
                                <InputWithLabel label="Tags"  />
                            </div>
                        </div>      
                    </form>

                </div>
            </div>
        </div>
    );
}
 
export default Bars;