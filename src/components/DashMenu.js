import { Link } from "react-router-dom";

 
const DashMenu = (props) => {
    return ( 
      <Link className=" mx-2 items-center m-auto" to={props.link}>
            <div className="items-center  flex flex-col  p-5 px-12 rounded bg-white placeholder-gray-600 shadow-md
        focus:placeholder-gray-500 w-full mx-10 hover:bg-[#D9FF99] ;
        ] ">
            <img src={props.img}  className="mb-5 w-5" />
            <p>{props.name}</p>
        </div>
      </Link>
     );
}
 
export default DashMenu;