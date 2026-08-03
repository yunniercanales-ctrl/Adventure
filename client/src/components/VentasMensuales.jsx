import {
Chart as ChartJS,
CategoryScale,
LinearScale,
PointElement,
LineElement,
Title,
Tooltip,
Legend
} from "chart.js";


import {Line} from "react-chartjs-2";


ChartJS.register(
CategoryScale,
LinearScale,
PointElement,
LineElement,
Title,
Tooltip,
Legend
);


function VentasMensuales({datos}){


const data={

labels:datos.map(
x=>x.Mes
),

datasets:[{

label:"Ventas",

data:datos.map(
x=>x.TotalVentas
)

}]

};


return (

<div className="card">

<h2>
Ventas Mensuales
</h2>

<Line data={data}/>

</div>

);


}


export default VentasMensuales;