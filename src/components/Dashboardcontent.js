import DashMenu from "./DashMenu";
import listalt from '../Assets/Images/list-alt.png'
import Vectorbook from '../Assets/Images/Vectorbook.png'
import Vectorx from '../Assets/Images/Vectorx.png'
import wallet from '../Assets/Images/wallet.png'


const Dashboardcontent = () => {
    const topmenu  = [
        {
            id:1,
            link: '#',
            img: listalt,
            name:"Transactions"

        },
        {
            id:2,
            link: '/booking',
            img: Vectorbook,
            name:"Bookings"

        },
        {
            id:3,
            link: '#',
            img: Vectorx,
            name:"Active Bookings"

        },
        {
            id:4,
            link: '/wallet',
            img: wallet,
            name:"Wallet"

        },
    ] 

    return ( 
        <div className="flex w-10/12 justify-around   ">
            {
                topmenu.map((topmenu) =>(
                 
                        <DashMenu key={topmenu.id} link={topmenu.link}  img={topmenu.img} name={topmenu.name}/>
              
                ))
            }

        </div>
     );
}
 
export default Dashboardcontent;