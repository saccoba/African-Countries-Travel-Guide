import pool from './database.js';
import countriesData from '../data/countries.js';

const resetDatabase = async () => {
  try {
    console.log('Resetting database...');

    await pool.query('DROP TABLE IF EXISTS countries');

    await pool.query(`
      CREATE TABLE countries (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        capital TEXT,
        slug TEXT UNIQUE NOT NULL,
        region TEXT,
        language TEXT,
        attraction TEXT,
        image TEXT,
        description TEXT
      )
    `);

    const insertQuery = `
      INSERT INTO countries (
        name,
        capital,
        slug,
        region,
        language,
        attraction,
        image,
        description
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
    `;

    for (const country of countriesData) {
      const values = [
        country.name,
        country.capital,
        country.slug,
        country.region,
        country.language,
        country.attraction,
        country.image,
        country.description
      ];

      await pool.query(insertQuery, values);
    }

    console.log(
      `Database reset successfully. ${countriesData.length} countries added.`
    );
  } catch (error) {
    console.error('Error resetting database:', error);
  } finally {
    await pool.end();
  }
};

resetDatabase();