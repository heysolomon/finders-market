// import { Link } from "react-router-dom";
// import instagram from "../../Assets/Images/instagram.png"
// import footerlogo from "../../Assets/Images/logo.png"
import Dashboard from "../dashboard/Dashboard";
import footer from "./footer.module.css"

const Footer = () => {
    return ( 
        <div >
            <div className={footer.container}>
                    <div className="flex justify-center shadow-sm px-6 py-4 items-center bg-white absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-3 rounded" >
                            <h4 className="font-normal mr-2">Subscribe to our newsletter</h4>
                        <form className="border-2 rounded border-gray-300 bg-white p-1">
                            <input className={footer.footersearch} type="email" placeholder="Enter your email.." />
                            <button className="p-3  rounded bg-[#7DD145] text-white ">Subscribe Now</button>
                        </form>
                    </div>

            </div>
            <Dashboard />



            
            <div className="flex justify-between pb-20 pt-8 px-8  bg-[#4F7F19] text-white">
           
                    {/* <div className="flex justify-between ">
                            <div >
                                <img src={footerlogo} />
                            </div>

                    <div>
                        <div className="flex justify-around border-b-2 py-0 px-2.5 items-center border-white">
                                <ul className="flex">
                                    <li className="m-5"><Link to="" >About</Link></li>
                                    <li className="m-5"><Link to="" >About</Link></li>
                                    <li className="m-5"><Link to="" >About</Link></li>
                                    <li className="m-5"><Link to="" >About</Link></li>
                                    <li className="m-5"><Link to="" >About</Link></li>
                                </ul>
                                    <input type="text" />

                        </div>
                                <ul className="flex">
                                    <li className="m-5"><Link to="" >About</Link></li>
                                    <li className="m-5"><Link to="" >About</Link></li>
                                    <li className="m-5"><Link to="" >About</Link></li>
                                    <li className="m-5"><Link to="" >About</Link></li>
                                    <li className="m-5"><Link to="" >About</Link></li>
                                    <li className="m-5"><Link to="" >About</Link></li>
                                    <li className="m-5"><Link to="" >About</Link></li>
                                    <li className="m-5"><Link to="" >About</Link></li>
                                    <li className="m-5"><Link to="" >About</Link></li>
                                </ul>
                    </div>

                    <div className=" flex justify-around">
                            <Link className="m-2" to="/" ><img src={instagram}/></Link>
                            <Link className="m-2" to="/" ><img src={instagram}/></Link>
                            <Link className="m-2" to="/" ><img src={instagram}/></Link>
            
                    </div>

                    </div>

                </div> */}
            </div>
        </div>
     );
}
 
export default Footer;
























