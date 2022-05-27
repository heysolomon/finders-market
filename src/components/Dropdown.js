const Dropdown = (props) => {
  return (
    <div className="mt-5">
      <label>{props.label}</label>
      <select
        className="flex m-auto my-4 justify-between items-center text-md py-4 rounded-lg w-full 
            bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md
            focus:placeholder-gray-500
            focus:bg-white 
            focus:border-gray-600  
            focus:outline-none"
        name="cars"
      >
        <option value="mercedes">items-1</option>
        <option value="mercedes">items-2</option>
        <option value="mercedes">items-3</option>
        <option value="mercedes">items-4</option>
        <option value="mercedes">items-5</option>
        <option value="mercedes">items-6</option>
        <option value="mercedes">items-7</option>
      </select>
    </div>
  );
};

export default Dropdown;
