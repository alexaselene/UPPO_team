// Validaciones:
// Nombre de producto: longitud - F
// Selección: escoger una opción - D
// Etiquetas de producto: 1 sola palabra (no espacios, no caracteres raros, no números) por cada enter -> acumulando en un array - D 
// Precio: sólo número. - M


// OBTENER ELEMENTOS
//NOMBRE DEL PRODUCTO 
let creacionProd = document.getElementById("nombre"); // Input donde se ingresa el nombre del producto
let caracteristicas_prod = document.getElementById("carecterísticas"); // Input donde se ingresan las características del producto
let precioProd = document.getElementById("precio"); // Input donde se ingresan las características del producto


//EVENTO PARA EL INGRESO DEL NOMBRE DEL PRODUCTO
creacionProd.addEventListener("change", (evento_p)=>{
    evento_p.preventDefault();
    validacion_creacionProd();
    
    

});

//EVENTO PARA EL INGRESO DEL LAS CARACTERISTICAS DE LOS PRODUCOS
let caracteristicas_contador = 0;
let caracteristicas_mensaje = document.getElementById("letras_mensaje");
caracteristicas_prod.addEventListener("input", (evento_c)=>{
    evento_c.preventDefault();
     validacion_caracteres();
     
        caracteristicas_contador --;
        let caracteristicas_restates = 150 + caracteristicas_contador;
        caracteristicas_mensaje.textContent =`${caracteristicas_restates}`;
    

});

//EVENTO PARA EL INGRESO DEL LOS PRECIOS DE LOS PRODUCTOS

precioProd.addEventListener("change", (evento_c)=>{
    evento_c.preventDefault();
        validacion_precioProd();

});

//VALIDACIÓN PARA EL NOMBRE DEL PRODUCTO

function validacion_creacionProd(){
    let nombre = document.getElementById("nombre");
    let nombreValor = nombre.value;
    console.dir(nombre);

    

    if( nombreValor.length >= 3 && nombreValor.length <=50)
    {
        nombre.classList.add("is-valid");
        nombre.classList.remove("is-invalid");
        console.log("El nombre del producto es válido");   
    } else {
        nombre.classList.add("is-invalid")
        nombre.classList.remove("is-valid");
        console.log("El nombre del producto es inválido");
    }
};

//VALIDACIÓN PARA LAS CARACTERÍSTICAS DEL PRODUCTO
function  validacion_caracteres(){
    let caracteres = document.getElementById("carecterísticas");
    let caracteresValor = caracteres.value;
    console.dir(caracteres);

  

    if((caracteresValor.length >= 3) && (caracteresValor.length <= 150))
    {
        caracteres.classList.add("is-valid");
        caracteres.classList.remove("is-invalid");
        console.log("Las caracteristicas son válidas");   
    } else {
        caracteres.classList.add("is-invalid")
        caracteres.classList.remove("is-valid");
        console.log("Las caracteristicas son inválidas");
    }
};



//VALIDACIÓN PARA PRECIOS DEL PRODUCTO
function validacion_precioProd(){
    let precio = document.getElementById("precio");
    let precioValor = precio.value;
    console.dir(precio);
    
    let pattern = /^\d*(\.\d{1})?\d{0,1}$/ ; //valida hasta dos cifras con decimal

    if(precioValor.match(pattern) )
    {
        precio.classList.add("is-valid");
        precio.classList.remove("is-invalid");
        console.log("El precio es válido");   
    } else {
        precio.classList.add("is-invalid");
        precio.classList.remove("is-valid");
        console.log("El precio es inválido");
    }
};
















// Características del producto: máximo de caracteres (150) - F 
// Stock: no números negativos. Ingreso en input de enteros. - D
// Imagen: tamaño de la imagen - D 

// Nombre, características, precio - 2 personas 
// Selección 
// Etiquetas - 3 personas -> Diana, Sebas, Gera
// Stock
// Imagen - 3 personas -> Clau, Alexa, José

// S E L E C C I Ó N
let seleccion = document.getElementById("seleccion");           // Lista de selección de opciones de categorías
let seleccionado = false;                                       // Booleano que se activa al seleccionar una opción válida

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
etiquetas.addEventListener('keyup', (e) => {
    if(e.key == 'Backspace'){
        e.preventDefault();
        cont -= 2;
        if (cont < 0){
            cont = 0;
        }
    }//if Enter 
});

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


let mainForm = document.getElementById("mainForm");
mainForm.addEventListener('keydown', function (e){
    console.log(e.key);
    if(e.key == 'Enter'){
        e.preventDefault();
    }//if Enter 
});



//Validación de la imagen
function ValidarImagen(obj){
    let uploadFile = obj.files[0];
    
    if (!window.FileReader) {
        swal('El navegador no soporta la lectura de archivos');
        return;
    }

    if (!(/\.(jpg|jpeg|png|gif)$/i).test(uploadFile.name)) {
        swal('No has seleccionado una imagen','Prueba con: jpg,jpeg y png','error');
       
    }
    
    else {
        let img = new Image();
        img.onload = function () {
           
            if (uploadFile.size > 500000)
            {
                swal('El peso de la imagen no puede exceder los 5MB')
            }
           
        };
        img.src = URL.createObjectURL(uploadFile);
    }                 
}
// Recorte de la imagen
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

