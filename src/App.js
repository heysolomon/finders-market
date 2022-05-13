import { useState } from "react";

import ProductCategories from "./components/ProductCategories/ProductCategories";
import ProductCards from "./components/ProductCards/ProductCards";
import Modal from "./components/UI/Modal/Modal"
import ProductInfo from "./components/ProductInfo/ProductInfo";

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
  );
}

export default App;
