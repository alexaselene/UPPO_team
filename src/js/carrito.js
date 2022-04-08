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






  //Evento de compra
  compra = document.getElementById("compra");
  compra.addEventListener("click", (e_compra)=>{
    e_compra.preventDefault();

    Swal.fire({                                         // Se muestra una alerta que indica Éxito
      title: '¡Gracias por tu compra!',
      text: "Pedido realizado",
      icon: 'success',
      confirmButtonColor: '#ED959C',
      confirmButtonText: 'Ok.'
    }); 
  });



