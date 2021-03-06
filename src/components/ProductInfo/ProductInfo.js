import { useCart } from "react-use-cart";
// import { useState } from "react";
import { Button } from "../UI/Button/Button";
// import CartButton from "../UI/Button/CartButton";

export default function ProductInfo({ productDetails }) {
  // const [isClicked, setIsClicked] = useState(false)
  // const handleClick = () => setIsClicked(!isClicked)

  const { items, addItem } = useCart();

  return (
    // <div className="z-10 px-10 py-8 bg-[white] fixed max-w-[1000px] w-[1000px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-sm transition-all ease-in-out duration-300">
    <div className="bg-[white] w-full h-full">
      <div className="flex flex-col sm:flex-row sm:justify-around items-center">
        <div className="h-[270px] w-full max-w-[250px]">
          <img
            className="w-full h-full object-cover"
            src={productDetails.productImg}
            alt="product-img"
          />
        </div>
        <div className=" w-[60%] sm:w-[40%]">
          <h2 className="font-semibold text-2xl my-3">Description</h2>
          <p className="leading-8 text-sm">{productDetails?.description}</p>
          <div>
            <p className="font-semibold text-xl my-3">
              Price: <span>{productDetails.productPrice}</span>
            </p>
          </div>
          <Button
            className="disabled:bg-[#c4c4c4]"
            color="white"
            width="50%"
            background="#4F7F19"
            onClick={() => addItem(items)}
            disabled={
              items.find((item) => productDetails.productId === item.id)
                ? true
                : false
            }
          >
            {items.find((item) => productDetails.productId === item.id) ? (
              <span>Added to Cart</span>
            ) : (
              <span>Add to Cart</span>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
