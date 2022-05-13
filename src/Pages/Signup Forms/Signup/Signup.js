import { Link } from 'react-router-dom';
import classes from './signup.module.css'

const Signup = () => {
    return(
        <div className={classes.signup}>
            <h1>Register as a</h1>
            <Link to="/user-signup">
                <button>User</button>
            </Link>
            {/* <p>or</p> */}
            <Link to="/service-provider-signup">
                <button>Service Provider</button>
            </Link>
        </div>
    );
}

export default Signup