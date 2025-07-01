// models/userModel.js
import pool from '../config/db.js';

export async function findUserByPhone(phone) {
  const result = await pool.query('SELECT * FROM users WHERE phone = $1', [phone]);
  return result.rows[0];
}

export async function createUser({ name, phone, hashedPassword, role_id, location_id }) {
  const result = await pool.query(
    `INSERT INTO users (name, phone, password, role_id, location_id)
     VALUES ($1, $2, $3, $4, $5) RETURNING *`,
    [name, phone, hashedPassword, role_id, location_id]
  );
  return result.rows[0];
}
