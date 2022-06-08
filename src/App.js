import { BrowserRouter, Route, Routes} from "react-router-dom";
import { useState } from "react";
import { ProductsContext, LoginContext } from "./Helper/Context";
import Cart from "./Pages/Cart/Cart";
import FormExample from "./Pages/Examples/FormExample";
import LandingPage from "./Pages/LandingPage/LandingPage";
import Congrate from "./view/Congrate";
import Personalinfo from "./view/landingpage/logisticreg/Personalinfo";
import VehicleReg from "./view/landingpage/logisticreg/VehicleReg";
import Service from "./view/landingpage/Service";
import Business from "./view/landingpage/signin/Business";
import EmailVari from "./view/landingpage/signin/EmaillVeri";
import Signin from "./view/landingpage/signin/Signin";
import Space from "./view/landingpage/storage/Space";
import StorageSignin from "./view/landingpage/storage/StorageSignin";
import Work from "./view/Work";
import { Checkout } from "./Pages/Checkout/Checkout";
import { CheckoutSuccess } from "./Pages/Checkout/Success";
import { Facilities } from "./Pages/Storage/StoragePage/Facilities";
import { StorageBooking } from "./Pages/Storage/Bookings/BookingForm";
import { BookingSuccess } from "./Pages/Storage/Bookings/Success/BookingSuccess";
import { LogisticsPage } from "./Pages/Logistics/Logistics";

// Dashboard
import Dashboard from "./Pages/dashboard/Dashboard";
import FarmernewProduct from "./Pages/dashboard/dashboardroutes/farmer/FarmerNewProduct";
import FarmerProduct from "./Pages/dashboard/dashboardroutes/farmer/FarmerProduct";
import FarmerTrans from "./Pages/dashboard/dashboardroutes/farmer/FarmerTrans";
import FarmerPage from "./Pages/dashboard/dashboardroutes/Farmerpage";
import Booking from "./Pages/dashboard/dashboardroutes/logistic/Booking";
import LogisticTrans from "./Pages/dashboard/dashboardroutes/logistic/LogisticTrans";
import LogisticPage from "./Pages/dashboard/dashboardroutes/LogisticPage";
import NotificationPage from "./Pages/dashboard/dashboardroutes/NotificationPage";
import SettingsPage from "./Pages/dashboard/dashboardroutes/SettingsPage";
import Storagepage from "./Pages/dashboard/dashboardroutes/StoragePage";
import { Home } from "./Pages/dashboard/Home";
import Transaction from "./Pages/dashboard/dashboardroutes/Transaction";

function App() {
  const [products, setProducts] = useState([]);
  const [loggedIn, setLoggedIn] = useState(null);
  const [loggingIn, setLoggingIn] = useState(false);
  const [signingIn, setSigningIn] = useState(false);

  return (
    <BrowserRouter>
      <ProductsContext.Provider value={{ products, setProducts }}>
        <LoginContext.Provider
          value={{
            loggedIn,
            setLoggedIn,
            loggingIn,
            setLoggingIn,
            signingIn,
            setSigningIn,
          }}
        >
          <div className="App">
            <Routes >
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
              {loggedIn && (
                <Route path="/dashboard" element={<Dashboard />}>
                  <Route path="" element={<Home />} />

                  {/* Farmer routes */}
                  <Route path="farmer" element={<FarmerPage />}>
                    <Route path="" element={<Transaction />} />
                    <Route path="farmerproduct" element={<FarmerProduct />} />
                    <Route
                      path="farmernewproduct"
                      element={<FarmernewProduct />}
                    />
                    <Route path="farmertrans" element={<FarmerTrans />} />
                  </Route>

                  {/* Logistics routes */}
                  <Route path="logistic" element={<LogisticPage />}>
                    <Route path="bookings" element={<Booking />} />
                    <Route path="transaction" element={<LogisticTrans />} />
                  </Route>
                  <Route path="storage" element={<Storagepage />} />
                  <Route path="settings" element={<SettingsPage />} />

                  <Route path="notifications" element={<NotificationPage />} />
                </Route>
              )}

              <Route path="/checkout" element={<Checkout />} />
              <Route path="/checkout/success" element={<CheckoutSuccess />} />
              <Route path="/storage-page" element={<Facilities />} />
              <Route
                path="/storage-page/booking"
                element={<StorageBooking />}
              />
              <Route
                path="/storage-page/booking/success"
                element={<BookingSuccess />}
              />
              <Route path="/logistics-page" element={<LogisticsPage />} />
            </Routes>
            {/* {state?.backgroundLocation &&
              <Routes>
              
            </Routes>
            } */}
          </div>
        </LoginContext.Provider>
      </ProductsContext.Provider>
    </BrowserRouter>
  );
}

export default App;
