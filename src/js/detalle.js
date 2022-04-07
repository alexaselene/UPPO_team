window.onload = () => {
    console.log("Esta es una prueba");
    let div = document.getElementById("contenedor");
    
    let urlWindow = window.location.search;                     // Buscar parámetros que se están enviando a la página
    console.log(urlWindow);                                     // Imprimir parámetros
    const urlParams = new URLSearchParams(urlWindow);           // Buscar parámetros
    const idProducto = urlParams.get("id");                     // Obtener ID del producto que fue seleccionado
    console.log(idProducto);                                    // Imprimir en consola el ID del producto
    let URL_MAIN = `http://localhost:8080/api/productos/${idProducto}`;// Definir URL

    fetch(URL_MAIN, {
        method: 'get'
    }).then(function(response) {
        response.json().then(function (json) {
            console.log(json);
            console.log(json.length);
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
                    <a type = "button" href="./../pages/carrito.html" class = "btn btn-danger carrito">Agregar al carrito</a>
                </div>
            </div>`
        });//then
    }).catch(function(err) {
        console.log(err);
    });

};