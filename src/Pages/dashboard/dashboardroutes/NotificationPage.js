import Header from "../dashboardConponents/Header";
import Sidebar from "../dashboardConponents/SideBar";

const NotificationPage = () => {
    return (  
        <div>
            
        <main className="bg-gray-100   h-screen overflow-hidden relative">
            <div className="flex items-start justify-between">
                <div className="h-screen hidden lg:block shadow-lg relative w-80">
                 
                        <Sidebar  />
                
                    </div>
                    <div className="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
                        <Header Notificationbar="hidden" />
                            <div className="overflow-auto h-screen pb-24 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
                            <div className="fixed w-[78%] bg-white pt-[80px] top-[90px] shadow pb-5 pl-10 ">
                           <label className="text-2xl">Notifications</label>
                           </div>
             
                    

        
        
        
                            </div>
                    </div>
                </div>
        </main>
        
        
                </div>
     );
}
 
export default NotificationPage;