import { useState } from "react";

function Upload() {
  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <div className="grid grid-cols-2 w-full">
      <div className="rounded-lg shadow-xl bg-gray-50">
        <img className="w-full" src={file} alt="this is a description" />
      </div>

      <div className="flex justify-center mb-8 ">
        <div className="rounded-lg shadow-xl bg-gray-50 ">
          <div className="m-4">
            <label className="inline-block mb-2 text-gray-500">
              Upload Image(jpg,png,svg,jpeg)
            </label>
            <div className="flex items-center justify-center w-full">
              <label className="flex flex-col w-full h-32 border-4 border-dashed hover:bg-gray-100 hover:border-gray-300">
                <div className="flex flex-col items-center justify-center pt-7">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-12 h-12 text-gray-400 group-hover:text-gray-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                    Select a photo
                  </p>
                </div>
                <input
                  type="file"
                  className="opacity-0"
                  onChange={handleChange}
                />
              </label>
            </div>
          </div>
          <div className="flex p-2 space-x-4"></div>
        </div>
      </div>
    </div>
  );
}

export default Upload;
