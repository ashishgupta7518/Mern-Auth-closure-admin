import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";

const MakerChecker = () => {
  const [clients, setClients] = useState([]);
  const [openIndex, setOpenIndex] = useState(null); // to track which row's export is open

  const displayKeys = [
    "clientcode",
    "name",
    "email",
    "gender",
    "education",
    "bankName",
    "pan_number",
    "spouse_name",
    "temp_pan_no",
    "aadhar_house",
    "dob",
    "networth",
    "aadhar_no",
    "stage",
    "mobile_no",
    "father_name",
  ];


  const downloadalldata = async () => {
    try {
      const response = await fetch(`/api/excel/download`, {
        method: "GET",
      });

      // Get binary blob
      const blob = await response.blob();

      // Create downloadable link
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;

      // Optional: make filename dynamic
      const filename = `clients_data_${new Date().toISOString().slice(0, 19)}.xlsx`;
      a.download = filename;

      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url); // Clean up
    } catch (err) {
      console.error("Failed to download Excel file:", err);
    }
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/clients`);
        const data = await res.json();
        setClients(data);
      } catch (err) {
        console.error("Failed to fetch data:", err);
      }
    };
    fetchData();
  }, []);

  const handleExport = (client, index) => {
    const worksheet = XLSX.utils.json_to_sheet([client]); // Convert single object to sheet
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "ClientData");

    const filename = `${client.clientcode || "client"}_data.xlsx`;
    XLSX.writeFile(workbook, filename);

    // Close the export button after download
    setOpenIndex(null);
  };


  return (
    <div className="overflow-auto p-4">

      <div>
        <button className="bg-green-600 text-emerald-50 p-3 mb-5 rounded-md" onClick={() => downloadalldata()} >Export All Data</button>
      </div>
      <table className="table-auto border border-collapse w-full text-sm">
        <thead>
          <tr>
            <th className="border px-2 py-1 bg-gray-200 font-semibold whitespace-nowrap">Export Data</th>
            {displayKeys.map((key) => (
              <th
                key={key}
                className="border px-2 py-1 bg-gray-200 font-semibold whitespace-nowrap"
              >
                {key}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {clients.map((client, i) => (
            <tr key={i}>
              <td className="border px-2 py-1 text-center relative">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="px-2 py-1"
                >
                  ⋮
                </button>

                {/* Export button inline next to triple dot */}
                {openIndex === i && (
                  <div className="absolute top-full left-0 mt-1 z-10">
                    <button
                      onClick={() => handleExport(client, i)}
                      className="px-2 py-1 text-xs bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                      Export Data
                    </button>
                  </div>
                )}
              </td>
              {displayKeys.map((key) => (
                <td
                  key={key}
                  className="border px-2 py-1 whitespace-nowrap max-w-xs overflow-x-auto"
                >
                  {typeof client[key] === "object"
                    ? JSON.stringify(client[key])
                    : String(client[key] ?? "-")}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MakerChecker;
