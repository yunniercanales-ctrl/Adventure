const { connectDB } = require("../config/db");

exports.ventasPorRegion = async () => {

    const pool = await connectDB();

    const resultado = await pool.request().query(`
        SELECT TOP 10 *
        FROM FactInternetSales
    `);

    return resultado.recordset;

};