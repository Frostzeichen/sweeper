import pg from "pg";
import "dotenv/config";
const { Pool } = pg;

const botanicalDB = new Pool({
    user: process.env.BOTANICAL_USER,
    host: process.env.BOTANICAL_HOST,
    database: process.env.BOTANICAL_DATABASE,
    password: process.env.BOTANICAL_PASSWORD,
    port: process.env.BOTANICAL_PORT
});

export const getAll = () => {
    botanicalDB.query("SELECT * FROM botanical_entry WHERE is_deleted = false", (error, results) => {
        console.log(results.rows);
        if (error) throw error;
    });
}

export const sweep = () => {
    botanicalDB.query("DELETE FROM botanical_entry where is_deleted = true;");
}