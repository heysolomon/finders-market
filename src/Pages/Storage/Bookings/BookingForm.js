import { Book } from "../../../components/Storage/BookingForm/Book";

export const StorageBooking = () => {
  return (
    <div className="flex justify-center fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-20 bg-[white] max-h-[90%] rounded-xl">
      <div className="flex flex-col justify-center mt-[35px] w-full text-center">
        <h1 className="text-2xl">Booking Form</h1>
        <p className="text-xs text-gray-500 mt-4">
          A copy of this form will be sent to you by mail
        </p>

        <Book />
      </div>
    </div>
  );
};
