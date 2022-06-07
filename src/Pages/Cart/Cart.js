// import { useEffect, useState } from "react";
import { useCart } from "react-use-cart";
import { connect } from "react-redux";
import CartProduct from "../../components/Cart/CartProduct";
import PaymentSummary from "../../components/Cart/PaymentSummary";

import classes from "./cart.module.css";
import Navbar from "../../components/Navbar/Navbar";
import Modal from "../../components/UI/Modal/Modal";
import User from "../../view/landingpage/signin/User";
import Login from "../../view/landingpage/signin/Login";
import { useState } from "react";

const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
    cartTotal,
  } = useCart();

  const [showSignUp, setShowSignUp] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const closeModal = () => {
    setShowSignUp(false);
    setShowLogin(false);
  };
  const openSignUpModal = () => {
    setShowLogin(false);
    setShowSignUp(true);
  };

  const openLoginModal = () => {
    setShowSignUp(false);
    setShowLogin(true);
  };

  return (
    <div>
      <Navbar showInfo={openSignUpModal} showLogin={openLoginModal} />
      {showSignUp && (
        <Modal closeModal={closeModal} >
          <User showLogin={openLoginModal} />
        </Modal>
      )}
      {showLogin && (
        <Modal closeModal={closeModal}>
          <Login showInfo={openSignUpModal} />
        </Modal>
      )}
      <div className={classes.cart}>
        {/* <h3 className="green">Cart</h3> */}
        <CartProduct
          products={items}
          removeItem={removeItem}
          isEmpty={isEmpty}
          updateItemQuantity={updateItemQuantity}
        />
        <PaymentSummary
          products={items}
          items={totalUniqueItems}
          cartTotal={cartTotal}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Cart);
