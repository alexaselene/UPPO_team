const URL_MAIN ='http://localhost:8080/api/productos/';
function addItems(plantilla) {
    fetch(URL_MAIN, {
        method: 'get'
    }).then(function(response) {
        response.json().then(function (json) {
            console.log(json);
            //console.log(json.length);
            //productos=json;
            Array.from(json).forEach(element => {
                if(element.categoria_idcategoria == 1){
                plantilla.innerHTML += `<div class="card">
                <div class = "imagen">
                  <a class = "edit admin" href = "./../pages/creacion_producto.html"></a>
                  <a class = "trash admin" href = "./../pages/creacion_producto.html"></a>
                  <img src=${element.imagen}  alt="..." class="img-fluid">
                </div>
                <div class="contenido">
                  <h3>${element.nombre}</h3>
                  
                  <h3 class = "precio_t">$${element.precio_producto} mxn</h3>
                  <a href="./../pages/detalle_producto.html?id=${element.id}" type="button" class ="btn btn-danger">Ver detalles</a>
                  </div>
              </div>
              `}
              ;
            }); // foreach
        });//then
    }).catch(function(err) {
        console.log(err);
    });
    console.log(document.getElementById("div_Productos"));
   
}// addItems

window.addEventListener("load", function (){
    let div = document.getElementById("plantilla");
    addItems(div);
});



function view(index) {
    // console.log(index);
    // console.table(productos[index]);
    document.getElementById("productTitleModal").innerHTML=productos[index].nombre;
    document.getElementById("productBodyModal").innerHTML=`${productos[index].descripcion}  <img class="bd-placeholder-img card-img-top" role="img" src="img/${productos[index].url_Imagen}" />
    <strong>$ ${productos[index].price} MXN<strong>`;
    $("#productModal").modal("show");
}
