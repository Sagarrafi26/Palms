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

// Global SQL pool
let pool;

// Connect to the database
async function connectDatabase() {
  try {
    pool = await new sql.ConnectionPool(config).connect();
    console.log('Connected to database');
  } catch (error) {
    console.error('Error connecting to database:', error);
    process.exit(1); // Exit the application on connection failure
  }
}

// Handle server startup
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  connectDatabase();
});

// Routes
app.get('/data', getData);
app.post('/add', addCity);
app.put('/update', updateCity);
app.delete('/delete',deleteCity);
// Route Handlers
async function getData(req, res) {
  try {
    const result = await pool.request().query('select * from City');
    res.json({ data: result.recordset });
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Error fetching data' });
  }
}

async function addCity(req, res) {
  const { cityName, cityCode, stateId } = req.body;
  const createdBy = 1;
  const createdDate = new Date();

  console.log('Request body:', req.body);
  try {
    await pool.request()
      .input('cityName', sql.VarChar(255), cityName)
      .input('cityCode', sql.VarChar(50), cityCode)
      .input('stateId', sql.Int, stateId)
      .input('createdBy', sql.Int, createdBy)
      .input('createdDate', sql.DateTime, createdDate)
      .query('INSERT INTO City ( CityName, CityCode, StateID, CreatedBy, CreatedDate) VALUES ( @cityName, @cityCode, @stateId, @createdBy, @createdDate)');

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error saving data:', error);
    res.status(500).json({ error: 'Error saving data' });
  }
}

async function updateCity(req, res) {
  const { cityName, cityCode, stateId, cityId } = req.body;
  console.log(cityCode);

  try {
    await pool.request()
      .input('cityName', sql.VarChar(255), cityName)
      .input('cityCode', sql.VarChar(50), cityCode)
      .input('stateId', sql.Int, stateId)
      .input('cityId', sql.Int, cityId)
      .query('UPDATE City SET CityName = @cityName, CityCode = @cityCode, StateID = @stateId WHERE CityID = @cityId');

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error updating data:', error);
    res.status(500).json({ error: 'Error updating data' });
  }
}


async function deleteCity(req, res) {
  const {cityId}=req.body;

  try {
    await pool.request()
      .input('cityId', sql.Int, cityId)
      .query('DELETE FROM City WHERE CityID = @cityId');

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error deleting data:', error);
    res.status(500).json({ error: 'Error deleting data' });
  }
}

// Handle server shutdown
process.on('SIGINT', () => {
  console.log('Closing database connection');
  if (pool) {
    pool.close();
  }
  process.exit();
});