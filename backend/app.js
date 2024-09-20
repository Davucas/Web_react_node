const express = require('express');
const bodyParser = require('body-parser');
const ExcelJS = require('exceljs');
const path = require('path');
const fs = require('fs');
const cors = require('cors');
const app = express();


const allowedOrigins = ['http://localhost:5173', 'https://dynamic-pudding-ccfc9a.netlify.app'];
const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('No permitido por CORS'));
    }
  },
};


const port = 5000;
app.use(bodyParser.json());
app.use(cors(corsOptions));



app.post('/api/submitForm', async (req, res) => {
  const { name, last_name, email } = req.body;

  console.log('Data received');

  const filePath = path.join(__dirname, 'data.xlsx');

  let workbook;

  // Check if the Excel file exists
  if (fs.existsSync(filePath)) {
    // If it exists, load the existing workbook
    workbook = await new ExcelJS.Workbook().xlsx.readFile(filePath);
  } else {
    // Otherwise, create a new workbook and worksheet
    workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Form Data');
    
    // Define the headers (only if the file is being created)
    worksheet.columns = [
      { header: 'Name', key: 'name', width: 30 },
      { header: 'Last Name', key: 'last_name', width: 30 },
      { header: 'Email', key: 'email', width: 30 }
    ];
  }

  const worksheet = workbook.getWorksheet('Form Data');

  // Add the new row to the worksheet
  worksheet.addRow({ name, last_name, email });

  // Save the file with the new data
  await workbook.xlsx.writeFile(filePath);

  // Send a success response
  res.json({ message: 'Form data saved to Excel file successfully!' });
});


// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
