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

tarjeta_pp = document.getElementById("pp_producto");                         // Obtener el elemento donde irá la plantilla
productos_personalizados.forEach(element => {                                          // Recorrer el arreglo
    tarjeta_pp.innerHTML += `<div class="card">
    <figure >
      <img src=${element.Imagen} height="600px" width="600px">
    </figure>
    <div class="contenido">
      <h5>${element.Nombre}</h5>
      <p>${element.Características}</p>
      <p>${element.Precio}</p>
      <a href="#" type="button">Elegir</a>
    </div><!--contenido-->
  </div> <!--card-->`                                                    // Acumular mediante innerHTML las plantillas y enviarlas a su elemento correspondiente 
});

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
     "Nombre": "Gato feliz",
     "Caracteristicas": "Taza de color beige, tamaño mediano",
     "Material": "Cerámica",
     "Precio": "$250 mxn",
     "Stock": "Disponible",   
     "Imagen": "./../src/img/taza_gato.jpg"
    },
    {
    "Nombre": "Gatitas",
     "Caracteristicas": "Taza color blanco con asa color rosa, tamaño mediano",
     "Material": "Cerámica",
     "Precio": "$250 mxn",
     "Stock": "Dos unidades",
     "Imagen": "./../src/img/taza_gatitas.jpg"
    },
    {
        "Nombre": "La muerte y sus flores",
        "Caracteristicas": "Taza color beige adornada con flores,  tamaño mediano",
        "Material": "Cerámica",
        "Precio": "$200 mxn",
        "Stock": "Disponible",
        "Imagen": "./../src/img/taza_esqueleto.jpg"
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
];
tarjeta_p = document.getElementById("p_producto");                         // Obtener el elemento donde irá la plantilla
productos.forEach(elementp => {                                          // Recorrer el arreglo
    tarjeta_p.innerHTML += `<div class="card">
    <figure >
      <img src=${elementp.Imagen} height="600px" width="600px">
    </figure>
    <div class="contenido">
      <h5>${elementp.Nombre}</h5>
      <p>${elementp.Caracteristicas}</p>
      <p>${elementp.Precio}</p>
      <a href="#" type="button">Elegir</a>
    </div><!--contenido-->
  </div> <!--card-->`                                                    // Acumular mediante innerHTML las plantillas y enviarlas a su elemento correspondiente 
});