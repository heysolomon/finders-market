import { Link } from "react-router-dom";
import home1 from "../../Assets/Images/home1.png";
import home2 from "../../Assets/Images/home2.png";
import home3 from "../../Assets/Images/home3.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useCart } from "react-use-cart";



const Fixed = () => {
    const { totalUniqueItems } = useCart();
    return ( 
        <div className=" fixed  bottom-0  z-20  bg-white shadow-2xl  shadow-black rounded-t-xl
        flex items-center justify-between p-2 w-full sm:hidden">      
         <Link to="/" className=' flex flex-col justify-center items-center' >
          <img className="" src={home1} alt="" />
          <p className=' text-[12px]'>Home</p>
                  </Link>
          <Link className="" to="/cart">
            <div className="text-black rounded-lg p-2 relative flex flex-col justify-center items-center  ">
              <AiOutlineShoppingCart className="text-2xl  " />
              <span className="  absolute z-20 bg-red-600 rounded-[100%] text-[10px]
                 text-white flex items-center justify-center px-2 py-1 top-[0px] right-[0px]">
                {totalUniqueItems}
              
              </span>
              <p className=' text-[12px]'>Cart</p>
            </div>
          </Link>
          <Link to="/logistics-page" className=' flex flex-col justify-center items-center' >
            <img src={home2} alt="" />
            <p className=' text-[12px]'>Logistic</p>
          </Link>
          <Link to="/storage-page" className=' flex flex-col justify-center items-center'>
            <img src={home3} alt="" />
            <p className=' text-[12px]'>Storage</p>
          </Link>
  
  
        </div>
     );
}
 
export default Fixed;