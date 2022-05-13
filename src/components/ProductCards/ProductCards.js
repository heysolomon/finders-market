import ProductCard from "./ProductCard/ProductCard";
import productList from "../../data/products.json";

export default function ProductCards({showInfo}) {
    return (
        <div className="grid grid-cols-4 w-full p-4 gap-2">
            {productList.map(
                product => (
                    <ProductCard 
                    key={product.id} 
                    productName={product.name}
                    productSize={product.size}
                    productImg={product.img}
                    productPrice={product.price}
                    showInfo={showInfo}
                    description={product.description}
                    />
                )
            )}
        </div>
    );
}