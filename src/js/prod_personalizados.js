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
        "Nombre": "Recipiente Pinceleye",
        "Características": "Un recipiente para pinceles, base color beige, tamaño mediano y grande. Los colores pueden personalizarse",
        "Material": "Cerámica",
        "Precio": "$300 mxn",
        "Stock": "Disponible",
        "Imagen": "./../src/img/recipiente_per.jpg" 
    },
    {
        "Nombre": "Florece",
        "Características": "Un florero color mármol, diseño rústico, tamaño mediano y grande. Los colores pueden personalizarse",
        "Material": "Cerámica",
        "Precio": "$350 mxn",
        "Stock": "Disponible", 
        "Imagen": "./../src/img/florero_per.jpg" 
    },
    {
      "Nombre": "Platillos",
      "Características": "Platos chicos, diseño minimalista, ideales para la decoración de tu hogar",
      "Material": "Cerámica",
      "Precio": "$350 mxn",
      "Stock": "Disponible", 
      "Imagen": "./../src/img/platos.jpg" 
  },
  {
      "Nombre": "In love",
      "Características": "Personaliza tus figuras, del tamaño y colores que más te agraden",
      "Material": "Cerámica",
      "Precio": "$450 mxn",
      "Stock": "Disponible", 
      "Imagen": "./../src/img/Enamorados.jpg" 
  },
  {
      "Nombre": "Freedom",
      "Características": "Personaliza tus figuras, del tamaño y colores que más te agraden",
      "Material": "Cerámica",
      "Precio": "$450 mxn",
      "Stock": "Disponible", 
      "Imagen": "./../src/img/escultura_1.jpg" 
  },
  ];
  
  productos_local = localStorage.getItem("productos_personalizados");
  let productos_tarjeta = JSON.parse(productos_local);                         // Conversión de datos JSON
  
  if (productos_local == null){
    let jsonProducto = JSON.stringify(productos_personalizados);              // Convertir estructura en un JSON
    localStorage.setItem("productos_personalizados", jsonProducto);           // Guardar JSON en Local Storage
    productos_local = localStorage.getItem("productos_personalizados");
    productos_tarjeta = JSON.parse(productos_local);                          // Conversión de datos JSON
  }
  
  //CARD VERTICAL
  // Envío de los productos con sus propiedades a sus respectivas cards
  tarjeta = document.getElementById("plantilla");                         // Obtener el elemento donde irá la plantilla
  productos_tarjeta.forEach(element => {                                          // Recorrer el arreglo
    tarjeta.innerHTML += `<div class="card">
    <figure >
      <img src=${element.Imagen}  alt="..." class="img-fluid">
    </figure>
    <div class="contenido">
      <h3>${element.Nombre}</h3>
      <p class = "disponible">${element.Stock}</p>
      <h3 class = "precio_t">${element.Precio}</h3>
      <a href="#" type="button" class ="btn btn-danger">Ver detalles</a>
      </div>
  </div>
  `  
  });