const express = require('express');
const sql = require('mssql/msnodesqlv8');
const cors = require('cors');

const app = express();
const port = 8081;
app.use(cors());
app.use(express.json()); // Add this line to parse JSON request bodies


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
  } finally {
      sql.close();
  }
});
app.post('/add', async (req, res) => {
  const { cityName, cityCode, stateId } = req.body;
  const createdBy = 1;
  const createdDate = new Date(); 
  
  console.log('Request body:', req.body);
  try {
    const pool = await new sql.ConnectionPool(config).connect();
    await pool.request()
     
      .input('cityName', sql.VarChar(255), cityName)
      .input('cityCode', sql.VarChar(50), cityCode)
      .input('stateId', sql.Int, stateId)
      .input('createdBy', sql.Int, createdBy)
      .input('createdDate', sql.DateTime, createdDate)
      .query('INSERT INTO City ( CityName, CityCode, StateID, CreatedBy, CreatedDate) VALUES ( @cityName, @cityCode, @stateId, @createdBy, @createdDate)');

    res.status(200).json({ success: true });
    pool.close();
  } catch (error) {
    console.error('Error saving data:', error);
    res.status(500).json({ error: 'Error saving data' });
  }
});
app.put('/update', async (req, res) => {
  const { cityName, cityCode, stateId,cityId } = req.body;
  console.log(cityCode)

  try {
    const pool = await new sql.ConnectionPool(config).connect();
    await pool.request()
      .input('cityName', sql.VarChar(255), cityName)
      .input('cityCode', sql.VarChar(50), cityCode)
      .input('stateId', sql.Int, stateId)
      .input('cityId', sql.Int, cityId)
      .query('UPDATE City SET CityName = @cityName, CityCode = @cityCode, StateID = @stateId WHERE CityID = @cityId');
  
    res.status(200).json({ success: true });
    pool.close();
  } catch (error) {
    console.error('Error updating data:', error);
    res.status(500).json({ error: 'Error updating data' });
  }
});

 

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
