import img from "../../dashimg/farmer1.jpg";

const FarmerProduct = () => {
  const productinfo = [
    {
      id: 1,
      date: "2/4/22",
      productimg: "",
      productName: "Fish",
      quantity: "3 Cartons",
      price: "N130,000.00",
      status: "Pending",
    },
    {
      id: 2,
      date: "2/4/22",
      productimg: "",
      productName: "Yam",
      quantity: "3 Cartons",
      price: "N130,000.00",
      active: "In Market",
    },
    {
      id: 2,
      date: "2/4/22",
      productimg: "",
      productName: "Ginger",
      quantity: "5 Bags",
      price: "N130,000.00",
      invaild: "Invaild",
    },
  ];

  return (
    <div>
      <div className="flex flex-col justify-center ">
        <table className="w-[95%] ml-4">
          <thead className="">
            <tr>
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                <p>Product</p>
              </th>

              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                <p>Quantity</p>
              </th>
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                <p>Price</p>
              </th>
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                <p>Status</p>
              </th>
            </tr>
          </thead>
          <tbody>
            {productinfo.map((info) => (
              <tr className="bg-white shadow-2xl border-b-8 border-gray-100  ">
                <td className="text-sm  font-light px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <img alt="" src={img} width="50" />
                    <p className="ml-4">{info.productName}</p>
                  </div>
                </td>
                <td className="text-sm  font-light px-6 py-4 whitespace-nowrap">
                  <p>{info.quantity}</p>
                </td>

                <td className="text-sm text-green-500font-light px-6 py-4 whitespace-nowrap">
                  <p>{info.price}</p>
                </td>
                <td className="text-sm  text-green-500font-light px-6 py-4 whitespace-nowrap">
                  <p>{info.status}</p>
                  <p className="text-green-600">{info.active}</p>
                  <p className="text-red-600">{info.invaild}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FarmerProduct;
