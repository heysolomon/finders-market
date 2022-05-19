
export default function ProductCategory({productName, productImg}) {
    return(
        <div className="w-[80px] flex flex-col items-center m-4 cursor-pointer">
            <div className="w-full rounded-full border-[2px] border-[#4F7F19] m-2">
                <img className="w-full object-cover rounded-full" src={require(`../../../${productImg}`)} alt="product-img" />
            </div>
            <p className="text-[#4F7F19] font-semibold">{productName}</p>
        </div>
    );
}