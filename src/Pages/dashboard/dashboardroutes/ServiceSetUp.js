import StorageImg from '../dashimg/undraw_empty_street_re_atjq.svg'
import farmImg from '../dashimg/undraw_festivities_tvvj.svg'
import LogisticImg from '../dashimg/undraw_order_a_car_-3-tww.svg'
import logo from '../../../Assets/Images/finderslogo.png'
import { Link } from 'react-router-dom'
const ServiceSetUp = () => {
    const service = [
        {
            id:1,
            name: 'Logistic',
            img: LogisticImg,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id nisi tristique, sodales libero vel, placerat dui. Nunc tincidunt lacinia porttitor. Curabitur id varius elit, sit amet rhoncus lacus.",
        },
        {
            id:2,
            name: 'Farmer',
            img: farmImg,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id nisi tristique, sodales libero vel, placerat dui. Nunc tincidunt lacinia porttitor. Curabitur id varius elit, sit amet rhoncus lacus.",
        },
        {
            id:3,
            img: StorageImg,
            name: 'Storage',
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id nisi tristique, sodales libero vel, placerat dui. Nunc tincidunt lacinia porttitor. Curabitur id varius elit, sit amet rhoncus lacus.",
        },

    ]
    return (
            <div>
                <div className=' text-white flex justify-between items-center px-10 w-full bg-[#4f7f19]'>
                    <Link to="/dashboard/settings"  >Back</Link>
                    <img className='w-40' src={logo}   alt=''  />  
                </div>

                <div className=" grid grid-cols-3 gap-10 w-[70%] m-auto py-[7%]">
                    {
                        service.map((item) => (
                            <div key={item.id} className="  mx-4 h-[400px] bg-slate-100 p-5 w-[100%]">
                                <div className='  flex items-center'>
                                    <img className='  w-[60%] h-[100px]' src={item.img}  alt=""   />
                                    <h1 className=' text-2xl font-semibold'>{item.name}</h1>
                                </div>
                                <p className=' my-6'>{item.description}</p>
                                <button className=' w-full my-5 p-2 bg-[#4f7f19] text-white font-semibold  rounded'>{item.name}</button>
                            </div>
                        ))
                    }
                </div>
                
            </div>
      );
}
 

export default ServiceSetUp;