import React, { useState } from "react";
import Login from "../../../view/landingpage/signin/Login";
import User from "../../../view/landingpage/signin/User";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/Header/Header";
import Modal from "../../../components/UI/Modal/Modal";
import { Facility } from "../../../components/Storage/Facility";

export const Facilities = () => {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const closeModal = () => {
    setShowSignUp(false);
    setShowLogin(false);
  };
  const openSignUpModal = () => {
    setShowSignUp(true);
  };

  const openLoginModal = () => {
    setShowLogin(true);
  };

  return (
    <div>
      <Header showInfo={openSignUpModal} showLogin={openLoginModal} />
      {showSignUp && (
        <Modal closeModal={closeModal}>
          <User />
        </Modal>
      )}
      {showLogin && (
        <Modal closeModal={closeModal}>
          <Login />
        </Modal>
      )}
      <div className="max-w-[1040px] mx-auto mt-[80px]">
        <h2 className="text-2xl mb-5">Explore your choices</h2>
        <Facility />
      </div>
      <Footer />
    </div>
  );
};
