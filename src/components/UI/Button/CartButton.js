
export default function CartButton(props) {
  return (
    <div className={`border border-[black] flex p-1 justify-between items-center rounded-md ${props.class}`}>
        <button onClick={() => props.updateItemQuantity(props.product.id, props.product.quantity - 1)} className="p-2 w-[35px] h-[30px] bg-[#4F7F19] text-[white] text-xl font-semibold flex justify-center items-center rounded-sm">&#8722;</button>
            <span>{props.product.quantity}</span>
        <button onClick={() => props.updateItemQuantity(props.product.id, props.product.quantity + 1)}  className="p-2 w-[35px] h-[30px] bg-[#4F7F19] text-[white] text-xl font-semibold flex justify-center items-center rounded-sm">&#43;</button>
    </div>
  )
}
