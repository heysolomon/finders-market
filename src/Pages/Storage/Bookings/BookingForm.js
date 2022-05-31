import React, { useState } from "react";
import Navbar from "../../../components/Navbar/Navbar";
import { Book } from "../../../components/Storage/BookingForm/Book";
import Modal from "../../../components/UI/Modal/Modal";
import Login from "../../../view/landingpage/signin/Login";
import User from "../../../view/landingpage/signin/User";

export const StorageBooking = () => {
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
      <Navbar showInfo={openSignUpModal} showLogin={openLoginModal} />
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
      <div className="flex flex-col justify-center mt-[90px] w-full text-center">
        <h1 className="text-2xl">Booking Form</h1>
        <p className="text-xs text-gray-500 mt-4">
          A copy of this form will be sent to you by mail
        </p>

        <Book />
      </div>
    </div>
  );
};
