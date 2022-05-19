import classes from './payment-details.module.css'

const PaymentDetails = () => {
    return(
        <div className={classes.paymentDetails}>
            <form action="" method="post" className={classes.form}>
            {/* Card details */}
                <div className={classes.form_field}>
                    <label htmlFor="user_name" className={classes.form_label}>Name on card</label>
                    <input type="text" name='user_name' id='user_name' className={classes.form_input} />
                </div>
                {/* Card number, expiry date and cvv */}
                <div className={classes.fcard_number}>
                    <div className={classes.form_field}>
                        <label htmlFor="card_number" className={classes.form_label}>Name on card</label>
                        <input type="text" name='card_number' id='card_number' className={classes.form_input} />
                    </div>
                    <div className={classes.form_field}>
                        <label htmlFor="expiry_date" className={classes.form_label}>Name on card</label>
                        <input type="date" name='expiry_date' id='expiry_date' className={classes.form_input} />
                    </div>
                    <div className={classes.form_field}>
                        <label htmlFor="cvv" className={classes.form_label}>Name on card</label>
                        <input type="text" name='cvv' id='cvv' className={classes.form_input} />
                    </div>
                </div>
            </form>
        </div>
    );
}

export default PaymentDetails