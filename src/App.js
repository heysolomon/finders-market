import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Description from './Components/Product Description/Description';
// import Header from './Components/Header/Header';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Header /> */}
        <Routes>
          <Route path='/' element={<Description />} />
          {/* <Route path="/" element={<LandingPage />} />
          <Route path="/details" element={<PersonalDetails/>} />
          <Route path="/add-to-cart" element={<ProductAdd />} />
          <Route path="/logistics" element={<Logisic />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/payment" element={<PaymentDetails />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/service-provider-signup" element={<SPSignup />} />
          <Route path="/farmer-signup" element={<FarmerSignup />} />
          <Route path="/business-info" element={<BusinessInfo />} />
          <Route path="/farmer-registration-complete" element={<RegComplete />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
