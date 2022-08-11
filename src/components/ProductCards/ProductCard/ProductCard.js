import { useCart } from "react-use-cart";
import { Button } from "../../UI/Button/Button";
import { Link } from "react-router-dom";

const ProductCard = ({
  productPrice,
  productName,
  productSize,
  productImg,
  description,
  productId,
  product,
  showInfo,
}) => {
  const { addItem, items } = useCart();

  const props = {
    description: description,
    productPrice: productPrice,
    productImg: productImg,
    productId: productId,
  };

  const { _id: id, productQuantity: quantity, productPrice: price, ...others } = product;
  const newProduct = { id, quantity, price, ...others };

  return (
    <div className="sm:w-[85%] w-[95%] m-auto sm:max-w-[200px] my-2 h-[300px] rounded sm:rounded-lg sm:my-2 bg-[white] 
    shadow-[#ccc] shadow-2xl sm:shadow-md cursor-pointer sm:hover:scale-105 active:scale-105 transition ease-in-out duration-150">
      <div className="w-full h-[50%] mb-2">
        <img
          className="w-full h-full object-cover rounded-t-lg"
          src={productImg}
          alt="product-img"
        />
      </div>
      <h4 className="font-semibold sm:text-xl m-2 ">{productName}</h4>
      <p className="m-2">
        &#8358;{productPrice} per {productSize}
      </p>
      <div className="pl-2 flex sm:items-center flex-col sm:flex-row items-end">
        <Button
          className="disabled:bg-[#c4c4c4] text-[12px] sm:text-xs mr-5 sm:mr-0"
          color="white"
          width="50%"
          background="#4F7F19"
          disabled={items.find((item) => newProduct.id === item.id) ? true : false}
          onClick={() => addItem(newProduct)}
        >
          {items.find((item) => newProduct.id === item.id) ? (
            <span>Added to Cart</span>
          ) : (
            <span>Add to Cart</span>
          )}
        </Button>

        <Link
          className="sm:ml-2 mr-9 sm:mr-0 text-xs text-slate-900 my-2 sm:my-0"
          to=""
          onClick={() => showInfo(props)}
        >
          View Item
        </Link>
      </div>
    </div>
  );
};

// const mapDispatchToProps = dispatch => {
//     return {
//         addToCart: (id) => dispatch(addToCart(id)),
//         // loadCurrentItem: (item) => (loadCurrentItem(item))
//     }
// }

export default ProductCard;
