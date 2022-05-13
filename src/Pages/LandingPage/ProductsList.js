import { Link } from "react-router-dom";

const ProductsLists = ({products}) => {
    return (
        <div className="products-list">
            {products.map((product) => (
                    <Link to="/add-to-cart">
                        <div className="product" key={product.id}>
                            <div className="product-img">
                                <img src={product.img} alt="" />
                            </div>
                            <div className="product-details">
                                <h3>{ product.name }</h3>
                                <p><span>{ product.price }</span> per { product.size }</p>
                                <button>Add to cart</button>
                            </div>
                        </div>
                    </Link>
                ))}
        </div>
    );
}

export default ProductsLists