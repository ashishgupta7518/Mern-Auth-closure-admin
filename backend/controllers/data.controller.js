import path from "path";
import { fileURLToPath } from "url";

// get __dirname in ES module scope
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const downloadExcel = (req, res) => {
  const filePath = path.join(__dirname, "..", "MakerChecker_2025-06-07.xlsx");

  res.download(filePath, "MakerChecker_2025-06-07.xlsx", (err) => {
    if (err) {
      console.error("File download error:", err);
      res.status(500).send("Error downloading the file.");
    } else {
      console.log("Excel file downloaded successfully.");
    }
  });
};
