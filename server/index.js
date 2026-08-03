const express = require("express");
const cors = require("cors");
require("dotenv").config();


const { conectarDB } = require("./config/db");

const ventasRoutes = require("./routes/ventas");


const app = express();


app.use(cors());

app.use(express.json());


// conectar base de datos

conectarDB();


// rutas

app.use("/api/ventas", ventasRoutes);



app.get("/",(req,res)=>{

    res.send(
        "API DashboardVentas funcionando correctamente"
    );

});



const PORT = process.env.PORT || 3001;


app.listen(PORT,()=>{

    console.log(
        `Servidor iniciado en puerto ${PORT}`
    );

});