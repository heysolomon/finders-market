import StorageImg from '../dashimg/undraw_empty_street_re_atjq.svg'
import farmImg from '../dashimg/undraw_festivities_tvvj.svg'
import LogisticImg from '../dashimg/undraw_order_a_car_-3-tww.svg'
import { motion } from 'framer-motion'


const ServiceSetUp = ( { onClinkF, onClickS, onClickL}) => {
    return (
                <div className="flex items-center w-[70%] mx-[15%] left-0 mt-10 fixed  top-0  z-50 ">
             
        
                            <motion.div initial={{ scale: .5 , x: -600}} animate={{ scale: 1 ,x:0}} transition={{delay: 1 , duration: .35}}
                             className="   h-[420px] bg-white p-5 w-[100%] rounded-l-xl">
                                <div className='  flex items-center z-50   h-[100px] '>
                                    <img className='  w-[60%] h-[100px]' src={StorageImg}  alt=""   />
                                    <h1 className=' text-2xl font-semibold'>Storage</h1>
                                </div>
                                <p className=' h-[200px] py-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id nisi tristique, sodales libero vel, placerat dui. Nunc tincidunt lacinia porttitor. Curabitur id varius elit, sit amet rhoncus lacus.</p>
                                <button onClick={onClickS} className=' w-full  p-2 bg-[#4f7f19] text-white font-semibold  rounded'>Storage</button>
                            </motion.div>


                            <motion.div initial={{scale:.5, y: -200}} animate={{ scale: 1 ,y:0}} transition={{ duration: .35}}
                               className="  shadow-lg z-20  h-[500px] bg-white rounded-xl p-5 w-[100%] py-14">
                                <div className='  flex items-center z-50  h-[100px]  '>
                                    <img className='  w-[60%] h-[100px]' src={farmImg}  alt=""   />
                                    <h1 className=' text-2xl font-semibold'>Farmer</h1>
                                </div>
                                <p className=' h-[200px] py-5 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id nisi tristique, sodales libero vel, placerat dui. Nunc tincidunt lacinia porttitor. Curabitur id varius elit, sit amet rhoncus lacus.</p>
                                <button onClick={onClinkF} className=' w-full  p-2 bg-[#4f7f19] text-white font-semibold  rounded'>Farmer</button>
                            </motion.div>


                            <motion.div  initial={{ x: 600 , scale: .5}} animate={{ x:0, scale: 1}} transition={{ delay: 1 ,duration: .35}}
                             className="   h-[420px] bg-white p-5 w-[100%] rounded-r-xl justify-center items-center">
                                <div className='  flex items-center z-50 h-[100px] '>
                                    <img className='  w-[60%] h-[100px]' src={LogisticImg}  alt=""   />
                                    <h1 className=' text-2xl font-semibold'>Logistic</h1>
                                </div>
                                <p className='  text-black  h-[200px] py-5 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id nisi tristique, sodales libero vel, placerat dui. Nunc tincidunt lacinia porttitor. Curabitur id varius elit, sit amet rhoncus lacus.</p>
                                <button onClick={onClickL} className=' w-full p-2 bg-[#4f7f19] text-white font-semibold  rounded'>Logistic</button>
                            </motion.div>
          
                </div>  
        
      );
}
 

export default ServiceSetUp;