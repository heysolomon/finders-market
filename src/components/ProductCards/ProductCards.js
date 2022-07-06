// import { connect } from "react-redux";
import axios from "axios";
import { useEffect, useContext } from "react";
import ProductCard from "./ProductCard/ProductCard";
import { ProductsContext } from "../../Helper/Context";
import { SpinnerCircular } from "spinners-react";

const ProductCards = ({ showInfo }) => {
  const { products, setProducts, loading, setLoading } =
    useContext(ProductsContext);

  useEffect(() => {
    const fetchProducts = () => {
      axios
        .get("https://morning-headland-70594.herokuapp.com/products")
        .then((res) => {
          setLoading(false);
          setProducts(res.data);
        })
        .catch((err) => {
          setLoading(false);
          console.log(err);
        });
    };
    fetchProducts();
  }, [setLoading, setProducts]);

  return (
    <div className={!loading ? "grid grid-cols-4 w-full p-4 gap-2" : undefined}>
      {loading ? (
        <SpinnerCircular
          color="#4f7f19"
          className="mx-auto my-[40px]"
          thickness={120}
          size={100}
        />
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};

export default ProductCards;
