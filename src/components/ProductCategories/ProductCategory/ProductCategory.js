import { useContext } from "react";
import { ProductsContext } from "../../../Helper/Context";
import axios from "axios";

export default function ProductCategory({ productName, productImg }) {
  const { setProducts, setLoading, setProductFailed } =
    useContext(ProductsContext);
  const filterProducts = async () => {
    setLoading(true);
    try {
      const filteredProducts = await axios.get(
        `https://morning-headland-70594.herokuapp.com/products?category=${productName}`
      );
      setLoading(false);
      setProductFailed(false);
      setProducts(filteredProducts.data);
    } catch (err) {
      setLoading(false);
      setProductFailed(true);
    }
  };
  return (
    <div
      className="w-[80px] flex flex-col items-center m-4 cursor-pointer"
      onClick={filterProducts}
    >
      <div className="w-full rounded-full border-[2px] border-[#4F7F19] m-2">
        <img
          className="w-full object-cover rounded-full"
          src={require(`../../../${productImg}`)}
          alt="product-img"
        />
      </div>
      <p className="text-[#4F7F19] font-semibold">{productName}</p>
    </div>
  );
}
