// Obtener productos del Local Storage
let carritos = localStorage.getItem("carrito");
let productos = JSON.parse(carritos);

// Obtener los elementos donde se imprimen los calculos del carrito
costo_total = document.getElementById("costo_total");
sin_envio = document.getElementById("sin_envio");

// Inicializar total del carrito
let total = 0;

// Elemento plantilla
tarjeta = document.getElementById("plantilla");                         
  
// Recorrer el arreglo de los elementos del carrito
productos.forEach(element => { // Recorrer el arreglo

    // Obtener la cantidad de opciones del select de acuerdo al stock
    let acumulador = "";
    for(let cont = 1; cont <= element.stock; cont++){

      if (cont == element.cantidad){
        acumulador += `<option selected>${cont}</option>`
      } else{
        acumulador += `<option>${cont}</option>`
      }
      
    }

    // Calcular costos
    let subtotal = calcular_subtotal(element);
    total += subtotal;

    // Imprimir card
    tarjeta.innerHTML += `<div class="col-md-4 col-12 tarjeta_c">
    <img src=${element.imagen} alt="..." class = "img-fluid">
  </div>
  <div class="col-md-8 col-12">
    <div class="card-body">
        <h5 class="card-title">${element.nombre}</h5>
        <p class="card-text">${element.caracteristicas}</p>
      <form>
          <div class="form-group">
              <label for="exampleFormControlSelect1">Cantidad</label>
              <select class="form-control opcion" value = "2" id="opcion_${element.id}">
                ${acumulador}
              </select>
          </div>
      </form>

      <p class="precio" id = "precio_${element.id}">Total: $ ${subtotal} MXN</p>
          
    </div>
  </div> `  
                                                    
  });

  // Función que calcula el total por cada producto
  function calcular_subtotal(element){
    sub = element.precio * element.cantidad;
    return sub;
  }

  // Imprimir los cálculos 
  sin_envio.textContent = `$ ${total} MXN`;
  costo_total.textContent = `$ ${total + 50} MXN`;


  // Seleccionar los select (cantidad) y recorrer cada botón
  const cantidad = document.querySelectorAll(`.opcion`);
  cantidad.forEach(button => {
    button.addEventListener(`change`, (e)=>{

      // Obtener y elemento por id
      let num = e.target.id.split("_")[1]; // va a tener el número
      let precio2 = document.getElementById("precio_"+num);

      // Volver a realizar cálculos
      let cant_dif = precio2.innerHTML.split(" ")[2];
      productos[num-1].cantidad = parseInt(button.value);
      let calc_sub = calcular_subtotal(productos[num-1]);
      total = total + (calc_sub - cant_dif);

      // Reimprimir cálculos 
      precio2.textContent = `Total: $ ${calc_sub} MXN`;
      sin_envio.textContent = `$ ${total} MXN`
      costo_total.textContent = `Total: $ ${total + 50} MXN`

      // Guardar los nuevos valores en el Local Storage
      jsonProducto = JSON.stringify(productos);                       
      localStorage.setItem("carrito", jsonProducto);                     

    });
  });


