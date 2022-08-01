import farmImg from '../dashboard/dashimg/undraw_festivities_tvvj.svg'
import Chart from './dashboardConponents/Chart';
import LinChart from './dashboardConponents/LinChart';
import { useSelector } from "react-redux";


 

export const Home = () => {
  const user = useSelector((state) => state.userInfo);  
  return (
    <div className="mt-[80px] ml-5  px-10">
      <div className="grid grid-cols-6 gap-4 grid-rols-2">
        <div className="col-span-3 shadow-xl bg-gray-50 row-span-2 flex items-center">
          <img className='w-[30%] ' src={farmImg } alt=""  />
          <div>
            <h1 className='text-xl font-semibold'>Hello {user.fullname}</h1>
            <p>Welcome to Your Dashboard</p>
          </div>
        </div>
        <div className="col-span-3 shadow-xl bg-slate-50 row-span-3">
            <Chart />
        </div> 
        <div className="col-span-3 shadow-xl bg-slate-50 row-span-3">
            <LinChart />
        </div>   
      </div>
    </div>
  );
};


export default Home;