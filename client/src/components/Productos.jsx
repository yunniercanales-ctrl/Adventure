function Productos({productos}){


return (

<div className="card lista-card">

<h2>
Productos más vendidos
</h2>


<table>

<tbody>

{
productos.slice(0,10).map((p,index)=>(

<tr key={index}>

<td>
{p.ProductName}
</td>

<td>
{p.TotalVendidos}
</td>

</tr>


))
}

</tbody>

</table>


</div>

);


}


export default Productos;