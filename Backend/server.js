const express = require('express');
const sql = require('mssql/msnodesqlv8');
const cors = require('cors');

const app = express();
app.use(cors());
const port = 8081;

app.get('/test', async (req, res) => {
  // config for your database
  const config = {
    server: 'TECHNO-511\\SQLDEV2019',
    database: 'PALMS-9.1',
    user: 'sa',
    password: 'techno-123',
    driver: 'msnodesqlv8',
    options: {
      trustedConnection: true
    }
  };

  try {
    console.log('starting sql');
    const pool = await new sql.ConnectionPool(config).connect();
    const result = await pool.request().query('select * from City');
    console.log('ending sql');
    res.json({
      data: result.recordset
    });
    pool.close();
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Error fetching data' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
