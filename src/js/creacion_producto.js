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
let creacion = document.getElementById("boton_creacion");               // Botón para guardar los valores del producto
let limpiar = document.getElementById("btn_limpiar");                   // Botón para limpiar el producto

// EVENTOS
// Nombre
nombre.addEventListener("change", (evento_p)=>{         // Evento que se activa al presionar enter o cambiar de campo de nombre
    evento_p.preventDefault();                          // En caso de error
    campo_nombre = validacion_nombre();                 // Manda a llamar a la función para validar el nombre
});

// Categoría
seleccion.addEventListener("click",(e_seleccion) => {   // Evento que se activa al presionar sobre la lista de Selección
    e_seleccion.preventDefault();                       // En caso de error
    seleccionado = validar_seleccionado();              // Manda a llamar a la función para validar la opción seleccionada
});

// Etiquetas
let cont = 0;                                           // Contador para los index del valor ingresado
let arreglo_etiquetas = ["cerámica"];                   // Declarar un arreglo donde la etiqueta "cerámica" viene por Default

etiquetas.addEventListener("input", (e_etiquetas)=>{    // Se activa al ingresar valores en el input
    e_etiquetas.preventDefault();                       // En caso de error
    validacionEtiquetas();                              // Llama a la función para validar las etiquetas
    cont++;                                             // Aumenta el contador del index
});

etiquetas.addEventListener("change",(e2_etiquetas) => { // Se activa al presionar enter o cambiar de campo de etiquetas en el formulario
    e2_etiquetas.preventDefault();                      // En caso de error
    guardarEtiqueta();                                  // Llama a la función que guarda la etiqueta
    cont++;                                             // Aumenta el contador del index
});

// Precio
precio.addEventListener("change", (evento_c)=>{         // Se activa al presionar enter o cambiar de campo de precio
    evento_c.preventDefault();                          // En caso de error
    validacion_precio();                                // Manda llamar la función para validar el precio
});

// Características
caracteristicas.addEventListener("input", (evento_c)=>{ // Se actiba al presionar enter o cambiar de campo de caracteristicas
    evento_c.preventDefault();                          // En caso de error
    campo_caracteres = validacion_caracteres();         // Manda llamar la función para validar las carecterísticas
    caracteristicas_mensaje.textContent = 150 - caracteristicas.value.length; // Imprimir los caracteres restantes
});

