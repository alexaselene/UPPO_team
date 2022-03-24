// Arreglos de los productos personalizados
let productos_personalizados = [
  {
       "Nombre": "Mini platos Talia",
       "Características": "Dos platos color beige, cara triste y alegre, respectivamente. Sets chicos y medianos",
       "Material": "Cerámica",
       "Precio": "$200 mxn",
       "Stock": "Cuatro unidades",
       "Imagen": "./../src/img/emocionales_per.jpg"
       
  },
  {
      "Nombre": "Plato de alta temperatura",
      "Características": "Un plato de color mármol, diseño rústico, tamaño chico",
      "Material": "Cerámica, resistente a altas temperaturas desde 650°C - 1000°C",
      "Precio": "$300 mxn",
      "Stock": "No disponible",
      "Imagen": "./../src/img/irregular_per.jpg" 
  },
  {
      "Nombre": "Tu mascota favorita",
      "Características": "Perros y gatos. Texturas corrugadas y lisas, tamaños medianos y chicos. Los colores pueden personalizarse",
      "Material": "Cerámica",
      "Precio": "$350 mxn",
      "Stock": "Disponible",
      "Imagen": "./../src/img/mascota_per.jpg"  
  },
  {
      "Nombre": "Pinceleye. Recipiente",
      "Características": "Un recipiente para pinceles, base color beige, tamaño mediano y grande. Los colores pueden personalizarse",
      "Material": "Cerámica",
      "Precio": "$300 mxn",
      "Stock": "Disponible",
      "Imagen": "./../src/img/recipiente_per.jpg" 
  },
];

tarjeta_pp = document.getElementById("pp_producto");                         // Obtener el elemento donde irá la plantilla
productos_personalizados.forEach(element => {                                          // Recorrer el arreglo
  tarjeta_pp.innerHTML += `<div class="card">
  <figure >
    <img src=${element.Imagen}  alt="... class="img-fluid"">
  </figure>
  <div class="contenido">
    <h3>${element.Nombre}</h3>
    <p class = "disponible">${element.Stock}</p>
    <h3 class = "precio_t">${element.Precio}</h3>
    <a href="#" type="button" class ="btn btn-danger" >Agregar</a>
    </div>
</div>`                                                    // Acumular mediante innerHTML las plantillas y enviarlas a su elemento correspondiente 
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
];

tarjeta_p = document.getElementById("p_producto");                         // Obtener el elemento donde irá la plantilla
productos.forEach(elementp => {                                          // Recorrer el arreglo
  tarjeta_p.innerHTML += `<div class="card">
  <figure >
    <img src=${elementp.Imagen}  alt="... class="img-fluid"">
  </figure>
  <div class="contenido">
    <h3>${elementp.Nombre}</h3>
    <p class = "disponible">${elementp.Stock}</p>
    <h3 class = "precio_t">${elementp.Precio}</h3>
    <a href="#" type="button" class ="btn btn-danger" >Agregar</a>
    </div>
</div>`                                                   // Acumular mediante innerHTML las plantillas y enviarlas a su elemento correspondiente 
});