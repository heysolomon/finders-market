import { Button } from "../UI/Button/Button";


const PaymentSummary = ({ items, cartTotal}) => {
    return(
        <div className="sm:pl-[10px] w-full">
            <h3 className=" my-3 sm;my-0">Payment Summary</h3>
            <div className="border-[1px] border-[#C4C4C4] w-full h-[350px] p-[10px] rounded-[10px] shadow-md flex flex-col justify-between">
                <div className="w-full h-[70px] rounded-[10px] bg-[#C4C4C4]">
                    
                </div>

                <p>Order summary</p>
                <div className="flex">
                    <h4>Products: ({items}) items</h4>
                </div>
                <h4>Delivery fee: N1,500</h4>
                <div className="flex flex-col items-end justify-end h-[55%]">
                    <h4>Total: (&#8358; {cartTotal})</h4>
                    
                    <Button className="w-full border-0 rounded-[5px]" background="#4F7F19" color="#fff">
                        Proceed to Checkout
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default PaymentSummary