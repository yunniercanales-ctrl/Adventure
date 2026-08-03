{
clientes.slice(0,10)
.map((c,index)=>(

<p key={index}>

{c.FirstName}
{" "}
{c.LastName}

</p>

))
}