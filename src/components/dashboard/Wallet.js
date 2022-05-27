import Button from "../Button";
import Dashboardcontent from "../Dashboardcontent";
import Dashboardsidebar from "../Dashboardsidebar";
import Dashboardtopbar from "../Dashboardtopbar";

const Wallet = () => {
    return (
        <div className="">
        <Dashboardtopbar />
       <div className="flex ">
           
       <div className="w-[20%] mt-[80px] fixed">
       <Dashboardsidebar />
   
       </div >


           
            <div className="m-auto mt-[110px] ml-[300px] pl-[20px]" >
                <Dashboardcontent/>
               <div className="mt-10">
                    <label className="text-2xl">Tijani Bitrus</label>
                    <div className="flex items-center my-10 ">
                    <p className="text-2xl mr-10">Balance:</p><p className="text-2xl">N22,2222.22</p>
                    </div>
              
               </div>
             <div className="flex ">
             <div className="mr-10">
              <p className="border-2 rounded-xl  text-2xl p-5 border-[#4F7F19]">N22,222.22</p>
              <p className="text-[#4F7F19] m-2">Income</p>
              </div>
              <div className="">
              <p className="border-2 rounded-xl text-2xl p-5 border-[#4F7F19]">N22,222.22</p>
              <p className="text-[#4F7F19] m-2">Expences</p>
              </div>
             </div>
             <div className="w-80 ml-6 mt-20">
             <Button value="Withdraw" />
             </div>
 
            </div>
            
      
            
     
       </div>
    </div> 
       
     );
}
 
export default Wallet;
