import ProductCategory from "./ProductCategory/ProductCategory";
const productCategories = [
    {
      id: 1,
      name: "livestock",
      img: "Assets/Images/livestock.png"
    },
    {
      id: 2,
      name: "grains",
      img: "Assets/Images/grains.png"
    },
    {
      id: 3,
      name: "roots & tubers",
      img: "Assets/Images/cocoyam.png"
    },
    {
      id: 4,
      name: "fish",
      img: "Assets/Images/fishes.png"
    },
    {
      id: 5,
      name: "vegetables",
      img: "Assets/Images/carrots.png"
    }
  ];

export default function ProductCategories() {

    return (
      <>
      <h2 className="font-bold text-xl ml-4">Popular Categories</h2>
        <div className="w-full flex justify-center">
          <div className="flex w-[70%] h-full justify-around">
            {productCategories.map(product => 
                (<ProductCategory key={product.id} productName={product.name} productImg={product.img} />)
            )}
        </div>
        </div>
        </>
    );
}