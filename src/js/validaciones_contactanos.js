// OBTENER ELEMENTOS 
const contactanos = document.getElementById("btn_contacto");      // Botón encargado de enviar los inputs del formulario (cuando sean válidos)
const ingreso_nombre = document.getElementById("nombre");         // Input donde se ingresa el nombre
const ingreso_email = document.getElementById("email");           // Input donde se ingresa el email
const ingreso_telefono = document.getElementById("telefono");     // Input donde se ingresa el teléfono
const ingreso_mensaje = document.getElementById("mensaje");       // Input donde se ingresa el mensaje
const caracteres_mensaje = document.getElementById("caracteres_mensaje"); // Espacio donde se imprimen los caracteres restantes
const limpieza = document.getElementById("btn_limpiar");          // Botón encargado de limpiar los campos del formulario


// INICIALIZACIÓN DE BOOLEANOS PARA LA VÁLIDACIÓN / INVALIDACIÓN DE LOS CAMPOS DEL FORMULARIO
let val_n = false;          // Booleano para el nombre
let val_e = false;          // Booleano para el email
let val_t = false;          // Booleano para el teléfono
let val_tx = false;         // Booleano para el mensaje 
let val_tx_i = false;       // Booleano para caracteres del mensaje

// EVENTOS DE INGRESO DE INPUT
// Nombre
ingreso_nombre.addEventListener("change",(evento_n)=>{      // Se activa al presionar enter o cambiar de campo del nombre en el formulario 
    evento_n.preventDefault;                                // En caso de error
    val_n = validacion_name(ingreso_nombre);                // Llamar a la función para validarlo, obteniendo un true o un false si cumple con las condiciones o no
    activacion(val_n, val_e, val_t, val_tx);                // Llamar a la función que activará el botón en caso de que todos los campos se validen
});

// Email
ingreso_email.addEventListener("change",(evento_e)=>{       // Se activa al presionar enter o cambiar de campo del email en el formulario
    evento_e.preventDefault;                                // En caso de error
    val_e = validacion_email(ingreso_email);                // Llamar a la función para validarlo, obteniendo un true o false si cumple con las condiciones o no
    activacion(val_n, val_e, val_t, val_tx);                // Llamar a la función que activará el botón en caso de que todos los campos se validen    
});

// Teléfono
ingreso_telefono.addEventListener("change",(evento_t)=>{    // Se activa al presionar enter o cambiar de campo del teléfono en el formulario
    evento_t.preventDefault;                                // En caso de error 
    val_t = validacion_tel(ingreso_telefono);               // Llamar a la función para validarlo, obteniendo un true o false si cumple con las condiciones o no
    activacion(val_n, val_e, val_t, val_tx);                // Llamar a la función que activará el botón en caso de que todos los campos se validen    
});

// Mensaje 
ingreso_mensaje.addEventListener("change",(evento_m)=>{     // Se activa al presionar enter o cambiar de campo del teléfono en el formulario
    evento_m.preventDefault;                                // En caso de error
    val_tx = validacion_texto(ingreso_mensaje);             // Llamar a la función para validarlo, obteniendo un true o false si cumple con las condiciones o no
    activacion(val_n, val_e, val_t, val_tx);                // Llamar a la función que activará el botón en caso de que todos los campos se validen    
});

let cont_caracter = 0;
ingreso_mensaje.addEventListener("input",(evento_c)=>{                  // Se activa cada que el campo del mensaje se ve modificado
    evento_c.preventDefault;                                            // En caso de error
    caracteres_mensaje.textContent =  150 - mensaje.value.length;              // Imprimir en el espacio de texto los caracteres restantes
    val_tx_i = validacion_caracteres(ingreso_mensaje);
    cont_caracter++;
});

