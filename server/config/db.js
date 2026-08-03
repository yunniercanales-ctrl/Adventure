const sql = require("mssql");
require("dotenv").config();

const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER,
    database: process.env.DB_DATABASE,
    port: Number(process.env.DB_PORT),
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
};

const conectarDB = async () => {
    try {
        await sql.connect(config);
        console.log("SQL Server conectado correctamente");
    } catch (error) {
        console.log("Error al conectar SQL Server:", error.message);
    }
};

module.exports = {
    sql,
    conectarDB
};