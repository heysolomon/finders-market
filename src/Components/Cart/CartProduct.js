const CartProduct = ({products}) => {
    return(
        <div className="cart-product">
            <h3>Cart</h3>
            {products.map((product) => (
                <div className="product-item" key={product.id}>
                    <div className="product-item-img flex">
                        <img src={product.img} alt="" />
                        <p>{product.name}</p>
                    </div>
                    <div className="product-item-link">
                        <p>{product.price}</p>
                    </div>
                    <div className="product-item-quantity">
                        <label htmlFor="">Qty</label>
                        <input type="read-only" value={product.quantity} />
                    </div>
                </div>
            ))}
            <div className="product-items-delivery">
                <h3>Delivery</h3>
                <p>Location</p>
                <div className="form-field">
                    <label htmlFor="from">From:</label>
                    <input type="text" />
                </div>
                <div className="form-field">
                    <label htmlFor="from">To</label>
                    <input type="text" />
                </div>
                <p>List of drivers near you</p>
                <select className="drivers-list" name="list-of-drivers" id="list-of-drivers">
                    <option value="1">Bala (Peagout)</option>
                    <option value="2">Paul (Corolla)</option>
                </select>
            </div>
        </div>
    );
}

export default CartProduct