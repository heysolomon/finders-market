const ItemQuantity = ({ product, updateItemQuantity }) => {
    
    return (
        <div className="flex justify-center">
            <label htmlFor="qty">  Qty </label>
            <input id="qty" min="1" name="qty" className="w-[50px]" type="number" value={product.quantity} onChange={() => updateItemQuantity(product.id, product.quantity + 1)} />
        </div>
    )
}

export default ItemQuantity