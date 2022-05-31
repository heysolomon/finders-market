import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { ProductsContext } from "./Helper/Context";
import Cart from "./Pages/Cart/Cart";
import FormExample from "./Pages/Examples/FormExample";
import LandingPage from "./Pages/LandingPage/LandingPage";
import Congrate from "./view/Congrate";
import Farmer from "./view/dashboard/Farmer";
import Storage from "./view/dashboard/Storage";

import Logistic from "./view/dashboard/Logistic";

import Notification from "./view/dashboard/Notification";
import Personalinfo from "./view/landingpage/logisticreg/Personalinfo";
import VehicleReg from "./view/landingpage/logisticreg/VehicleReg";
import Service from "./view/landingpage/Service";
import Business from "./view/landingpage/signin/Business";
import EmailVari from "./view/landingpage/signin/EmaillVeri";
import Signin from "./view/landingpage/signin/Signin";
import Space from "./view/landingpage/storage/Space";
import StorageSignin from "./view/landingpage/storage/StorageSignin";
import Work from "./view/Work";
import Dashboard from "./components/dashboard/Dashboard";
import Wallet from "./components/dashboard/Wallet";
// import Dashboardsidebar from "./components/Dashboardsidebar";
import BookingForm from "./view/BookingForm";
import { Checkout } from "./Pages/Checkout/Checkout";
import { CheckoutSuccess } from "./Pages/Checkout/Success";
import { Facilities } from "./Pages/Storage/StoragePage/Facilities";
import { StorageBooking } from "./Pages/Storage/Bookings/BookingForm";
import productsList from './data/products.json'
// import User from "./view/landingpage/signin/User";

function App() {
  const [products, setProducts] = useState(productsList);
  return (
    <BrowserRouter>
      <ProductsContext.Provider value={{ products, setProducts }}>
        <div className="App">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/form" element={<FormExample />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/business" element={<Business />} />
            <Route path="/emailvari" element={<EmailVari />} />
            <Route path="/congratulation" element={<Congrate />} />
            <Route path="/service" element={<Service />} />
            <Route path="/Vehiclereg" element={<VehicleReg />} />
            <Route path="/Personalinfo" element={<Personalinfo />} />
            <Route path="/storageSignin" element={<StorageSignin />} />
            <Route path="/space" element={<Space />} />
            <Route path="/work" element={<Work />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/notification" element={<Notification />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/farmer" element={<Farmer />} />
            <Route path="/booking" element={<BookingForm />} />
            <Route path="/storage" element={<Storage />} />
            <Route path="/logistic" element={<Logistic />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/checkout/success" element={<CheckoutSuccess />} />
            <Route path="/storage-page" element={<Facilities />} />
            <Route path="/storage-page/booking" element={<StorageBooking />} />
          </Routes>
        </div>
      </ProductsContext.Provider>
    </BrowserRouter>
  );
}

export default App;