// FUNCIONES DE VALIDACIÓN
// Nombre
function validacion_name(nombre){                               // La función recibe el elemento input correspondiente al nombre
    let nombreValor = nombre.value;                             // Obtener el valor del input de nombre
    let pattern_n =  /^[a-zA-Z\u00E0-\u00FC\u00d1]+ [a-zA-Z\u00E0-\u00FC\u00d1]+$/;                   // Definir un patrón
    let pattern_n3 = /^[a-zA-Z\u00E0-\u00FC\u00d1]+ [a-zA-Z\u00E0-\u00FC\u00d1]+ [a-zA-Z\u00E0-\u00FC\u00d1]+$/
    let pattern_n4 = /^[a-zA-Z\u00E0-\u00FC\u00d1]+ [a-zA-Z\u00E0-\u00FC\u00d1]+ [a-zA-Z\u00E0-\u00FC\u00d1]+ [a-zA-Z\u00E0-\u00FC\u00d1]+$/

    if(nombreValor.length >= 5 && ((nombreValor.match(pattern_n)) || (nombreValor.match(pattern_n3)) || (nombreValor.match(pattern_n4)))){// Evaluar la longitud del valor ingresado y compararlo con el patrón
        nombre.classList.remove("is-invalid");                  // Remover la clase para invalidar el campo
        nombre.classList.add("is-valid");                       // Añadir la clase para validar el campo
        val_n = true;                                           // Asignar verdadero al valor del booleano de validación
        ingreso_email.focus();                                  // Cambiar el cursor al campo de email
    } else {
        nombre.classList.remove("is-valid");                    // Remover la clase para validar el campo
        nombre.classList.add("is-invalid");                     // Añadir la clase para invalidar el campo
        val_n = false;                                          // Asignar falso al valor del booleano de validación
    }
    return val_n;                                               // Retornar el booleano de validación
};
  
// Email
function validacion_email(mail){                                // La función recibe el elemento input correspondiente al email
    const pattern_e = /^[a-z\u00E0-\u00FC\u00d1\u0021-\u0040\u005f]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/;    // Definir un patrón
    if(mail.value.match(pattern_e)){                              // Comparar el valor ingresado con el patrón
        mail.classList.remove("is-invalid");                    // Remover la clase para invalidar el campo
        mail.classList.add("is-valid");                         // Añadir la clase para validar el campo
        val_e = true;                                           // Asignar verdadero el valor del booleano de validación
        ingreso_telefono.focus();                               // Cambiar el cursor al campo del teléfono
    } else {
        mail.classList.remove("is-valid");                      // Remover la clase para validar el campo
        mail.classList.add("is-invalid");                       // Añadir la clase para invalidar el campo 
        val_e = false;                                          // Asignar falso el valor del booleano de validación
    }
    return val_e;                                               // Retornar el booleano de validacion
};

// Teléfono
function validacion_tel(telefono){
    const pattern_t =/((?:\+|00)[17](?: |\-)?|(?:\+|00)[1-9]\d{0,2}(?: |\-)?|(?:\+|00)1\-\d{3}(?: |\-)?)?(0\d|\([0-9]{3}\)|[1-9]{0,3})(?:((?: |\-)[0-9]{2}){4}|((?:[0-9]{2}){4})|((?: |\-)[0-9]{3}(?: |\-)[0-9]{4})|([0-9]{7}))/; // Definir un patrón
    
    if (telefono.value.match(pattern_t) && telefono.value.length >= 10 && telefono.value.length <= 12){ // Evaluar longitud del valor ingresado y compararlo con el patrón
            telefono.classList.remove("is-invalid");    // Remover la clase para invalidar el campo
            telefono.classList.add("is-valid");         // Añadir la clase para validar el campo
            val_t = true;                               // Asignar verdadero el valor del booleano de validación
            ingreso_mensaje.focus();                    // Cambiar el cursor al campo del mensaje      
        } else{  
            telefono.classList.remove("is-valid");      // Remover la clase para validar el campo                                       
            telefono.classList.add("is-invalid")        // Añadir la clase para invalidar el campo
            val_t = false;                              // Asignar falso el valor del booleano de validación
        }
        return val_t;                                   // Retornar el booleano de validación
    };

