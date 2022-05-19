import { useCart } from "react-use-cart";
import { Button } from "../../UI/Button/Button";
import { Link } from "react-router-dom"

const ProductCard = ({ productPrice, productName, productSize, productImg, description,productId, product, showInfo }) => {
    
    const { addItem, items } = useCart();

    const props = {
        description: description,
        productPrice: productPrice,
        productImg: productImg,
        productId: productId
    }

    
    return(
        <div className="w-[85%] h-[300px] rounded-lg my-2 bg-[white] shadow-[#ccc] shadow-md cursor-pointer hover:scale-105 transition ease-in-out duration-150">
            <div className="w-full h-[50%] mb-2">
                <img className="w-full h-full object-cover rounded-t-lg" src={require(`../../../${productImg}`)} alt="product-img" />
            </div>
            <h4 className="font-semibold text-xl m-2 ">{productName}</h4>
            <p className="m-2">{productPrice} per {productSize}</p>
            <div className="pl-2 flex items-center">
                <Button 
                className="disabled:bg-[#c4c4c4] text-sm"
                color="white" width="50%" 
                background="#4F7F19"
                disabled={ items.find(item => product.id === item.id) ? true : false}
                
                onClick={() => addItem(product)}
                >
                {
                    items.find(item => product.id === item.id) ?
                    <span>Added to Cart</span>
                    :
                    <span>Add to Cart</span>
                }
                </Button>
                
                <Link className="ml-2 text-xs" to="" onClick={() => showInfo(props)}>
                    View Item

                </Link>
            
            </div>
        </div>
    );
}

// const mapDispatchToProps = dispatch => {
//     return {
//         addToCart: (id) => dispatch(addToCart(id)),
//         // loadCurrentItem: (item) => (loadCurrentItem(item))
//     }
// }

export default ProductCard