const TextArea = (props) => {
    return (


<div className="flex flex-col w-full mt-4 ">
        <label className="mb-4">{props.label}</label>
        <textarea
      class="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none
      "
      id="exampleFormControlTextarea1"
      rows="3"
      placeholder="Your message"
    ></textarea>
    </div>


      );

}
 
export default TextArea;