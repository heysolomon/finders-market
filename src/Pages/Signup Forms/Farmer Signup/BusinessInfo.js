import { Link } from 'react-router-dom';
import classes from './business-info.module.css'
const BusinessInfo = () => {
    return (  
        <main className={classes.Business_container}>
            <h1>Business Information</h1>
     
            <div className={classes.Business_Sub}>

                <label>Farm/Business Name</label>
                <input className={classes.Business_input} type="text" placeholder="Enter Your Name Here...."  />
            </div>

            <div className={classes.Business_Sub}>

                    <label>Address</label>
                    <input className={classes.Business_input} type="text" placeholder="Enter Your Address Here...."  />
                </div>

                <div className={classes.Business_Sub}>
                    <label>City</label>
                    <input className={classes.Business_input} type="text" placeholder="Enter Your City Here...."  />
                </div>

                <div className={classes.Business_Sub}>
                    <label>State</label>
                    <input className={classes.Business_input} type="text" placeholder="Enter Your State Here...."  />
                </div>

                <div className={classes.Business_Sub}>
                <label>Phone Number</label>
                <input className={classes.Business_input} type="text" placeholder="Enter Your Phone Number Here...."  />
                </div>

                
            
            <div className={classes.Butiness_Sub}>
                <select className={classes.Business_select}>
                        <option>Select 1</option>
                        <option>Select 2</option>
                        <option>Select 3</option>
                </select>
            </div>
            
            <div className={classes.Business_Sub}>
                <Link to="/farmer-registration-complete" >
                    <input className={classes.Business_button} value="Continue" type="button" />
                </Link>
            </div>
    </main>
    );
}
 
export default BusinessInfo;