//
stock.addEventListener("change", (e_stock)=>{       // Se activa al presionar enter o cambiar de campo de caracteres
    e_stock.preventDefault();                       // En caso de error
    campo_stock = validacionStock(stock);           // Llama a la función para validar las etiquetas
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
    if (seleccion.value != "Selecciona") {                      // Valida si la opción es diferente de la Default
        seleccionado = true;                                    // Asignar como verdadero el booleano de selección
        seleccion.classList.remove("is-invalid");               // Remover la clase para invalidar el campo
        seleccion.classList.add("is-valid");                    // Añadir la clase para validar el campo
        etiquetas.focus();                                      // Cambiar cursor al campo de etiquetas
    } else {
        seleccionado = false;                                   // Asignar como falso al booleano de selección
        seleccion.classList.remove("is-valid");                 // Remover la clase para validar el campo
        seleccion.classList.add("is-invalid");                  // Añadir la clse para invalidar el campo
    }
    return seleccionado;                                        // Retornar el booleano de selección
}

// Etiquetas
function validacionEtiquetas(){                             // Función encargada de validar cada caracter ingresado en la etiqueta
    pattern = /^[A-Z\u00E0-\u00FC\u00d1\u0008]+$/i;         // Definir patrón -> letras mayúsculas y minúsculas, acentos, letra ñ y Backspace. 
                                                            // Buscar Unicode de Backspace (U+0008), no lo lee correctamente
    if (!etiquetas.value.charAt(cont).match(pattern)){      // Validar que no corresponda al patrón
        if (etiquetas.value.charAt(cont).match(" ")){       // Validar que se haya presionado espacio
            guardarEtiqueta();                              // Llamar a la función que guarda la etiqueta
        } else {                                            // No pertenece al patrón y no es espacio 
            etiquetas.classList.remove("is-valid");         // Remover la clase para validar el campo
            etiquetas.classList.add("is-invalid");          // Añadir la clase para invalidar el campo
            etiquetas.value = "";                           // Vaciar el valor del input
            cont = -1;                                      // Reestablecer el contador
        }
    }
}

function guardarEtiqueta(){                                         // Función encargada de guardar las etiquetas
    etiquetas.value = etiquetas.value.slice(0,cont).toLowerCase();  // Redefinir el valor del input (sin contar el espacio añadido de ser el caso) y convertir la cadena a minúsculas
    arreglo_etiquetas.push(etiquetas.value);                        // Añadir la etiqueta al array de etiquetas
    etiquetas.value = "";                                           // Vaciar el valor del input
    cont = -1;                                                      // Reestablecer contador
    console.log(arreglo_etiquetas);                                 // Imprimir en consola el arreglo de etiquetas
    etiquetas.classList.remove("is-invalid");                       // Remover la clase para invalidar el campo
    etiquetas.classList.add("is-valid");                            // Añadir la clase para validar el campo
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

// Stock
function validacionStock(){                
    if(stock.value > 0){                        // Validar que el valor sea mayor que cero
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

//Validación de la imagen
function ValidarImagen(obj){
    var uploadFile = obj.files[0];
    
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
        var img = new Image();
        img.onload = function () 
        { if (uploadFile.size > 500000)
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
            }
            img.src = URL.createObjectURL(uploadFile);
            campo_imagen = true;
        };
        
    }                 
}
// Esperamos a que todo el HTML esté cargado antes de ejecutar Javascrip
document.addEventListener('DOMContentLoaded', () => {

    // Input File
    const inputImage = document.querySelector('#image');
    // Nodo donde estará el editor
    const editor = document.querySelector('#editor');
    // El canvas donde se mostrará la previa
    const miCanvas = document.querySelector('#preview');
    // Contexto del canvas
    const contexto = miCanvas.getContext('2d');
    // Ruta de la imagen seleccionada
    let urlImage = undefined;
    // Evento disparado cuando se adjunte una imagen
    inputImage.addEventListener('change', abrirEditor, false);

    /**
    * Método que abre el editor con la imagen seleccionada
    */
    function abrirEditor(e) {
        // Obtiene la imagen
        urlImage = URL.createObjectURL(e.target.files[0]);
        console.log(urlImage);

        // Borra editor en caso que existiera una imagen previa
        editor.innerHTML = '';
        let cropprImg = document.createElement('img');
        cropprImg.setAttribute('id', 'croppr');
        editor.appendChild(cropprImg);

        // Limpia la previa en caso que existiera algún elemento previo
        contexto.clearRect(0, 0, miCanvas.width, miCanvas.height);

        // Envia la imagen al editor para su recorte
        document.querySelector('#croppr').setAttribute('src', urlImage);

        // Crea el editor
        new Croppr('#croppr', {
            aspectRatio: 1,
            startSize: [70, 70],
            onCropEnd: recortarImagen
        })
    }

    /**
    * Método que recorta la imagen con las coordenadas proporcionadas con croppr.js
    */
    function recortarImagen(data) {
        // Variables
        const inicioX = data.x;
        const inicioY = data.y;
        const nuevoAncho = data.width;
        const nuevaAltura = data.height;
        const zoom = 1;
        let imagenEn64 = '';
        // La imprimo
        miCanvas.width = nuevoAncho;
        miCanvas.height = nuevaAltura;
        // La declaro
        let miNuevaImagenTemp = new Image();
        // Cuando la imagen se carge se procederá al recorte
        miNuevaImagenTemp.onload = function() {
            // Se recorta
            contexto.drawImage(miNuevaImagenTemp, inicioX, inicioY, nuevoAncho * zoom, nuevaAltura * zoom, 0, 0, nuevoAncho, nuevaAltura);
            // Se transforma a base64
            imagenEn64 = miCanvas.toDataURL("image/jpeg");
            // Mostramos el código generado
            document.querySelector('#base64').textContent = imagenEn64;
            document.querySelector('#base64HTML').textContent = '<img src="' + imagenEn64.slice(0, 40) + '...">';

        }
        // Proporciona la imagen cruda, sin editarla por ahora
        miNuevaImagenTemp.src = urlImage;
    }
});

// ARRAY PARA GUARDAR PRODUCTOS
let creacion_productos = [      // Estructura donde se guardará cada elemento y sus propiedades
];

// EVENTO DE REGISTRO
creacion.addEventListener("click", (e_creacion)=>{      // Se activa al presionar el botón de registro de producto
    e_creacion.preventDefault();                        // En caso de error

    if (campo_nombre && seleccion && campo_precio && campo_stock){
        // Crear array de producto con valores ingresados
        let array_productos = {
            "Nombre" : nombre.value,
            "Categoria": seleccion.value,
            "Etiquetas": arreglo_etiquetas,
            "Precio": precio.value,
            "Caracteristicas": caracteristicas.value,
            "Stock": stock.value
        }
    
        // Crear JSON
        creacion_productos.push(array_productos);                   // Ingresar array en la estructura de productos
        let jsonProducto = JSON.stringify(creacion_productos);      // Convertir estructura en un JSON
        localStorage.setItem("productosRegistrados",jsonProducto);  // Guardar JSON en Local Storage

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
limpiar.addEventListener("click", (e_limpiar) =>{
    e_limpiar.preventDefault();
    limpieza();
});

// FUNCIÓN DE LIMPIEZA
function limpieza(){
    // Reestablecer todo
    document.getElementById("formulario").reset();
    arreglo_etiquetas = ["cerámica"];
    caracteristicas_mensaje.textContent = 150 - caracteristicas.length;
    nombre.classList.remove("is-valid");
    nombre.classList.remove("is-invalid");
    seleccion.classList.remove("is-valid");
    seleccion.classList.remove("is-invalid");
    etiquetas.classList.remove("is-valid");
    etiquetas.classList.remove("is-invalid");
    precio.classList.remove("is-valid");
    precio.classList.remove("is-invalid");
    caracteristicas.classList.remove("is-valid");
    caracteristicas.classList.remove("is-invalid");
    stock.classList.remove("is-valid");
    stock.classList.remove("is-invalid");
};
