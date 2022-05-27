import { Link } from "react-router-dom";

const Dashbtn = (props) => {
    return ( 
        <Link to={props.link} className="flex  items-center my-10   ml-10 rounded ">
            <img src={props.img} width="30" alt="" />
            <p className=" hover:text-[#4F7F19]  text-black mx-10">{props.name}</p>
        </Link>
        
    );
}
 
export default Dashbtn;