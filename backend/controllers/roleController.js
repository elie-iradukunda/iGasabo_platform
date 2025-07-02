import pool from "../config/db.js";

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
