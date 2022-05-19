// import ProductAdd from '../../views/AddToCart/ProductAdd';
import { Link } from 'react-router-dom';
import carrot from '../../Assets/Images/carrots.png'
import './cart.css'

const AddToCart = ({product}) => {
    return (
        <div className="add-to-cart">
        {/* image grid-left */}
            <div className="des-img">
                <img src={carrot} alt="" />
                <p>Tags</p>
                <div style={{display:"flex"}}>
                    <div className="tags">Organic</div>
                    <div className="tags">Vegetables</div>
                </div>
            </div>
            <div className="description">
                <h2>Description</h2>
                <p>{product.description}</p>

                <h2>Price</h2>
                <p style={{marginTop: "0"}}>{product.price}</p>

                <h2>Quantity</h2>
                <input type="number" placeholder="1" name="" id="" />

                <div className='cart-btn'>
                    <Link to="/cart">
                        <button>Add to Cart</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default AddToCart;