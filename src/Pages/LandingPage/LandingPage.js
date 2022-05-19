// import Footer from '../../components/footer/Footer';
import { useState } from "react";
import ProductCards from "../../components/ProductCards/ProductCards";
import ProductCategories from "../../components/ProductCategories/ProductCategories";
import Modal from "../../components/UI/Modal/Modal";
import ProductInfo from "../../components/ProductInfo/ProductInfo";
import Header from "../../components/Header/Header";

const LandingPage = () => {
    const [showModal, setShowModal] = useState(false);
    const [productInfo, setProductInfo] = useState({});
    const handleProductClick = (props) => {
        const {description, productPrice, productImg, productId} = props;
        setShowModal(true);
        setProductInfo({description, productPrice, productImg, productId});
    }
    const closeModal = () => {
        setShowModal(false);
}
    
    return (
        <div className="w-screen">
            <Header />
            <div className="max-w-[1040px] mx-auto w-screen">
                {
                    showModal && 
                    <Modal closeModal={closeModal}>
                        <ProductInfo productDetails={productInfo}/>
                    </Modal>
                }
                <ProductCategories />
                <ProductCards showInfo={handleProductClick}/>
            </div>
        </div>
    );
}

export default LandingPage;