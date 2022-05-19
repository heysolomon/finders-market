// import { useEffect, useState } from "react";
import {  useCart } from "react-use-cart";
import { connect } from "react-redux";
import CartProduct from "../../components/Cart/CartProduct";
import PaymentSummary from "../../components/Cart/PaymentSummary";

import classes from './cart.module.css'
import Navbar from "../../components/Navbar/Navbar";

const Cart = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
        cartTotal,
      } = useCart();

    
    return(
        <div>
        <Navbar />
            <div className={classes.cart}>
                {/* <h3 className="green">Cart</h3> */}
                <CartProduct 
                products={ items } 
                removeItem={removeItem} 
                isEmpty={isEmpty}
                updateItemQuantity={updateItemQuantity}
                />
                <PaymentSummary 
                products={ items } 
                items={totalUniqueItems} 
                cartTotal={cartTotal}
                />
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        cart: state.shop.cart
    }
}

export default connect(mapStateToProps)(Cart)