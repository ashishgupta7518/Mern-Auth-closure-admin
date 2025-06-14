import React, { useState, useEffect } from "react";

const Companydet = ({ title, id }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Keyboard arrow toggle
  useEffect(() => {
    const containerElement = document.getElementById(`container-${id}`);
    const handleKeyDown = (e) => {
      if (e.key === "ArrowDown") setIsExpanded(true);
      else if (e.key === "ArrowUp") setIsExpanded(false);
    };

    containerElement?.addEventListener("keydown", handleKeyDown);
    return () => {
      containerElement?.removeEventListener("keydown", handleKeyDown);
    };
  }, [isExpanded, id]);

  const [formData, setFormData] = useState({
    CompanyName: "",
    CompanyEmail: "",
    CompanyAddress: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    console.log("Form Data:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <div className="m-5 p-5 bg-white rounded-lg shadow" id={`container-${id}`} tabIndex={0}>
      <div className="border border-gray-300 rounded-lg mb-5 overflow-hidden">
        {/* Header */}
        <div
          className="flex justify-between items-center bg-blue-100 text-blue-800 px-4 py-3 font-semibold cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {title} <span>{isExpanded ? "▲" : "▼"}</span>
        </div>

        {/* Content */}
        {isExpanded && (
          <div className="px-4 py-4 space-y-4">
            <div>
              <label className="block mb-1 text-gray-700 font-medium">Company Name</label>
              <input
                type="text"
                name="CompanyName"
                value={formData.CompanyName}
                onChange={handleChange}
                placeholder="Company Name"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label className="block mb-1 text-gray-700 font-medium">Company Email</label>
              <input
                type="email"
                name="CompanyEmail"
                value={formData.CompanyEmail}
                onChange={handleChange}
                placeholder="Email ID"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label className="block mb-1 text-gray-700 font-medium">Company Address</label>
              <input
                type="text"
                name="CompanyAddress"
                value={formData.CompanyAddress}
                onChange={handleChange}
                placeholder="Address"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="flex gap-4 mt-6">
              <button
                onClick={handleSubmit}
                className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                Save
              </button>
              <button
                type="button"
                className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
              >
                Verify
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Companydet;
