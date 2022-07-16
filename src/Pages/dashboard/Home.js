import { useSelector } from "react-redux";

export const Home = () => {
  const user = useSelector((state) => state.userInfo);

  return (
    <div className="mt-[80px]">
      <h2 className="text-xl">Hello {user.fullname}</h2>
      <p className="w-[35%] mb-5">your dashboard...</p>

      <div className="grid grid-cols-6 gap-4 grid-rols-2">
        <div className="col-span-2 bg-gray-300 row-span-2"></div>

        <div className="col-span-2 bg-gray-300 row-span-3"></div>

        <div className="col-span-2 bg-gray-300 row-span-3">
          <div className="flex justify-between mx-4 items-center p-2">
            <p>Notifications</p>
            <p>...</p>
          </div>
        </div>
      </div>
    </div>
  );
};
