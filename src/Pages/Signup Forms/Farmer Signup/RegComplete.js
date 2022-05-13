import classes from './reg-complete.module.css'
import success from '../../../images/success.svg'

const RegComplete = () => {
    return(
        <div className={classes.complete}>
            <h1>Congratulations</h1>
            <img src={success} alt="" srcset="" />
            <h2>You have successfully completed your registration.</h2>
            <button>Continue</button>
        </div>
    );
}

export default RegComplete