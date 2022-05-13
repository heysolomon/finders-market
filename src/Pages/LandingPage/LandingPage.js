import coco from '../../images/coco.svg';
import egg from '../../images/egg.svg';
import peas from '../../images/peas.svg';
import corn from '../../images/corn.svg';
import carrot from '../../images/carrot.svg';
import fish from '../../images/fish.svg'

// Pictures for the categories
import fruits from '../../images/fruits.svg'
import grain from '../../images/grains.svg'
import livestock from '../../images/livestock.svg'
import root from '../../images/roots.svg'
import './style.css'
import ProductsLists from './ProductsList';
import ProductCategories from './ProductCategories';
import Header from '../../components/Header/Header';
// import Footer from '../../components/footer/Footer';

const LandingPage = () => {
    // products data
    const products = [
        {
            id: 1,
            name: "Cocoyams",
            price: "N8000",
            size: "bag",
            img: coco
        },
        {
            id: 2,
            name: "Eggs",
            price: "N8000",
            size: "crate",
            img: egg
        },
        {
            id: 3,
            name: "Green peas",
            price: "N8000",
            size: "bag",
            img: peas
        },
        {
            id: 4,
            name: "Corn",
            price: "N8000",
            size: "bag",
            img: corn
        },
        {
            id: 5,
            name: "Carrots",
            price: "N8000",
            size: "bag",
            img: carrot
        },
        {
            id: 6,
            name: "Cat fishes",
            price: "N8000",
            size: "bag",
            img: fish
        },
        {
            id: 7,
            name: "Cocoyams",
            price: "N8000",
            size: "bag",
            img: coco
        },
        {
            id: 8,
            name: "Eggs",
            price: "N8000",
            size: "crate",
            img: egg
        },
        {
            id: 9,
            name: "Green peas",
            price: "N8000",
            size: "bag",
            img: peas
        },
        {
            id: 4,
            name: "Corn",
            price: "N8000",
            size: "bag",
            img: corn
        },
        {
            id: 10,
            name: "Carrots",
            price: "N8000",
            size: "bag",
            img: carrot
        },
        {
            id: 11,
            name: "Cat fishes",
            price: "N8000",
            size: "bag",
            img: fish
        }
    ]

    const categories = [
        {
            id: 1,
            name: "Livestock",
            img: livestock
        },
        {
            id: 2,
            name: "Roots & Tubers",
            img: root
        },
        {
            id: 3,
            name: "Grains",
            img: grain
        },
        {
            id: 4,
            name: "Fruits & Vegetables",
            img: fruits
        },
        {
            id: 5,
            name: "Spices",
            img: fruits
        },
        {
            id: 6,
            name: "Legumes",
            img: fruits
        }
    ]

    return (
        <div className="landing-page">
            <Header />
            <div style={{
                width: "100%",
                padding: "50px 0 50px 0",
                backgroundColor: "white"
                }}>
                <h2>Product Categories</h2>
                <ProductCategories categories={categories} />
            </div>
            <ProductsLists products={products} />
        </div>
    );
}

export default LandingPage;