import { Link } from 'react-router-dom';
import classes from './signup.module.css'

const SPSignup = () => {
    return(
        <div className={classes.signup}>
            <h1>Become a service provider</h1>
            <Link to="/farmer-signup">
                <button>Farmer</button>
            </Link>
            {/* <p>or</p> */}
            <Link to="">
                <button>Storage</button>
            </Link>
            <Link to="">
                <button>Logistics</button>
            </Link>
        </div>
    );
}

export default SPSignup