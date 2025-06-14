import React, { useState, useEffect } from "react";

const Smsapi = ({ title, id }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const [formData, setFormData] = useState({
    rawUrl: "",
    mobileNumber: "",
    otp: "",
    dltId: "",
    templateName: "",
    url: "https://apps.vibgyortel.in/client/api/sendmessage?apikey=b6037112e9314122&mobiles=[mobile]&",
  });

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      setIsExpanded(true);
    } else if (e.key === "ArrowUp") {
      setIsExpanded(false);
    }
  };

  useEffect(() => {
    const containerElement = document.getElementById(`container-${id}`);
    containerElement?.addEventListener("keydown", handleKeyDown);
    return () => {
      containerElement?.removeEventListener("keydown", handleKeyDown);
    };
  }, [isExpanded, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    console.log("Form Data:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <div
      className="m-5 p-5 bg-white rounded-lg shadow"
      id={`container-${id}`}
      tabIndex={0}
    >
      <div className="border border-gray-300 rounded-lg mb-5 overflow-hidden">
        <div
          className="flex justify-between items-center bg-blue-100 text-blue-800 px-4 py-3 font-semibold cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <span>{title}</span>
          <span>{isExpanded ? "▲" : "▼"}</span>
        </div>

        {isExpanded && (
          <div className="px-4 py-4">
            <div className="mb-4">
              <label className="block mb-2 text-gray-700 font-medium">
                Raw URL
              </label>
              <input
                type="text"
                name="rawUrl"
                placeholder="URL"
                value={formData.rawUrl}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2 text-gray-700 font-medium">
                URL
              </label>
              <input
                type="text"
                value={formData.url}
                readOnly
                className="w-full p-2 border border-gray-300 rounded-md bg-gray-100 text-gray-500"
              />
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex-1 min-w-[200px]">
                <label className="block mb-2 text-gray-700 font-medium">
                  Mobile Number
                </label>
                <input
                  type="text"
                  name="mobileNumber"
                  placeholder="MOBILE NUMBER"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="flex-1 min-w-[200px]">
                <label className="block mb-2 text-gray-700 font-medium">
                  Mobile OTP
                </label>
                <input
                  type="text"
                  name="otp"
                  placeholder="OTP"
                  value={formData.otp}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="flex-1 min-w-[200px]">
                <label className="block mb-2 text-gray-700 font-medium">
                  DLT ID
                </label>
                <input
                  type="text"
                  name="dltId"
                  placeholder="DLT ID"
                  value={formData.dltId}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="mt-4 mb-4">
              <label className="block mb-2 text-gray-700 font-medium">
                Template Name
              </label>
              <input
                type="text"
                name="templateName"
                placeholder="Template Name"
                value={formData.templateName}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="flex gap-4 mt-6">
              <button
                className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                onClick={handleSubmit}
              >
                Save
              </button>
              <button className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
                Verify
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Smsapi;
