import { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import ProductCategories from "./components/ProductCategories/ProductCategories";
import ProductCards from "./components/ProductCards/ProductCards";
import Modal from "./components/UI/Modal/Modal"
import ProductInfo from "./components/ProductInfo/ProductInfo";

import Description from './Components/Product Description/Description';
// import Header from './Components/Header/Header';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [productInfo, setProductInfo] = useState({});
  const handleProductClick = (props) => {
    const {description, productPrice, productImg} = props;
    setShowModal(true);
    setProductInfo({description, productPrice, productImg});
  }
  const closeModal = () => {
    setShowModal(false);
  }
  return (
    <div>
      {showModal && <Modal closeModal={closeModal}>
      <ProductInfo productDetails={productInfo}/>
      </Modal>}
      {/* <Modal>
        <ProductInfo />
      </Modal> */}
      <h1>App</h1>
      <ProductCategories />
      <ProductCards showInfo={handleProductClick}/>
    </div>
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
