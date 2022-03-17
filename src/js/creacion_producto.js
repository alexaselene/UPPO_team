// Validaciones:
// Nombre de producto: longitud - F
// Selección: escoger una opción - D
// Etiquetas de producto: 1 sola palabra (no espacios, no caracteres raros, no números) por cada enter -> acumulando en un array - D 
// Precio: sólo número. - M
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
/*etiquetas.addEventListener('keyup', (e) => {
    if(e.key == 'Backspace'){
        e.preventDefault();
        cont -= 2;
        if (cont < 0){
            cont = 0;
        }
    }//if Enter 
});*/

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

/*
let mainForm = document.getElementById("mainForm");
mainForm.addEventListener('keydown', function (e){
    console.log(e.key);
    if(e.key == 'Enter'){
        e.preventDefault();
    }//if Enter 
});
*/

