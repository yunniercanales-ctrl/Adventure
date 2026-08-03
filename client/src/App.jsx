import {useEffect,useState} from "react";

import api from "./services/api";

import VentasCard from "./components/VentasCard";
import VentasMensuales from "./components/VentasMensuales";
import Productos from "./components/Productos";
import Clientes from "./components/Clientes";


import "./App.css";


function App(){


const [ventas,setVentas]=useState([]);
const [mensuales,setMensuales]=useState([]);
const [productos,setProductos]=useState([]);
const [clientes,setClientes]=useState([]);



useEffect(()=>{


api.get("/ventas")
.then(r=>setVentas(r.data));


api.get("/ventas/mensuales")
.then(r=>setMensuales(r.data));


api.get("/ventas/productos")
.then(r=>setProductos(r.data));


api.get("/ventas/clientes")
.then(r=>setClientes(r.data));


},[]);



return (

<div className="dashboard">


<h1>
Dashboard Ventas
</h1>


<div className="grid">


<VentasCard ventas={ventas}/>


<VentasMensuales 
datos={mensuales}
/>


<Productos
productos={productos}
/>


<Clientes
clientes={clientes}
/>


</div>


</div>

);


}


export default App;