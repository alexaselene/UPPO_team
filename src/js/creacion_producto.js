// BOOLEANOS DE VALIDACIÓN
let campo_nombre = false;
let seleccionado = false;
let campo_precio = false;
let campo_caracteres = false;
let campo_stock = false;
let campo_imagen = false;

let creacion = document.getElementById("boton_creacion");

// OBTENER ELEMENTOS
//NOMBRE DEL PRODUCTO 
let creacionProd = document.getElementById("nombre"); // Input donde se ingresa el nombre del producto
let caracteristicas_prod = document.getElementById("carecterísticas"); // Input donde se ingresan las características del producto
let precioProd = document.getElementById("precio"); // Input donde se ingresan las características del producto

//EVENTO PARA EL INGRESO DEL NOMBRE DEL PRODUCTO
creacionProd.addEventListener("change", (evento_p)=>{
    evento_p.preventDefault();
    campo_nombre = validacion_creacionProd();
    habilitar_boton();

});

//VALIDACIÓN PARA EL NOMBRE DEL PRODUCTO
function validacion_creacionProd(){
    let nombre = document.getElementById("nombre");
    let nombreValor = nombre.value;
    console.dir(nombre);

    if(nombreValor.length >= 3 && nombreValor.length <=50){
        nombre.classList.remove("is-invalid");
        nombre.classList.add("is-valid");
        console.log("El nombre del producto es válido"); 
        campo_nombre = true;
    } else {
        nombre.classList.remove("is-valid");
        nombre.classList.add("is-invalid");
        console.log("El nombre del producto es inválido");
        campo_nombre = false;
    }
    return campo_nombre;
};

// S E L E C C I Ó N
let seleccion = document.getElementById("seleccion");           // Lista de selección de opciones de categorías

seleccion.addEventListener("click",(e_seleccion) => {           // Evento que se activa al presionar sobre la lista de Selección
    e_seleccion.preventDefault();                               // En caso de error
    seleccionado = validar_seleccionado();                      // Manda a llamar a la función para validar la opción seleccionada
})

function validar_seleccionado(){                                // Función que valida la opción seleccionada
    if (seleccion.value != "Selecciona") {                      // Valida si la opción es diferente de la Default
        seleccionado = true;                                    // Asignar como verdadero el booleano de selección
        seleccion.classList.remove("is-invalid");               // Remover la clase para invalidar el campo
        seleccion.classList.add("is-valid");                    // Añadir la clase para validar el campo
    } else {
        seleccionado = false;                                   // Asignar como falso al booleano de selección
        seleccion.classList.remove("is-valid");                 // Remover la clase para validar el campo
        seleccion.classList.add("is-invalid");                  // Añadir la clse para invalidar el campo
    }
    return seleccionado;                                        // Retornar el booleano de selección
}

// E T I Q U E T A S 
let etiquetas = document.getElementById("etiquetas");       // Acceder al input correspondiente a las etiquetas
let cont = 0;                                               // Contador para los index del valor ingresado
let arreglo_etiquetas = ["cerámica"];                       // Declarar un arreglo donde la etiqueta "cerámica" viene por Default

etiquetas.addEventListener("input", (e_etiquetas)=>{        // Se activa al ingresar valores en el input
    e_etiquetas.preventDefault();                           // En caso de error
    console.log(cont);                                      // Imprime el índice del valor del input en la consola
    validacionEtiquetas();                                  // Llama a la función para validar las etiquetas
    cont++;                                                 // Aumenta el contador del index
});

etiquetas.addEventListener("change",(e2_etiquetas) => {     // Se activa al presionar enter o cambiar de campo de etiquetas en el formulario
    e2_etiquetas.preventDefault();                          // En caso de error
    guardarEtiqueta();                                      // Llama a la función que guarda la etiqueta
    cont++;                                                 // Aumenta el contador del index
})

/* Esta función es sensible a la presión del Backspace (borrado). Sin embargo, aún hay conflicto con el 
uso de dicha tecla, por lo que no tiene utilidad de momento */
/*etiquetas.addEventListener('keyup', (e) => {
    if(e.key == 'Backspace'){
        e.preventDefault();
        cont -= 2;
        if (cont < 0){
            cont = 0;
        }
    }//if Enter 
}); */

