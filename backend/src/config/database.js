
require('dotenv').config();
const  {Pool} =  require("pg")

const pool = new Pool({
    user: process.env.VITE_DB_USER,
    host: process.env.VITE_DB_HOST,
    database: process.env.VITE_DB_DATABASE,
    password: process.env.VITE_DB_PASSWORD,
    port: process.env.VITE_DB_PORT,
});

pool.connect((err, client, release) => {
    if (err) {
        console.log("Lỗi khi kết nối db:", err);
    } else {
        console.log("Kết nối thành công");
    }
    release(); // Giải phóng client
});

module.exports = { pool }
