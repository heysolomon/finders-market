// import { connect } from "react-redux";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard/ProductCard";

const ProductCards = ({ showInfo }) => {
  const [products, setProducts] = useState([]);
  const fetchProducts = () => {
    axios
      .get("https://morning-headland-70594.herokuapp.com/products")
      .then((res) => {
        setProducts(res.data);
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="grid grid-cols-4 w-full p-4 gap-2">
      {products.map((product) => (
        <ProductCard
          key={product._id}
          product={product}
          productName={product.productName}
          productSize={product.size}
          productImg={product.productImg}
          productPrice={product.productPrice}
          productId={product._id}
          showInfo={showInfo}
          description={product.productDesc}
        />
      ))}
    </div>
  );
};

// const mapStateToProps = state => {
//     return {
//         products: state.shop.products,
//     }
// }

// export default connect(mapStateToProps)(ProductCards)

export default ProductCards;
