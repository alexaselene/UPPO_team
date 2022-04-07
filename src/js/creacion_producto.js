// BOOLEANOS DE VALIDACIÓN
let campo_nombre = false;
let seleccionado = false;
let campo_precio = false;
let campo_caracteres = false;
let campo_stock = false;
let campo_imagen = false;

// OBTENER ELEMENTOS
let nombre = document.getElementById("nombre");                         // Input donde se ingresa el nombre del producto
let seleccion = document.getElementById("seleccion");                   // Lista de selección de opciones de categorías
let etiquetas = document.getElementById("etiquetas");                   // Input correspondiente a las etiquetas
let caracteristicas = document.getElementById("caracteristicas");       // Input donde se ingresan las características del producto
let caracteristicas_mensaje = document.getElementById("letras_mensaje");// Espacio donde se imprimen los caracteres restantes del input de características
let precio = document.getElementById("precio");                         // Input donde se ingresan el precio del producto
let stock = document.getElementById("stock");                           // Input donde se ingresa el Stock del producto
let imagen = document.getElementById("image");                          // Input donde se coloca la imagen
let visualizacion = document.getElementById("preview");                 // Contenedor donde se coloca la imagen
let creacion = document.getElementById("boton_creacion");               // Botón para guardar los valores del producto
let limpiar = document.getElementById("btn_limpiar");                   // Botón para limpiar el producto

// EVENTOS
// Nombre
nombre.addEventListener("change", (evento_p)=>{         // Evento que se activa al presionar enter o cambiar de campo de nombre
    evento_p.preventDefault();                          // En caso de error
    campo_nombre = validacion_nombre();                 // Manda a llamar a la función para validar el nombre
});

// Categoría
seleccion.addEventListener("change",(e_seleccion) => {   // Evento que se activa al presionar sobre la lista de Selección
    e_seleccion.preventDefault();                       // En caso de error
    seleccionado = validar_seleccionado();              // Manda a llamar a la función para validar la opción seleccionada
});

// Precio
precio.addEventListener("change", (evento_c)=>{         // Se activa al presionar enter o cambiar de campo de precio
    evento_c.preventDefault();                          // En caso de error
    validacion_precio();                                // Manda llamar la función para validar el precio
});

// Características
caracteristicas.addEventListener("input", (evento_c)=>{ // Se activa al cambiar de valor el input
    evento_c.preventDefault();                          // En caso de error
    campo_caracteres = validacion_caracteres();         // Manda llamar la función para validar las carecterísticas
    caracteristicas_mensaje.textContent = 150 - caracteristicas.value.length; // Imprimir los caracteres restantes
});

caracteristicas.addEventListener("change", (evento_cc) =>{  // Se activa al presionar enter o cambiar de campo de características
    if (campo_caracteres){
        stock.focus();                                      // Mover cursor al campo de Stock
    }
});

// Stock 
stock.addEventListener("change", (e_stock)=>{       // Se activa al presionar enter o cambiar de campo de caracteres
    e_stock.preventDefault();                       // En caso de error
    campo_stock = validacionStock(stock);           // Llama a la función para validar las etiquetas
});

// Imagen
imagen.addEventListener("change", (e_imagen)=>{
    e_imagen.preventDefault();
    campo_imagen = validacionImagen(imagen);
});

// FUNCIONES DE VALIDACIÓN
// Nombre
function validacion_nombre(){
    if (nombre.value.length >= 3 && nombre.value.length <= 50){ // Validar la longitud del valor ingresado
        nombre.classList.remove("is-invalid");                  // Remover la clase para invalidar el campo
        nombre.classList.add("is-valid");                       // Añadir la clase para validar el campo
        campo_nombre = true;                                    // Asignar verdadero el booleano de validación
        seleccion.focus();                                      // Cambiar cursor al campo de selección
    } else {
        nombre.classList.remove("is-valid");                    // Remover la clase para validar el campo
        nombre.classList.add("is-invalid");                     // Añadir la clase para invalidar el campo
        campo_nombre = false;                                   // Asignar como falso el booleano de validación
    }
    return campo_nombre;                                        // Retornar el booleano de validación
};

