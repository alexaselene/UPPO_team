// Arreglos de los productos personalizados
let productos_personalizados = [
    {
         "Nombre": "Set de mini platos emocionales",
         "Características": "Dos platos color beige, cara triste y alegre, respectivamente. Sets chicos y medianos",
         "Material": "Cerámica",
         "Precio": "$200 mxn",
         "Stock": "Cuatro unidades",
         "Imagen": "./../src/img/emocionales_per.jpg"
         
    },
    {
        "Nombre": "Plato irregular de alta temperatura",
        "Características": "Un plato de color mármol, diseño rústico, tamaño chico",
        "Material": "Cerámica, resistente a altas temperaturas desde 650°C - 1000°C",
        "Precio": "$300 mxn",
        "Stock": "No disponible",
        "Imagen": "./../src/img/irregular_per.jpg" 
    },
    {
        "Nombre": "Mascota personalizada",
        "Características": "Perros y gatos. Texturas corrugadas y lisas, tamaños medianos y chicos, los colores pueden personalizarse",
        "Material": "Cerámica",
        "Precio": "$350 mxn",
        "Stock": "Disponible",
        "Imagen": "./../src/img/mascota_per.jpg"  
    },
    {
        "Nombre": "Recipiente para los pinceles del taller",
        "Características": "Un recipiente para pinceles, base color beige, tamaño mediano y grande, los colores pueden personalizarse",
        "Material": "Cerámica",
        "Precio": "$300 mxn",
        "Stock": "Disponible",
        "Imagen": "./../src/img/recipiente_per.jpg" 
    },
    {
        "Nombre": "Florero",
        "Características": "Un florero color mármol, diseño rústico, tamaño mediano y grande, los colores pueden personalizarse",
        "Material": "Cerámica",
        "Precio": "$350 mxn",
        "Stock": "Disponible", 
        "Imagen": "./../src/img/florero_per.jpg" 
    },
];

//let jsonProductosPerson= JSON.stringify(productos_personalizados);

tarjeta = document.getElementById("plantilla2");                         // Obtener el elemento donde irá la plantilla
productos_personalizados.forEach(element => {                                          // Recorrer el arreglo
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
});