function validacionEtiquetas(){                             // Función encargada de validar cada caracter ingresado en la etiqueta
    console.log(etiquetas.value.charAt(cont));              // Impresión de cada caracter ingresado en la consola
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

function guardarEtiqueta(){                                 // Función encargada de guardar las etiquetas
    etiquetas.value = etiquetas.value.slice(0,cont)         // Redefinir el valor del input (sin contar el espacio añadido de ser el caso)
    arreglo_etiquetas.push(etiquetas.value);                // Añadir la etiqueta al array de etiquetas
    etiquetas.value = "";                                   // Vaciar el valor del input
    cont = -1;                                              // Reestablecer contador
    console.log(arreglo_etiquetas);                         // Imprimir en consola el arreglo de etiquetas
    etiquetas.classList.remove("is-invalid");               // Remover la clase para invalidar el campo
    etiquetas.classList.add("is-valid");                    // Añadir la clase para validar el campo
}

//EVENTO PARA EL INGRESO DEL LOS PRECIOS DE LOS PRODUCTOS
precioProd.addEventListener("change", (evento_c)=>{
    evento_c.preventDefault();
        validacion_precioProd();
        campo_precios = habilitar_boton();
});

//VALIDACIÓN PARA PRECIOS DEL PRODUCTO
function validacion_precioProd(){
    let precio = document.getElementById("precio");
    let precioValor = precio.value;
    console.dir(precio);
    
    let pattern = /^\d*(\.\d{1})?\d{0,1}$/ ; //valida hasta dos cifras con decimal

    if(precioValor.match(pattern) )
    {
        precio.classList.remove("is-invalid");
        precio.classList.add("is-valid");
        console.log("El precio es válido");  
        campo_precio = true; 
    } else {
        precio.classList.remove("is-valid");
        precio.classList.add("is-invalid");
        console.log("El precio es inválido");
        campo_precio = false;
    }
    return campo_precio;
};

//EVENTO PARA EL INGRESO DEL LAS CARACTERISTICAS DE LOS PRODUCTOS
let caracteristicas_mensaje = document.getElementById("letras_mensaje");
caracteristicas_prod.addEventListener("input", (evento_c)=>{
    evento_c.preventDefault();
     campo_caracteres = validacion_caracteres();
        caracteristicas_mensaje.textContent = 150 - caracteristicas_prod.value.length;
});

//VALIDACIÓN PARA LAS CARACTERÍSTICAS DEL PRODUCTO
function  validacion_caracteres(){
    let caracteres = document.getElementById("carecterísticas");
    let caracteresValor = caracteres.value;
    console.dir(caracteres);
    let pattern_m = /^[a-zA-Z\u00E0-\u00FC\u00d1\u0020\u0030-\u0039]+$/;

    if((caracteresValor.length >= 3) && (caracteresValor.length <= 150) && (caracteresValor.match(pattern_m)))
    {
        caracteres.classList.remove("is-invalid"); 
        caracteres.classList.add("is-valid");
        console.log("Las caracteristicas son válidas"); 
        campo_caracteres = true;  
    } else {
        caracteres.classList.remove("is-valid");
        caracteres.classList.add("is-invalid")
        console.log("Las caracteristicas son inválidas");
        campo_caracteres = false;
    }
    return campo_caracteres;
};

//Validación de la imagen
function ValidarImagen(obj){
    var uploadFile = obj.files[0];
    
    if (!window.FileReader) {
        swal('El navegador no soporta la lectura de archivos');
        return;
    }

    if (!(/\.(jpg|png|jpeg)$/i).test(uploadFile.name)) {
        swal('No has seleccionado una imagen','Prueba con: jpg,jpeg y png','error');
    }
    else {
        var img = new Image();
        img.onload = function () 
        { if (uploadFile.size > 500000)
            {
                swal('El peso de la imagen no puede exceder los 5MB')
            }
            else {
                swal('Haz seleccionado la imagen correcta', '', 'success')         
            }
        };
        img.src = URL.createObjectURL(uploadFile);
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


// S T O C K 
let stock = document.getElementById("stock");

stock.addEventListener("input", (e_stock)=>{        // Se activa al ingresar valores en el input
    e_stock.preventDefault();                       // En caso de error
    
    campo_stock = validacionStock(stock);           // Llama a la función para validar las etiquetas
    habilitar_boton();
});

function validacionStock(stock){
    if(stock.value > 0){
        stock.classList.remove("is-invalid");
        stock.classList.add("is-valid");
        campo_stock = true;
    } else {
        stock.classList.remove("is-valid");
        stock.classList.add("is-invalid");
        campo_stock = false;
    }
    return campo_stock;
}

function habilitar_boton(){
    if(campo_nombre && seleccionado && campo_precio && campo_caracteres && campo_stock){
        creacion.disabled = false;
    } else {
        creacion.disabled = true;
    }
};

let creacion_productos = [
];


creacion.addEventListener("click", (e_creacion)=>{        // Se activa al ingresar valores en el input
    e_creacion.preventDefault();                       // En caso de error

    let array_productos = {
        "Nombre" : creacionProd.value,
        "Categoria": seleccion.value,
        "Etiquetas": arreglo_etiquetas,
        "Precio": precioProd.value,
        "Caracteristicas": caracteristicas_prod.value,
        "Stock": stock.value
    }

    // Reestablecer todo
    creacionProd.value = "";
    seleccion.value = "";
    arreglo_etiquetas = ["cerámica"];
    precioProd.value = "";
    caracteristicas_prod.value = "";
    stock.value = "";
    caracteristicas_contador = 0;
    caracteristicas_restates = 150;
    caracteristicas_mensaje.textContent =`${caracteristicas_restates}`;

    creacionProd.classList.remove("is-valid");
    creacionProd.classList.remove("is-invalid");
    seleccion.classList.remove("is-valid");
    seleccion.classList.remove("is-invalid");
    etiquetas.classList.remove("is-valid");
    etiquetas.classList.remove("is-invalid");
    precioProd.classList.remove("is-valid");
    precioProd.classList.remove("is-invalid");
    caracteristicas_prod.classList.remove("is-valid");
    caracteristicas_prod.classList.remove("is-invalid");
    stock.classList.remove("is-valid");
    stock.classList.remove("is-invalid");

    creacion_productos.push(array_productos);
    console.log(creacion_productos);

    let jsonProducto = JSON.stringify(creacion_productos);
    localStorage.setItem("productosRegistrados",jsonProducto);

});
