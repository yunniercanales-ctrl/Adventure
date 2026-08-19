function Clientes({ clientes }) {

    return (

        <div className="card lista-card">

            <h2>
                Clientes
            </h2>

            {
                clientes.slice(0, 10).map((c, index) => (

                    <p key={index}>
                        {c.FirstName} {c.LastName}
                    </p>

                ))
            }

        </div>

    );

}

export default Clientes;
