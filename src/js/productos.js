// Arreglos de los productos (tazas)
let productos= [
    {
     "Nombre": "Perro alegre",
     "Caracteristicas": " Taza de color beige con asa color azul claro, tamaño mediano",
     "Material": "Cerámica",
     "Precio": "$200 mxn",
     "Stock": "Disponible",
     "Imagen": "./../src/img/taza_perro.jpg"
    },
    {
     "Nombre": "Lunar",
     "Caracteristicas": "Taza de color blanco, texura rugosa, tamaño mediano",
     "Material": "Cerámica",
     "Precio": "$250 mxn",
     "Stock": "Disponible",   
     "Imagen": "./../src/img/taza_lunar.jpg" //AQUÍ HICE UN CAMBIO
    },
    {
    "Nombre": "Gatitas",
     "Caracteristicas": "Taza de color blanco con asa color rosa, tamaño mediano",
     "Material": "Cerámica",
     "Precio": "$250 mxn",
     "Stock": "Dos unidades",
     "Imagen": "./../src/img/taza_gatitas.jpg"
    },
    {
        "Nombre": "Estilo Olmeca",
        "Caracteristicas": "Taza de color verde, estilo olmeca, asa color rojo,  tamaño mediano",
        "Material": "Cerámica",
        "Precio": "$200 mxn",
        "Stock": "Disponible",
        "Imagen": "./../src/img/taza_cara.jpg"  
    },
    {
        "Nombre": "Mood de lunes",
        "Caracteristicas": "Serigrafiada con diseño, mango e interior collage",
        "Material": "Cerámica",
        "Precio": "$200 mxn",
        "Stock": "Disponible",
        "Imagen": "./../src/img/taza_abstracta.jpg"
    },
    {
        "Nombre": "Colibrí",
        "Caracteristicas": "Taza color blanco con asa color rosa, diseño minimalista,  tamaño mediano",
        "Material": "Cerámica",
        "Precio": "$200 mxn",
        "Stock": "Disponible" ,
        "Imagen": "./../src/img/taza_colibri.png"
    },

    {
      "Nombre": "Indiferente",
      "Caracteristicas": "Taza color blanco  con asa y plato de color azul, diseño animado,  tamaño mediano",
      "Material": "Cerámica",
      "Precio": "$200 mxn",
      "Stock": "Disponible" ,
      "Imagen": "./../src/img/indiferente.jpg"  
  },

  {
    "Nombre": "Para músicos",
    "Caracteristicas": "Taza color beige, estampado con instrumento músical,  tamaño mediano",
    "Material": "Cerámica",
    "Precio": "$200 mxn",
    "Stock": "Disponible" ,
    "Imagen": "./../src/img/musica.jpg"
},
{
  "Nombre": "Personalizada",
  "Caracteristicas": "Color personalizado, elige el nombre que quieras,  tamaño mediano",
  "Material": "Cerámica",
  "Precio": "$200 mxn",
  "Stock": "Disponible" ,
  "Imagen": "./../src/img/eduardo.jpg"
}



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
      <h5 >${element.Nombre}</h5>
      <p >${element.Stock}</p>
      <p >${element.Precio}</p>
      <a href="#" type="button">Agregar</a>
      </div>
</div>
`                                                    // Acumular mediante innerHTML las plantillas y enviarlas a su elemento correspondiente 
});



/* CARD HORIZONTAL
// Envío de los productos con sus propiedades a sus respectivas cards
tarjeta = document.getElementById("plantilla");                         // Obtener el elemento donde irá la plantilla
productos.forEach(element => {                                          // Recorrer el arreglo
    tarjeta.innerHTML += `<div class="card mb-3" style="max-width: 400px">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img src=${element.Imagen} alt="..." class="img-fluid">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${element.Nombre}</h5>
          <p class="card-text">${element.Stock}</p>
          <p class="card-text"><small class="text-muted">${element.Precio}</small></p>
        </div>
      </div>
    </div>
  </div> `                                                    // Acumular mediante innerHTML las plantillas y enviarlas a su elemento correspondiente 
});*/