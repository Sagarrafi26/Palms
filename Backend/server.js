const express = require('express');
const sql = require('mssql');
 
const app = express();
const port = 8081;
 

const config = {
  server: 'TECHNO-511\\SQLDEV2019',
  database: 'PALMS-9.1',
  user: 'sa',
  password: 'techno-123',
};

// API endpoint to fetch table data
app.get('/data', async (req, res) => {
  try {
      await sql.connect(config);
      const result = await sql.query('SELECT * FROM City');
      res.json(result.recordset);
  } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Error fetching data' });
  } finally {
      sql.close();
  }
});
 

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});