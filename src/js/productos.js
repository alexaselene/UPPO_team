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
  {
      "Nombre": "Lunática",
      "Caracteristicas": "Taza de color blanco, texura rugosa, tamaño mediano",
      "Material": "Cerámica",
      "Precio": "$250 mxn",
      "Stock": "Disponible",   
      "Imagen": "./../src/img/taza_lunar.jpg" //AQUÍ HICE UN CAMBIO
  },
  {
      "Nombre": "Ying Cat",
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
  "Nombre": "Melodía",
  "Caracteristicas": "Taza color beige, estampado con instrumento músical,  tamaño mediano",
  "Material": "Cerámica",
  "Precio": "$200 mxn",
  "Stock": "Disponible" ,
  "Imagen": "./../src/img/musica.jpg"
},
];

productos_local = localStorage.getItem("productos");
let productos_tarjeta = JSON.parse(productos_local);                         // Conversión de datos JSON

if (productos_local == null){
  let jsonProducto = JSON.stringify(productos);                         // Convertir estructura en un JSON
  localStorage.setItem("productos", jsonProducto);                      // Guardar JSON en Local Storage
  productos_local = localStorage.getItem("productos");
  productos_tarjeta = JSON.parse(productos_local);                         // Conversión de datos JSON
}

//CARD VERTICAL
// Envío de los productos con sus propiedades a sus respectivas cards
tarjeta = document.getElementById("plantilla");                         // Obtener el elemento donde irá la plantilla
productos_tarjeta.forEach(element => {                                          // Recorrer el arreglo
  tarjeta.innerHTML += `<div class="card">
  <div class = "imagen">
    <a class = "edit admin" href = "./../pages/creacion_producto.html"></a>
    <a class = "trash admin" href = "./../pages/creacion_producto.html"></a>
    <img src=${element.Imagen}  alt="..." class="img-fluid">
  </div>
  <div class="contenido">
    <h3>${element.Nombre}</h3>
    <p class = "disponible">${element.Stock}</p>
    <h3 class = "precio_t">${element.Precio}</h3>
    <a href="#" type="button" class ="btn btn-danger">Ver detalles</a>
    </div>
</div>
`                                                    // Acumular mediante innerHTML las plantillas y enviarlas a su elemento correspondiente 
});