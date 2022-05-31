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
// import { ProductsContext } from "../../Helper/Context";
import { ProductsContext } from "../../Helper/Context";

const LandingPage = () => {

  const {products, setProducts} = useContext(ProductsContext)


  const [showModal, setShowModal] = useState(false);
  const [productInfo, setProductInfo] = useState({});
  const [showSignUp, setShowSignUp] = useState(false)
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
    setShowSignUp(true);
  };

  const openLoginModal = () => {
      setShowLogin(true)
  }

  return (
    <div className="w-screen">
      <Header showInfo={openSignUpModal} showLogin={openLoginModal} />
      {showSignUp && (
        <Modal closeModal={closeModal}>
          <User />
        </Modal>
      )}
      {showLogin && (
        <Modal closeModal={closeModal}>
          <Login />
        </Modal>
      )}
      <div className="max-w-[1040px] mx-auto w-screen">
        {showModal && (
          <Modal closeModal={closeModal}>
            <ProductInfo productDetails={productInfo} />
          </Modal>
        )}
        <ProductCategories products={products}  setProducts={setProducts} />
        <ProductCards products={products} showInfo={handleProductClick} />
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
