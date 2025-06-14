import path from "path";
import { fileURLToPath } from "url";
import XLSX from "xlsx";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to Excel file
const excelFilePath = path.join(__dirname, "..", "MakerChecker_2025-06-07.xlsx");

// Read Excel into JSON
const readExcelFile = () => {
  const workbook = XLSX.readFile(excelFilePath);
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];
  return XLSX.utils.sheet_to_json(worksheet, { defval: "" });
};

// ✅ Controller to get all clients
export const getAllClients = (req, res) => {
  try {
    const data = readExcelFile();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Error reading Excel file", error: error.message });
  }
};

// ✅ Controller to get specific client by clientcode
export const getClientByCode = (req, res) => {
  try {
    const clientcode = req.params.clientcode.toLowerCase();
    const data = readExcelFile();

    const result = data.filter(
      (row) => row.clientcode && String(row.clientcode).toLowerCase() === clientcode
    );

    if (result.length === 0) {
      return res.status(404).json({ message: "Client not found" });
    }

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: "Error reading Excel file", error: error.message });
  }
};
