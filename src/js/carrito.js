// Arreglos de los productos (tazas)
let productos= [
    {
        "Nombre": "Happy Doggo",
        "Caracteristicas": " Taza de color beige con asa color azul claro, tamaño mediano",
        "Material": "Cerámica",
        "Precio": 200,
        "Stock": 5,
        "Cantidad": 2,
        "Imagen": "./../src/img/taza_perro.jpg"
    },
    {
        "Nombre": "Lunática",
        "Caracteristicas": "Taza de color blanco, texura rugosa, tamaño mediano",
        "Material": "Cerámica",
        "Precio": 250,
        "Stock": 6,
        "Cantidad": 3, 
        "Imagen": "./../src/img/taza_lunar.jpg" //AQUÍ HICE UN CAMBIO
    },
    {
        "Nombre": "Ying Cat",
        "Caracteristicas": "Taza de color blanco con asa color rosa, tamaño mediano",
        "Material": "Cerámica",
        "Precio": 250,
        "Stock": 2,
        "Cantidad": 1,
        "Imagen": "./../src/img/taza_gatitas.jpg"
    },
    {
        "Nombre": "Estilo Olmeca",
        "Caracteristicas": "Taza de color verde, estilo olmeca, asa color rojo,  tamaño mediano",
        "Material": "Cerámica",
        "Precio": 250,
        "Stock": 5,
        "Cantidad": 3,
        "Imagen": "./../src/img/taza_cara.jpg"  
    },
    {
        "Nombre": "Mood de lunes",
        "Caracteristicas": "Serigrafiada con diseño, mango e interior collage",
        "Material": "Cerámica",
        "Precio": 200,
        "Stock": 3,
        "Cantidad": 1,
        "Imagen": "./../src/img/taza_abstracta.jpg"
    },
    {
        "Nombre": "Colibrí",
        "Caracteristicas": "Taza color blanco con asa color rosa, diseño minimalista,  tamaño mediano",
        "Material": "Cerámica",
        "Precio": 200,
        "Stock": 2,
        "Cantidad": 0,
        "Imagen": "./../src/img/taza_colibri.png"
    },
  ];

  costo_total = document.getElementById("costo_total");
  sin_envio = document.getElementById("sin_envio");

  let total = 0;

  let cont = 0;
  //CARD VERTICAL
  // Envío de los productos con sus propiedades a sus respectivas cards
  tarjeta = document.getElementById("plantilla");                         // Obtener el elemento donde irá la plantilla
  productos.forEach(element => { // Recorrer el arreglo


    let acumulador = "";
    for(let cont = 0; cont <= element.Stock; cont++){
      acumulador += `<option>${cont}</option>`
    }

    let subtotal = element.Precio * element.Cantidad;
    total += subtotal;

    cont++;

    tarjeta.innerHTML += `<div class="col-md-4 col-12 tarjeta_c">
    <img src=${element.Imagen} alt="..." class = "img-fluid">
  </div>
  <div class="col-md-8 col-12">
    <div class="card-body">
        <h5 class="card-title">${element.Nombre}</h5>
        <p class="card-text">${element.Caracteristicas}</p>
      <form>
          <div class="form-group">
              <label for="exampleFormControlSelect1">Cantidad</label>
              <select class="form-control opcion" id="opcion">
                ${acumulador}
              </select>
          </div>
      </form>

      <p class="precio" id = "precio">Total: $${subtotal} MXN</p>
          
    </div>
  </div> `  
                                                    // Acumular mediante innerHTML las plantillas y enviarlas a su elemento correspondiente 
  });


  sin_envio.textContent = `$ ${total} MXN`;
  costo_total.textContent = `$ ${total + 50} MXN`;

  const cantidad = document.querySelectorAll(`.opcion`);

  cantidad.forEach(button => {
    button.addEventListener(`change`, ()=>{
      let cant = document.getElementById("opcion");
      console.log(cant.value);
      console.log("prueba");
      

    });
  });


