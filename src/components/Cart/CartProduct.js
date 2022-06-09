// import { connect } from "react-redux";
import { Button } from "../UI/Button/Button";
import CartButton from "../UI/Button/CartButton";

const CartProduct = ({ products, removeItem, isEmpty, updateItemQuantity }) => {
  return (
    <div>
      {isEmpty ? (
        <div className="w-full h-full flex justify-center items-center">
          You currently have nothing in your cart
        </div>
      ) : (
        <div className="pr-[10px]">
          <h3 className="text-[#4F7F19] ">Cart</h3>
          {products.map((product) => (
            <div
              className="grid grid-cols-4 items-center p-[10px] w-full shadow-lg rounded-[10px] mb-[15px]"
              key={product.id}
            >
              <div className="product-item-img flex items-center">
                <img
                  className="h-[50px] w-[50px] mr-[10px]"
                  src={product.productImg}
                  alt=""
                />
                <p>{product.productName}</p>
              </div>
              <div className="flex justify-center">
                <p>&#8358;{product.price}.00</p>
              </div>
              <CartButton
                updateItemQuantity={updateItemQuantity}
                product={product}
              />

              <Button
                className="text-xs"
                onClick={() => removeItem(product.id)}
              >
                Remove Item
              </Button>
            </div>
          ))}
          <div className="product-items-delivery">
            <h3 className="text-[#4F7F19]">Delivery</h3>
            <p>Location</p>
            <div className="p-[10px] mb-[10px] rounded-[10px] border-[1px]">
              <label htmlFor="from">From:</label>
              <input
                className="w-90 h-full border-0 rounded-none"
                type="text"
              />
            </div>
            <div className="p-[10px] mb-[10px] rounded-[10px] border-[1px]">
              <label htmlFor="from">To</label>
              <input
                className="w-90 h-full border-0 rounded-none"
                type="text"
              />
            </div>
            <p>List of drivers near you</p>
            <select
              className="h-[37px] w-full px-[10px] rounded-[10px] border-[1px] "
              name="list-of-drivers"
              id="list-of-drivers"
            >
              <option value="1">Bala (Peagout)</option>
              <option value="2">Paul (Corolla)</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartProduct;
