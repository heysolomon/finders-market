import img from "../../dashboard/dashimg/farmer1.jpg";
import {motion } from 'framer-motion'

const ActiveOrders = () => {

    const productinfo = [
        {
            id: 1,
            date: "2/4/22",
            name: "Smart Watch Full Touch Screen Watch - For Android & IOS",
            productimg: "",
            productName: "Fish",
            quantity: "3 Cartons",
            time: "Delivered between Thursday 11 August and Friday 19 August",
            price: "N130,000.00",
            status: "Pending",
            img: img,
        },
        {
            id: 2,
            date: "2/4/22",
            productimg: "",
            name: "Smart Watch Full Touch Screen Watch - For Android & IOS",
            productName: "Yam",
            time: "Delivered between Thursday 11 August and Friday 19 August",
            quantity: "3 Cartons",
            price: "N130,000.00",
            active: "In Market",
            img: img,
        },
        {
            id: 3,
            date: "2/4/22",
            productimg: "",
            name: "Smart Watch Full Touch Screen Watch - For Android & IOS",
            time: "Delivered between Thursday 11 August and Friday 19 August",
            productName: "Ginger",
            quantity: "5 Bags",
            price: "N130,000.00",
            invaild: "Invaild",
            img: img,
        },
    ];

    return (
        <div>
          { productinfo.map((items) => (
            <motion.div key={items.id}
            initial={{ y: 100}} animate={{ y: 0}} transition={{ duration: .35}} className=" z-0 grid grid-cols-9 gap-5 p-2 shadow-lg m-auto my-10 w-[80%]">
                <div className=" flex col-span-7  items-center p-2">
                    <div className=" mr-5">
                        <img className=" w-32" src={items.img} alt="" />
                       
                    </div>
                    <div className=" ">
                        <p>{items.name}</p>
                        <div className=" py-2 ">
                            <p className=" w-20 bg-[#4f7f19] rounded font-mono text-white text-center">SHIPPED</p>
                            <p>{items.time}</p>
                        </div>
                    </div>
                </div>
                <div className=" col-span-2">
                    <p className=" text-[#4f7f19] text-center">See Details</p>
                </div>
            </motion.div>
           ))}
        </div>
    );
}

export default ActiveOrders;