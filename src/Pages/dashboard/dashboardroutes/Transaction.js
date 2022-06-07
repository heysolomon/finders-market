const Transaction = () => {
  const transactioninfo = [
    {
      id: 1,
      info: "You made a Withdrawal.",
      debit: "22,000.00",
      credit: "",
      date: "2/4/22",
    },
    {
      id: 2,
      info: "vfd sent you.",
      debit: "",
      credit: "+22,00.00",
      date: "2/4/22",
    },

    {
      id: 3,
      info: "You made a Withdrawal.",
      debit: "20,000.00",
      credit: "",
      date: "2/4/22",
    },
    {
      id: 4,
      info: "You made a Withdrawal.",
      debit: "20,000.00",
      credit: "",
      date: "2/4/22",
    },

    {
      id: 4,
      info: "You made a Withdrawal.",
      credit: "+22,00.00",
      date: "2/4/22",
    },
  ];
  return (
    <div className="mx-[9%]">
      <div className="flex flex-col justify-center ">
        <table className="w-full">
          <thead className="">
            <tr>
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              ></th>
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              ></th>
            </tr>
          </thead>
          <tbody>
            {transactioninfo.map((info) => (
              <tr className="bg-white shadow-2xl  ">
                <td className="text-sm border-b-2  text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  <p>{info.info}</p>
                  <p className="text-xs m-1">{info.date}</p>
                </td>

                <td className="text-sm border-b-2 pl-[18%] text-green-500 font-light px-6 py-4 whitespace-nowrap">
                  <p>{info.credit}</p>
                  <p className="text-gray-900">{info.debit}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transaction;
