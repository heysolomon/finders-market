import { connect } from "react-redux";
import ProductCard from "./ProductCard/ProductCard";

 const ProductCards = ({showInfo, products}) => {

    return (
        <div className="grid grid-cols-4 w-full p-4 gap-2">
            {products.map(
                product => (
                    <ProductCard 
                    key={product.id} 
                    product={product}
                    productName={product.name}
                    productSize={product.size}
                    productImg={product.img}
                    productPrice={product.price}
                    productId={product.id}
                    showInfo={showInfo}
                    description={product.description}
                    />
    
                )
            )}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        products: state.shop.products,
    }
}

export default connect(mapStateToProps)(ProductCards)