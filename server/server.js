import express from 'express';
import dotenv from 'dotenv';
import pool from './config/database.js';
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.json({ message: 'African Countries API is running' });
});

// Get all countries
app.get('/api/countries', async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT * FROM countries ORDER BY id ASC'
    );

    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Error retrieving countries:', error);
    res.status(500).json({
      error: 'Unable to retrieve countries'
    });
  }
});

// Get one country by slug
app.get('/api/countries/:slug', async (req, res) => {
  try {
    const { slug } = req.params;

    const result = await pool.query(
      'SELECT * FROM countries WHERE slug = $1',
      [slug]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        error: 'Country not found'
      });
    }

    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error('Error retrieving country:', error);
    res.status(500).json({
      error: 'Unable to retrieve country'
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});