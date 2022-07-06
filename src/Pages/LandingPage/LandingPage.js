// import Footer from '../../components/footer/Footer';
import { useContext, useState } from "react";
import ProductCards from "../../components/ProductCards/ProductCards";
import ProductCategories from "../../components/ProductCategories/ProductCategories";
import Modal from "../../components/UI/Modal/Modal";
import ProductInfo from "../../components/ProductInfo/ProductInfo";
import Header from "../../components/Header/Header";
import Footer from "../../components/footer/Footer";
import User from "../../view/landingpage/signin/User";
import Login from "../../view/landingpage/signin/Login";
import { ProductsContext } from "../../Helper/Context";

const LandingPage = () => {
  const { products, setProducts } = useContext(ProductsContext);

  const [showModal, setShowModal] = useState(false);
  const [productInfo, setProductInfo] = useState({});
  const [showSignUp, setShowSignUp] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const handleProductClick = (props) => {
    const { description, productPrice, productImg, productId } = props;
    setShowModal(true);
    setProductInfo({ description, productPrice, productImg, productId });
  };
  const closeModal = () => {
    setShowModal(false);
    setShowSignUp(false);
    setShowLogin(false);
  };
  const openSignUpModal = () => {
    setShowLogin(false);
    setShowSignUp(true);
  };

  const openLoginModal = () => {
    setShowSignUp(false);
    setShowLogin(true);
  };

  return (
    <div className="overflow-x-hidden">
      <Header showInfo={openSignUpModal} />
      {(showSignUp || showLogin) && (
        <Modal closeModal={closeModal}>
          {showSignUp ? (
            <User showLogin={openLoginModal} modal={showSignUp} />
          ) : (
            showLogin && <Login showInfo={openSignUpModal} modal={showLogin} />
          )}
        </Modal>
      )}
      {/* {showSignUp && (
        <Modal closeModal={closeModal}>
          <User showLogin={openLoginModal} modal={showModal} />
        </Modal>
      )}
      {showLogin && (
        <Modal closeModal={closeModal}>
          <Login showInfo={openSignUpModal} modal={showModal} />
        </Modal>
      )} */}
      <div className="max-w-[1040px] mx-auto w-screen">
        {showModal && (
          <Modal closeModal={closeModal}>
            <ProductInfo productDetails={productInfo} />
          </Modal>
        )}
        <ProductCategories products={products} setProducts={setProducts} />
        <ProductCards products={products} showInfo={handleProductClick} />
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
