const express = require('express');
const sql = require('mssql/msnodesqlv8');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json()); // Add this line to parse JSON request bodies

const port = 8081;
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

app.get('/test', async (req, res) => {
  // config for your database
  

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

app.post('/add', async (req, res) => {
  const { cityName, cityCode, stateId, createdBy, cityId } = req.body;
  const createdDate = new Date(); // Assuming CreatedDate should be the current date/time

  try {
    const pool = await new sql.ConnectionPool(config).connect();
    await pool.request()
      .input('cityId', sql.Int, cityId)
      .input('cityName', sql.VarChar(255), cityName)
      .input('cityCode', sql.VarChar(50), cityCode)
      .input('stateId', sql.Int, stateId)
      .input('createdBy', sql.Int, createdBy)
      .input('createdDate', sql.DateTime, createdDate)
      .query('INSERT INTO City (CityID, CityName, CityCode, StateID, CreatedBy, CreatedDate) VALUES (@cityId, @cityName, @cityCode, @stateId, @createdBy, @createdDate)');

    res.status(200).json({ success: true });
    pool.close();
  } catch (error) {
    console.error('Error saving data:', error);
    res.status(500).json({ error: 'Error saving data' });
  }
});




app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
