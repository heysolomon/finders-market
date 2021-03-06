import { Link } from "react-router-dom";

 
const DashMenu = (props) => {
    return ( 
     <div className="w-[80%]">
        <Link className="text-slate-900 bg-[#c4c4c4] mx-2 items-center m-auto" to={props.link}>
            <div className="items-center  flex flex-col h-[100px]  p-5 px-12 rounded placeholder-gray-600 shadow-md
        focus:placeholder-gray-500 w-full mx-10 hover:bg-[#D9FF99] ;
        ] ">
            <img src={props.img} className="mb-5 w-5" alt="" />
            <p>{props.name}</p>
        </div>
      </Link>
     </div>
     );
}
 
export default DashMenu;