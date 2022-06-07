import Menu from "./Menu";


import Vectorbook from './../../../Assets/Images/Vectorbook.png'



const Menus = (props) => {
   

    return ( 
       <div className="">
            <div className="  grid grid-cols-3 gap-5 mx-2 ">
       
                 
        <Menu  link={props.link2}  img={Vectorbook} name="Transaction"/>
        <Menu  link={props.link3}  img={Vectorbook} name={props.fname}/>
        <Menu  link={props.link4}  img={Vectorbook} name={props.sname}/>
    

        </div>
       </div>
     );
}

 
export default Menus;