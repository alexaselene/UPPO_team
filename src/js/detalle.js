window.onload = () => {
    let div = document.getElementById("contenedor");
    
    let urlWindow = window.location.search;                     // Buscar parámetros que se están enviando a la página
    console.log(urlWindow);                                     // Imprimir parámetros
    const urlParams = new URLSearchParams(urlWindow);           // Buscar parámetros
    const idProducto = urlParams.get("id");                     // Obtener ID del producto que fue seleccionado
    let URL_MAIN = `http://localhost:8080/api/productos/${idProducto}`;// Definir URL

    fetch(URL_MAIN, {
        method: 'get'
    }).then(function(response) {
        response.json().then(function (json) {
            console.log(json);
                div.innerHTML += `<div class = "column col-md-4">
                <div>
                    <h3>${json.nombre}</h3>
                </div>
                <div>
                    <img src = ${json.imagen} class = "img-fluid">
                </div>
            </div>
    
            <div class = "column col-md-8 contenedor_desc">
                <div>
                    <h5>${json.caracteristicas}</h5>
                    <h1 class = "precio">$${json.precio_producto} MXN</h1>
                </div>
                <div class = "agregar">
                    <button class = "btn btn-danger carrito" id = "cart_${json.id}">Agregar al carrito</button>
                </div>
            </div>`

            let agregar = document.getElementById("cart_"+json.id);
            console.log(agregar);

            agregar.addEventListener("click", (e_agregar) =>{
                e_agregar.preventDefault;

            let prod_carrito = {
                "id": json.id,
                "nombre": json.nombre,
                "caracteristicas": json.caracteristicas,
                "precio": json.precio_producto,
                "imagen": json.imagen,
                "stock": json.stock,
                "cantidad": 1
            }

            let carrito = localStorage.getItem("carrito");
            let carrito_array = JSON.parse(carrito);

            if (carrito == null) {
                let array = [];
                array.push(prod_carrito);
                let carrito_json = JSON.stringify(array);
                localStorage.setItem("carrito", carrito_json);
            } else {
                carrito_array.push(prod_carrito);
                let carrito_json = JSON.stringify(carrito_array);
                localStorage.setItem("carrito", carrito_json);
            }

            Swal.fire({                                                 // Se muestra una alerta que indica Éxito
                title: '¡Excelente!',
                text: "El producto se ha añadido al carrito",
                icon: 'success',
                confirmButtonColor: '#ED959C',
                confirmButtonText: 'Ok.'
            });
             
            });


        });//then
    }).catch(function(err) {
        console.log(err);
    });
};
