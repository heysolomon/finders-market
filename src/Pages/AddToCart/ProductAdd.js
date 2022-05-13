import AddToCart from "../../components/AddToCart/AddToCart";
import './add.css'
const ProductAdd = () => {
    const productDescription = {
        id: 1,
        name: "Cocoyam",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni rerum sit officia nam, porro voluptatibus modi animi itaque eaque commodi reiciendis. Impedit labore dolore harum illo consequuntur, ducimus totam voluptatem?",
        tags: [
            {
                id: 1,
                name: "Organic",
            },
            {
                id: 2,
                name: "Vegetables"
            }
        ],
        price: "N6,500"
    }
    return(
        <div className="product-add">
            <AddToCart product={productDescription} />
        </div>
    );
}

export default ProductAdd;