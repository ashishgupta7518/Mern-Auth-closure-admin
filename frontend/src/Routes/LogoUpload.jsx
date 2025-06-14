import React from "react";
import { useState } from "react";

const LogoUpload = () => {

  const [logoFile, setLogoFile] = useState(null);

   const handleFileChange = (e) => {
    const file = e.target.files[0];
    setLogoFile(file);
  };


   const handleLogoUpload = () => {
    if (logoFile) {
      console.log("Selected file:", logoFile);
      alert(`File "${logoFile.name}" ready for upload.`);
      // You can now send `logoFile` to your backend or storage service
    } else {
      alert("Please select a file first.");
    }
  };  


  return <div className="p-6 " >
    <h1 className="text-center font-semibold text-lg">Logo Upload</h1>
    <p>Upload your logo here.</p>
     <input
        type="file"
        accept="image/*"
        className="p-3 border border-green-500 m-2"
        onChange={handleFileChange}
      />

      <button
        type="button"
        className="px-6 py-4 m-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
        onClick={handleLogoUpload}
      >
        Upload
      </button>
  </div>;
};

export default LogoUpload;
