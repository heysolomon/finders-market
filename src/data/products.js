import { useCart } from "react-use-cart";
import productsList from './products.json'

export const Products = () => {
const { setItems } = useCart();

  const list = productsList

  setItems(list)
  return (
    <div>

    </div>
  )
}
