import { useState } from "react";

function Upload() {
  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <div className="grid grid-cols-2 w-full">
        <img className="w-full" src={file} alt="this is a description" />
        <input type="file" className="opacity-0" onChange={handleChange} />
    </div>
  );
}

export default Upload;
