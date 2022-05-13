import CartProduct from "../../components/Cart/CartProduct";
import PaymentSummary from "../../components/Cart/PaymentSummary";
import coco from '../../images/coco.svg'
import maize from '../../images/corn.svg'
import carrot from '../../images/carrot.svg'
import './cart.css'

const Cart = () => {
    
    const cartProducts = [
        {
            id: 1,
            name: "Coco",
            // image: Rice,
            price: "N35, 000",
            quantity: "1 bag",
            img: coco
        },
        {
            id: 2,
            name: "Corn",
            // image: Rice,
            price: "N25, 000",
            quantity: "1 bag",
            img: maize
        },
        {
            id: 3,
            name: "Carrots",
            // image: Rice,
            price: "N25, 000",
            quantity: "2 bags",
            img: carrot
        }
    ]

    return(
        <div className="cart">
            {/* <h3 className="green">Cart</h3> */}
            <CartProduct products={ cartProducts }/>
            <PaymentSummary products={ cartProducts } />
        </div>
    );
}

export default Cart