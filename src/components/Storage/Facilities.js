import React from "react";
import Footer from "../footer/Footer";
import Header from "../Header/Header";
import { Facility } from "./Facility";

export const Facilities = () => {
  return (
    <div>
      <Header />
      <div className="max-w-[1040px] mx-auto mt-[80px]">
        <h2 className="text-2xl mb-5">Explore your choices</h2>
        <Facility />
      </div>
      <Footer />
    </div>
  );
};
