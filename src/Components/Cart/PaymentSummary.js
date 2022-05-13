const PaymentSummary = ({products}) => {
    return(
        <div className="payment-summary">
            <h3>Payment Summary</h3>
            <div className="summary">
                <div className="summary-div">
                    
                </div>

                <p>Order summary</p>
                <div className="flex">
                    <h4>Products:</h4>
                    {products.map((product) => (
                        <p key={product.id}>{product.name},</p>
                    ))}
                </div>
                <h4>Delivery fee: N1,500</h4>
                <div className="sum-total">
                    <h4>Total</h4>
                    <button>Check out</button>
                </div>
            </div>
        </div>
    );
}

export default PaymentSummary