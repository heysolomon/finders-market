import { Link } from 'react-router-dom';
import classes from './farmer-signup.module.css'

const FarmerSignup = () => {
    function Show() {
        const x = document.getElementById('myInput');
        if(x.type === 'password'){
            x.type = "text";

        }else {
            x.type = "password";
        }
    }
    function ShowF() {
        const x = document.getElementById('myInputF');
        if(x.type === 'password'){
            x.type = "text";

        }else {
            x.type = "password";
        }
    }
    return (  
        <div style={{width: "100%", padding: "80px 0"}}>
            <form className={classes.Live_container}>
                <h1>Sell your farm produce or livestock</h1>
                <label className={classes.live_label}>Name</label>
                <input className={classes.Live_input} type="text" placeholder="Enter Your Name Here...."  />
                <label className={classes.live_label}>Email Address</label>
                <input className={classes.Live_input} type="email" placeholder="Enter Your Email Here...."    />
                <label className={classes.live_label}>Password</label>
                <input className={classes.Live_input}  placeholder="Enter Your Password Here...."  id='myInputF' type="password"  />
                <div>
                    <input type='checkbox' onClick={ShowF} />Show Password
                </div>
                <label className={classes.live_label}>Confirm Password</label>
                <input className={classes.Live_input}  placeholder="Confirm Your Password Here...."  id='myInput' type="password"  />
                <div>
                    <input type='checkbox' onClick={Show} />Show Password
                </div>
                <Link to="/business-info">
                    <button className={classes.live_btn}>Next</button>
                </Link>
            </form>
        </div>
    );
}
 
export default FarmerSignup;