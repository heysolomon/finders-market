import { useState } from "react";


function ProfilePic() {
	const [file, setFile] = useState();
	function handleChange(e) {
		console.log(e.target.files);
		setFile(URL.createObjectURL(e.target.files[0]));
	}

	return (
        <div className="grid grid-cols-2 w-full">
            <div className="relative ml-[20%] mt-[20%]">
                <div className="rounded-full shadow-xl">
                    <img className="w-full rounded-full " alt="" src={file} />
                </div>
            </div> 
            <div>
                <p className="bg- border-2 py-1">Add Image</p>
                <input type="file" className="opacity-0 w-1/3 absolute mt-[-20px]" onChange={handleChange}/>
            </div>
        </div>

	);
}

export default ProfilePic;
