import Vectorbook from './../../../Assets/Images/Vectorbook.png'
import { NavLink } from "react-router-dom";


const Menus = (props) => {
   

    return ( 
       <div className="">
            <div className="  grid grid-cols-3 gap-3 sm:gap-5 mx-2 ">
        <Menu  link={props.link2}  img={Vectorbook} name="Transaction"/>
        <Menu  link={props.link3}  img={Vectorbook} name={props.fname}/>
        <Menu  link={props.link4}  img={Vectorbook} name={props.sname}/>
        </div>
       </div>
     );
}

const Menu = (props) => {
  const navLinkStyles = ({isActive}) => {
    return {
        background: isActive ? '#D9FF99' : 'none'
    }
    }
    return ( 
      <NavLink  style={navLinkStyles}  className=" sm:p-[2rem] p-2  flex flex-col rounded bg-white text-black shadow hover:bg-[#D9FF99] " to={props.link}>           
          <img src={props.img}  className="sm:mb-5 w-[20px]" alt="" />
          <p className="text-black text-[12px] sm:text-[14px]">{props.name}</p>   
      </NavLink>
     );
}

 
export default Menus;