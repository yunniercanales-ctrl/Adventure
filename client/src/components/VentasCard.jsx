function VentasCard({ventas}){

    const total = ventas.reduce(
        (suma,v)=> suma + Number(v.TotalDue),
        0
    );


    return (

        <div className="card">

            <h3>
                Total Ventas
            </h3>

            <h1>
                ${total.toFixed(2)}
            </h1>

        </div>

    );

}

export default VentasCard;