// Mensaje 
function validacion_texto(mensaje){
    let mensajeValor = mensaje.value;                                   // Obtener el valor del campo de mensaje
    const pattern_m = /^[a-zA-Z\u00E0-\u00FC\u00d1\u0021-\u0040\s]+$/;

    if ((mensajeValor.length >= 1) && (mensajeValor.length <= 150) && (mensajeValor.match(pattern_m)) && (val_tx_i == true)){   // Evaluar la longitud del valor ingresado
        mensaje.classList.remove("is-invalid");                         // Remover la clase para invalidar el campo
        mensaje.classList.add("is-valid");                              // Añadir la clase para validar el campo      
        val_tx = true;                                                  // Asignar verdadero el valor del booleano de validación
        console.log(val_tx_i);
    }else {
        mensaje.classList.remove("is-valid");                           // Remover la clase para validar el campo
        mensaje.classList.add("is-invalid");                            // Añadir la clase para invalidar el campo
        val_tx = false;                                                 // Asignar falso el valor del booleano de validación
    };

    return val_tx;
}

function validacion_caracteres(caracter){                               // Validación para cada caracter
    const pattern_c = /^[a-zA-Z\u00E0-\u00FC\u00d1\u0021-\u0040]+$/;            // Definir patrón

    mensajeValor = caracter.value;                                      // Obtener el valor del input
    if ((mensajeValor.charAt(cont_caracter).match(pattern_c))){           // Validar que contenga algún caracter (letra, número, símbolo)
        val_tx_i = true;                                                // Asignar verdadero el valor del booleano de validación
    }
    return val_tx_i;                                                    // Retornar booleano de validación
}

// Limpieza de los campos del formulario
function reset_f(){                                    
    document.getElementById("formulario").reset();                      // Limpiar valores
    ingreso_nombre.classList.remove("is-valid");                        // Remover clases de validación
    ingreso_nombre.classList.remove("is-invalid");
    ingreso_email.classList.remove("is-valid");
    ingreso_email.classList.remove("is-invalid");
    ingreso_telefono.classList.remove("is-valid");
    ingreso_telefono.classList.remove("is-invalid");
    ingreso_mensaje.classList.remove("is-valid");
    ingreso_mensaje.classList.remove("is-invalid");
    val_n = false;                                                      // Reestablecer booleanos de activación                   
    val_e = false;
    val_t = false;
    val_tx = false;
    val_tx_i = false;
    carecteres_restantes = 150;                                         // Reestablecer caracteres en el campo de mensaje
    caracteres_mensaje.textContent = carecteres_restantes;              // Imprimir los caracteres restantes (totales) en el campo de mensaje
}

//EVENTO DE LIMPIEZA
limpieza.addEventListener("click", (evento_l)=>{
    evento_l.preventDefault();
    reset_f();
})

// EVENTO DE ENVÍO
contactanos.addEventListener("click",(evento)=>{    // Se activa al presionar el botón Contáctanos
    evento.preventDefault();
    if (val_n && val_e && val_t && val_tx){         
        Swal.fire({                                 // Se muestra una alerta que indica Éxito 
            title: '¡Excelente!',
            text: 'Pronto nos pondremos en contacto.',
            icon: 'success',
            confirmButtonColor: '#ED959C',
            confirmButtonText: 'Ok.' 
            });
        envio(ingreso_nombre.value, ingreso_telefono.value, ingreso_mensaje.value); // Enviar datos a la función de envio
        reset_f();                                                                  // Limpiar el formulario
    } else {
        Swal.fire({                                         // Se muestra una alerta que indica Error
            title: 'Cuidado',
            text: "Debes llenar los campos correctamente.",
            icon: 'error',
            confirmButtonColor: '#ED959C',
            confirmButtonText: 'Ok.'
        });             
    }         
});

// Función para el envío de información al correo electrónico
function envio(nombre_info, telefono_info, mensaje_info){
        let correo = `Cliente: ${nombre_info}. Número telefónico: ${telefono_info}. Mensaje: ${mensaje_info}`;  // Definir cuerpo del correo
        window.location = `mailto:uppo.team@gmail.com?subject=Mensaje de cliente ${nombre_info}&body=${correo}`;// Abrir ventana para el envío del correo
}