import React from "react";
import Header from "../../components/Header/Header";
import { Rides } from "../../components/Logistics/Rides";
import Footer from '../../components/footer/Footer'

export const LogisticsPage = () => {
  return (
    <div>
      <Header />
      <Rides />
      <Footer />
    </div>
  );
};
