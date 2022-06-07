import React, { useState } from "react";
import Login from "../../../view/landingpage/signin/Login";
import User from "../../../view/landingpage/signin/User";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/Header/Header";
import Modal from "../../../components/UI/Modal/Modal";
import { Facility } from "../../../components/Storage/Storage/Facility";
// import BookingForm from "../../../view/BookingForm";
import { StorageBooking } from "../Bookings/BookingForm";

export const Facilities = () => {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [ showBookings, setShowBookings ] = useState(false)

  const closeModal = () => {
    setShowSignUp(false);
    setShowLogin(false);
    setShowBookings(false)
  };
  const openSignUpModal = () => {
    setShowLogin(false);
    setShowSignUp(true);
  };

  const openLoginModal = () => {
    setShowSignUp(false);
    setShowLogin(true);
  };

  const openBookings = () => {
    setShowBookings(true)
  }

  return (
    <div>
      <Header showInfo={openSignUpModal} showLogin={openLoginModal} />
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
      {showBookings && (
        <Modal closeModal={closeModal}>
          <StorageBooking />
        </Modal>
      )}
      <div className="max-w-[1040px] mx-auto mt-[80px]">
        <h2 className="text-2xl mb-5">Explore your choices</h2>
        <Facility openBookings={openBookings} />
      </div>
      <Footer />
    </div>
  );
};
