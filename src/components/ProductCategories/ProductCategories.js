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
      name: "roots&tubers",
      img: "Assets/Images/cocoyam.png"
    },

    {
      id: 5,
      name: "vegetables",
      img: "Assets/Images/carrots.png"
    },
  ];

export default function ProductCategories() {

    return (
      <>
      <div className="flex  justify-between items-center pt-10 mx-5">
      <h2 className="sm:font-bold font-semibold sm:text-xl ">Categories</h2>
      <p className="sm:font-bold font-semibold sm:hidden">See All</p>
      </div>
        <div className=" overflow-scroll sm:overflow-hidden w-full flex justify-start sm:max-w-[1040px]">
          <div className="flex w-600px  sm:w-full justify-around">
            {productCategories.map(product => 
                (<ProductCategory key={product.id} productName={product.name} productImg={product.img} />)
            )}
        </div>
        </div>
        </>
    );
}