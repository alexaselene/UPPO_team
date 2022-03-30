// Arreglos de los productos (tazas)
let productos= [
    {
        "Nombre": "Happy Doggo",
        "Caracteristicas": " Taza de color beige con asa color azul claro, tamaño mediano",
        "Material": "Cerámica",
        "Precio": "$200 mxn",
        "Stock": "Disponible",
        "Imagen": "./../src/img/taza_perro.jpg"
    },
];

//CARD VERTICAL
// Envío de los productos con sus propiedades a sus respectivas cards
tarjeta = document.getElementById("plantilla");                         // Obtener el elemento donde irá la plantilla
productos.forEach(element => {                                          // Recorrer el arreglo
  tarjeta.innerHTML += `<div class="card">
  <figure >
    <img src=${element.Imagen}  alt="... class="img-fluid"">
  </figure>
  <div class="contenido">
    <h3>${element.Nombre}</h3>
    <p class = "disponible">${element.Stock}</p>
    <p class = "dispónible">${element.Caracteristicas}</p>
    <h3 class = "precio_t">${element.Precio}</h3>
    <a href="#" type="button" class ="btn btn-danger">Editar</a>
    <a href="#" type="button" class ="btn btn-secondary">Borrar</a>
    </div>
</div>
`                                                    // Acumular mediante innerHTML las plantillas y enviarlas a su elemento correspondiente 
});