// Selección
function validar_seleccionado(){                                // Función que valida la opción seleccionada
    if (seleccion.value != "Selecciona una categoría") {        // Valida si la opción es diferente de la Default
        seleccionado = true;                                    // Asignar como verdadero el booleano de selección
        seleccion.classList.remove("is-invalid");               // Remover la clase para invalidar el campo
        seleccion.classList.add("is-valid");                    // Añadir la clase para validar el campo
        precio.focus();                                      // Cambiar cursor al campo de etiquetas
    } else {
        seleccionado = false;                                   // Asignar como falso al booleano de selección
        seleccion.classList.remove("is-valid");                 // Remover la clase para validar el campo
        seleccion.classList.add("is-invalid");                  // Añadir la clse para invalidar el campo
    }
    return seleccionado;                                        // Retornar el booleano de selección
}

// Precio
function validacion_precio(){
    let pattern = /^\d*(\.\d{1})?\d{0,1}$/ ;    // Definir patrón. Valida hasta 2 decimales
    if(precio.value.match(pattern)){            // Comparar valor ingresado y patrón
        precio.classList.remove("is-invalid");  // Remover la clase que invalida el campo
        precio.classList.add("is-valid");       // Añadir la clase que valida el campo
        campo_precio = true;                    // Asignar como verdadero el valor del booleano de validación
        caracteristicas.focus();                // Cambiar cursor al campo de caracteristicas
    } else {
        precio.classList.remove("is-valid");    // Remover la clase que valida el campo
        precio.classList.add("is-invalid");     // Añadir la clase que invalida el campo
        campo_precio = false;                   // Asignar como falso el valor del booleano de validación
    }
    return campo_precio;                        // Retornar el valor del booleano de validación
};

// Características
function  validacion_caracteres(){
    let pattern_m = /^[a-zA-Z\u00E0-\u00FC\u00d1\u0020-\u0040\u0013]+$/;    // Definir patrón. Acepta letras, números, caracteres
    if((caracteristicas.value.length >= 3) && (caracteristicas.value.length <= 150) && (caracteristicas.value.match(pattern_m))){  // Validar longitud del valor ingresado y que coincida con patrón
        caracteristicas.classList.remove("is-invalid");                     // Remover la clase que invalida el campo
        caracteristicas.classList.add("is-valid");                          // Añadir la clase que valida el campo
        campo_caracteres = true;                                            // Asignar como verdadero el booleano de validación
    } else {
        caracteristicas.classList.remove("is-valid");                       // Remover la clase que valida el campo
        caracteristicas.classList.add("is-invalid");                        // Añadir la clase que invalida el campo
        campo_caracteres = false;                                           // Asignar como falso el booleano de validación
    }
    return campo_caracteres;                                                // Retornar booleano de validación
};

let disponible = "";
// Stock
function validacionStock(){                
    if(stock.value > 0){                        // Validar que el valor sea mayor que cero
        disponible = "Disponible";
        stock.classList.remove("is-invalid");   // Remover la clase que invalida el campo
        stock.classList.add("is-valid");        // Añadir la clase que valida el campo
        campo_stock = true;                     // Asignar verdadero el booleano de validación
    } else {
        stock.classList.remove("is-valid");     // Remover la clase que valida el campo
        stock.classList.add("is-invalid");      // Añadir la clase que invalida el campo
        campo_stock = false;                    // Asignar falso el booleano de validación
    }
    return campo_stock;                         // Retornar booleano de validación
}

// Imagen
function validacionImagen(){
    var uploadFile = imagen.files[0];
    
    if (!window.FileReader) {
        Swal.fire({                                         // Se muestra una alerta que indica Error
            title: 'Cuidado',
            text: "El navegador no soporta la lectura de archivos",
            icon: 'warning',
            confirmButtonColor: '#ED959C',
            confirmButtonText: 'Ok.'
        });  
        campo_imagen = false;
        return;
    }

    if (!(/\.(jpg|png|jpeg)$/i).test(uploadFile.name)) {
        Swal.fire({                                         // Se muestra una alerta que indica Error
            title: 'Cuidado',
            text: "Archivo incorrecto. Prueba con extensiones .jpg, .jpeg y png",
            icon: 'error',
            confirmButtonColor: '#ED959C',
            confirmButtonText: 'Ok.'
        });
        campo_imagen = false;
    }
    else {
            if (uploadFile.size > 500000)
            {
                Swal.fire({                                         // Se muestra una alerta que indica Error
                    title: 'Cuidado',
                    text: "El peso de la imagen no puede exceder los 5MB",
                    icon: 'error',
                    confirmButtonColor: '#ED959C',
                    confirmButtonText: 'Ok.'
                });  
                campo_imagen = false;
            }
            else {
                Swal.fire({                                         // Se muestra una alerta que indica Éxito
                    title: '¡Excelente',
                    text: "Has seleccionado una imagen válida",
                    icon: 'success',
                    confirmButtonColor: '#ED959C',
                    confirmButtonText: 'Ok.'
                });  
                campo_imagen = true;
                let url = imagen.value.substr(12);
                visualizacion.innerHTML = `<figure><img src="./../src/img/${url}"  alt="..." class="img-fluid"></h1>`;        
            }
    }
    return campo_imagen;
};

