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
    showSignUp && setShowSignUp(false);
    showLogin && setShowLogin(false);
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
      <Modal closeModal={closeModal} show={showSignUp || showLogin}>
        {showSignUp ? (
          <User showLogin={openLoginModal} modal={showSignUp} />
        ) : (
          showLogin && <Login showInfo={openSignUpModal} modal={showLogin} />
        )}
      </Modal>

      <div className="max-w-[1040px] m-auto w-screen">
        <Modal closeModal={closeModal} show={showModal}>
          <div
            className="z-10 sm:px-10 py-8 bg-[white] fixed  max-w-[900px]
            w-[90%] top-[50%] left-[50%] rounded-sm transition-all ease-in-out duration-150"
            style={{
              transform: showModal
                ? "scale(1) translate(-50%, -50%)"
                : "scale(0) translate(-50%, -50%)",
            }}
          >
            <ProductInfo productDetails={productInfo} />
          </div>
        </Modal>
        <ProductCategories products={products} setProducts={setProducts} />
        <ProductCards products={products} showInfo={handleProductClick} />
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
