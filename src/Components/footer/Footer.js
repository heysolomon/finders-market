import footertop from '../../images/Vector9.svg';
import footerlogo from '../../images/SiteLogo3.svg';
import social from '../../images/social-1.svg';
import social2 from '../../images/social-2.svg';
import social3 from '../../images/social-3.svg';
import Union from '../../images/Union.svg';
import keyboard from '../../images/ic-keyboard-arrow-right-48px.svg';
import classes from './footer.module.css'
import { Link } from "react-router-dom";

const Footer = () => {
        const link = [
            {
                id:1,
                name: "About",
                to:"/LandingPage"
            },
            {
                id:2,
                name: "Feature",
                to:"/LandingPage"
            },
            {
                id:3,
                name: "Pricing",
                to:"/LandingPage"
            },
            {
                id:4,
                name: "Gallery",
                to:"/LandingPage"
            },
            {
                id:5,
                name: "Team",
                to:"/LandingPage"
            }
        ]
        const navlink = [
            {
                id:1,
                name: "Privacy Policy"
            },
            {
                id:2,
                name: "Terms of Use"
            },
            {
                id:3,
                name: "Sales and Refunds"
            },
            {
                id:4,
                name: "Legal"
            },
            {
                id:5,
                name: "Site Map"
            }
        ]

 
    return ( 
       <footer>
           <div className={classes.container}>
                <img src={footertop} alt="" style={{width:"100%"}} /> 
                <div className={classes.footer_register}>         
                    <div className={classes.foot_search}>
                        <h4>Subscribe to our newsletter</h4>    
                        <div className={classes.input_content}>          
                            <input className={classes.email} type="email" placeholder='Enter your email'/>
                            <input className={classes.button} type="button" value="Subscribe Now" />
                        </div>
                    </div>          
                </div>
           </div>

           <div className={classes.sub_footer}>
               <div className={classes.left}>
                    <img src={footerlogo} alt="" style={{width:"50px"}} /> 
               </div>
                    <div className={classes.center}>
                        <nav className={classes.sub_center}>

                            <div className={classes.link}>
                                {link.map((link) => (
                                        <Link className={classes.link} key={link.id} to={link.to}>{link.name}</Link>

                                ))}
                          
                            </div>

                            <div className={classes.searchbar}>
                                    
                                        
                                <input className={classes.text_input} type="text" placeholder='Search'/>
                                <img src={ Union } style={{width:"14px"}} alt=""  className={classes.sear} /> 
                        
            
                            </div>  
                        </nav>
                    
                        <div className={classes.link}>
                                {navlink.map((navlink) => (
                                        <Link className={classes.link} key={navlink.id} to="/LandingPage">{navlink.name}</Link>
                                ))}
                            </div>
                    </div>
               <div className={classes.right}>
                   <div className={classes.social}>
                        <div className={classes.sub_social}>
                                    <img src={social} alt="" style={{width:"20px"}} /> 
                                    
                                    <img src={social2 } alt="" style={{width:"20px"}} /> 
                        </div>
                                
                        <div className={classes.sub_social}>
                            <img src={ social3 } alt="" style={{width:"20px"}} /> 
                                
                                <img src={ social } alt="" style={{width:"20px"}} /> 
                        </div>
                    
                            
                    </div>
                    <div className={classes.sub_right}>

                        <img className={classes.back_up} src={ keyboard } alt="" style={{width:"20px"}} /> 
                        
                   </div>
                       
             
               </div>
           </div>
       </footer>

     );
}
 
export default Footer;