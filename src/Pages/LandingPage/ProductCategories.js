const ProductCategories = ({categories}) => {
    return (
        <div className="product-categories">
            {categories.map((category) => (
                <div className="category" key={category.id}>
                    <img src={category.img} alt=""/>
                    <p>{category.name}</p>
                </div>
            ))}
        </div>
    );
}

export default ProductCategories;