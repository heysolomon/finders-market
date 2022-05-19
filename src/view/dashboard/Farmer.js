import Button from "../../components/Button";
import Dashboardcontent from "../../components/Dashboardcontent";
import Dashboardsidebar from "../../components/Dashboardsidebar";
import Dashboardtopbar from "../../components/Dashboardtopbar";
import Dropdown from "../../components/Dropdown";
import InputWithLabel from "../../components/InputWithLabel";

const Farmer = () => {
    return ( 
        <div>

        <div className="">
        <Dashboardtopbar />
       <div className="flex ">
           
       <div className="">
       <Dashboardsidebar />
       
       </div >



           
            <div className="w-full mt-20" >
            <Dashboardcontent />

                    <form className='mt-10'>
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
    
    </div>
     );
}
 
export default Farmer;