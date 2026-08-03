const express = require("express");
const router = express.Router();

const { sql } = require("../config/db");


// Obtener ventas recientes
router.get("/", async (req, res) => {

    try {

        const resultado = await sql.query(`

            SELECT TOP 10
                SalesOrderID,
                OrderDate,
                DueDate,
                TotalDue
            FROM SalesLT.SalesOrderHeader
            ORDER BY OrderDate DESC

        `);


        res.json(resultado.recordset);


    } catch(error){

        console.log(error.message);

        res.status(500).json({
            error:error.message
        });

    }

});


// Ventas mensuales
router.get("/mensuales", async(req,res)=>{

    try{

        const resultado = await sql.query(`

            SELECT *
            FROM dbo.vw_ResumenVentasMensuales

        `);


        res.json(resultado.recordset);


    }catch(error){

        res.status(500).json({
            error:error.message
        });

    }

});


// Productos más vendidos
router.get("/productos", async(req,res)=>{

    try{

        const resultado = await sql.query(`

            SELECT *
            FROM dbo.vw_ProductosMasVendidos

        `);


        res.json(resultado.recordset);


    }catch(error){

        res.status(500).json({
            error:error.message
        });

    }

});


// Clientes
router.get("/clientes", async(req,res)=>{

    try{

        const resultado = await sql.query(`

            SELECT *
            FROM dbo.vw_ClientesDireccionesOrdenes

        `);


        res.json(resultado.recordset);


    }catch(error){

        res.status(500).json({
            error:error.message
        });

    }

});


module.exports = router;