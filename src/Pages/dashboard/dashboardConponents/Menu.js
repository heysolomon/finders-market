import { NavLink } from "react-router-dom";

const Menu = (props) => {
  const navLinkStyles = ({ isActive }) => {
    return {
<<<<<<< HEAD
      background: isActive ? "#D9FF99" : "none",
    };
  };
  return (
    <NavLink
      style={navLinkStyles}
      className=" p-[2rem]  flex flex-col rounded bg-white shadow hover:bg-[#D9FF99] "
      to={props.link}
    >
      <img src={props.img} className="mb-5 w-[20px]" alt={props.img} />

      <p>{props.name}</p>
    </NavLink>
  );
};
=======
        background: isActive ? '#D9FF99' : 'none'
    }
    }
    return ( 
      <NavLink  style={navLinkStyles}   className=" p-[2rem]  flex flex-col rounded bg-white text-black shadow hover:bg-[#D9FF99] " to={props.link}>
     
           
           <img src={props.img}  className="mb-5 w-[20px]" />

            <p className="text-black">{props.name}</p>
       
      </NavLink>
     );
}
>>>>>>> master

export default Menu;