// ARRAY PARA GUARDAR PRODUCTOS
let creacion_productos = [      // Estructura donde se guardará cada elemento y sus propiedades
{}
];

let cont_array = 0;

let cat;

// EVENTO DE REGISTRO
creacion.addEventListener("click", (e_creacion)=>{      // Se activa al presionar el botón de registro de producto
    e_creacion.preventDefault();                        // En caso de error

    if (campo_nombre && seleccionado && campo_precio && campo_stock && campo_imagen){

        if (seleccion.value == "Productos"){
            cat = 1;
        } else {
            cat = 2;
        }

        // Crear array de producto con valores ngresados
        let array_productos = {
            "nombre" : nombre.value,
            "caracteristicas": caracteristicas.value,
            "precio_producto": precio.value,
            "stock": stock.value,
            "imagen": `./../src/img/${imagen.value.substr(12)},
            "categoria_idcategoria": ${cat}`
        }

        let json_productos = JSON.stringify(array_productos);
    
        // Guardar en Local Storage de acuerdo a su categoría
        /*if (seleccion.value == "Productos"){
            let p_almacenados = localStorage.getItem("productos");      // Obtener elementos del Local Storage
            let p_almacenados_c = JSON.parse(p_almacenados);            // Conversión de datos JSON

            p_almacenados_c.push(array_productos);
            jsonProducto = JSON.stringify(p_almacenados_c);
            localStorage.setItem("productos", jsonProducto);            // Guardar JSON en Local Storage
        } else {
            let pp_almacenados = localStorage.getItem("productos_personalizados");  // Obtener elementos del Local Storage
            let pp_almacenados_c = JSON.parse(pp_almacenados);                      // Conversión de datos JSON

            pp_almacenados_c.push(array_productos);
            jsonProducto = JSON.stringify(pp_almacenados_c);
            localStorage.setItem("productos_personalizados", jsonProducto);         // Guardar JSON en Local Storage
        }*/


        const URL_MAIN = 'http://localhost:8080/api/productos/';
        fetch(URL_MAIN, {
            method: 'POST',
            body: json_productos,
            headers: {
                'Content Type' : 'application/json'
            }
        }).then(function(response) {
            response.json().then(function (json) {
                console.log("por fi");
            });//then
        }).catch(function(err) {
            console.log(err);
        });

        Swal.fire({                                                 // Se muestra una alerta que indica Éxito
            title: '¡Excelente!',
            text: "El producto ha sido registrado en la base de datos",
            icon: 'success',
            confirmButtonColor: '#ED959C',
            confirmButtonText: 'Ok.'
        });
        
        // Llamar a la función de limpieza
        limpieza();
    } else {
        Swal.fire({                                                 // Se muestra una alerta que indica Error
            title: '¡Cuidado!',
            text: "Debes llenar los campos correctamente",
            icon: 'error',
            confirmButtonColor: '#ED959C',
            confirmButtonText: 'Ok.'
        });
    };
});

// EVENTO DE LIMPIEZA
limpiar.addEventListener("click", (e_limpiar) =>{   // Se activa al presionar el botón de Limpieza
    e_limpiar.preventDefault();                     // En caso de error
    limpieza();                                     // Manda a llamar a la función de limpieza de campos
});

// FUNCIÓN DE LIMPIEZA
function limpieza(){
    // Reestablecer todo
    document.getElementById("formulario").reset();
    precio.classList.remove("is-valid");
    precio.classList.remove("is-invalid");
    caracteristicas.classList.remove("is-valid");
    caracteristicas.classList.remove("is-invalid");
    stock.classList.remove("is-valid");
    stock.classList.remove("is-invalid");
    caracteristicas_mensaje.textContent = 150 - caracteristicas.length;
    nombre.classList.remove("is-valid");
    nombre.classList.remove("is-invalid");
    seleccion.classList.remove("is-valid");
    seleccion.classList.remove("is-invalid");
    etiquetas.classList.remove("is-valid");
    etiquetas.classList.remove("is-invalid");
    
};