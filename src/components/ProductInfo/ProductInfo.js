
export default function ProductInfo({productDetails}) {
    return(
        <div className="px-10 py-8 z-10 bg-[white] fixed max-w-[1000px] w-[1000px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-sm">
                <div className="flex justify-around items-center">
                    <div className="h-[270px] w-[250px]">
                        <img className="w-full h-full object-cover" src={require(`../../${productDetails.productImg}`)} alt="product-img" />
                    </div>
                    <div className="w-[40%]">
                        <h2 className="font-semibold text-2xl my-3">Description</h2>
                        <p className="leading-8 text-sm">
                        {productDetails?.description}
                        </p>
                        <div>
                            <p className="font-semibold text-xl my-3">Price: <span>{productDetails.productPrice}</span></p>
                        </div>
                        <div className="border border-[black] w-[200px] flex p-1 justify-between items-center rounded-md">
                            <button className="p-2 w-[35px] h-[30px] bg-[#4F7F19] text-[white] text-xl font-semibold flex justify-center items-center rounded-sm">&#8722;</button>
                            <span>1</span>
                            <button className="p-2 w-[35px] h-[30px] bg-[#4F7F19] text-[white] text-xl font-semibold flex justify-center items-center rounded-sm">&#43;</button>
                        </div>
                    </div>
                </div>
            </div>
    );
}