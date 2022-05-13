
export default function ProductCard(props) {
    return(
        <div className="w-[80%] h-[300px] rounded-lg my-2 bg-[white] shadow-[#ccc] shadow-md cursor-pointer hover:scale-105 transition ease-in-out duration-150" onClick={() => props.showInfo(props)}>
            <div className="w-full h-[50%] mb-2">
                <img className="w-full h-full object-cover rounded-t-lg" src={require(`../../../${props.productImg}`)} alt="product-img" />
            </div>
            <h4 className="font-semibold text-xl m-2 ">{props.productName}</h4>
            <p className="m-2">{props.productPrice} per {props.productSize}</p>
        </div>
    );
}