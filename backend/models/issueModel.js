import pool from "../config/db.js";

export async function createIssue({title, description ,user_id , status_id , location_id}) {
    const result = await pool.query(
        `INSERT INTO issues (title, description , user_id ,status_id , location_id)
        VALUES ($1,$2,$3,$4,$5) RETURNING *`,
        [title, description, user_id, status_id , location_id]
);

return result.rows[0]
    
}

export async function getIssuesByUser(user_id) {
    const result = await pool.query(
        `SELECT * FROM issues WHERE user_id= $1 ORDER BY create_at DESC`,[user_id]
    );
    return result.rows;
    
}

export async function getAllIssues() {
    const result = await pool.query(
        `SELECT * FROM issues ORDER BY create_at DESC`
    );
    return result.rows;
    
}