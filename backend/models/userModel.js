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

export const getall = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM users");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};




export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query("SELECT * FROM users WHERE user_id = $1", [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, phone, password, role_id, location_id } = req.body;

    const result = await pool.query(
      "UPDATE users SET name = $1, phone = $2, password = $3, role_id = $4, location_id = $5 WHERE user_id = $6 RETURNING *",
      [name, phone, password, role_id, location_id, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query("DELETE FROM users WHERE user_id = $1 RETURNING *", [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json({ message: "User deleted", user: result.rows[0] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};






// Create Role
export const createRole = async (req, res) => {
  try {
    const { name } = req.body;
    const result = await pool.query(
      "INSERT INTO roles (name) VALUES ($1) RETURNING *",
      [name]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Read All Roles
export const getRoles = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM roles");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update Role
export const updateRole = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const result = await pool.query(
      "UPDATE roles SET name = $1 WHERE role_id = $2 RETURNING *",
      [name, id]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete Role
export const deleteRole = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query(
      "DELETE FROM roles WHERE role_id = $1 RETURNING *",
      [id]
    );
    res.json({ message: "Role deleted", role: result.rows[0] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
