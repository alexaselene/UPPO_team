// OBTENER ELEMENTOS 
const contactanos = document.getElementById("btn_contacto");      // Botón encargado de enviar los inputs del formulario (cuando sean válidos)
const contrasena = document.getElementById("contrasena");         // Input donde se ingresa la contraseña
const correo = document.getElementById("correo");                  // Input donde se ingresa el email
const registro = document.getElementById("registro");            //Botón encargado para la sección de registro
const olvidar = document.getElementById("olvidar");               // Botón cuando el usuario olvide su contraseña 
const limpieza = document.getElementById("btn_limpiar");          // Botón encargado de limpiar los campos del formulario

// INICIALIZACIÓN DE BOOLEANOS PARA LA VÁLIDACIÓN / INVALIDACIÓN DE LOS CAMPOS DEL FORMULARIO
let val_correo = false;          // Booleano para el email
let val_caracter = false;       // Booleano para caracteres del mensaje


// Email
correo.addEventListener("change",(evento_e)=>{             // Se activa al presionar enter o cambiar de campo del email en el formulario
    evento_e.preventDefault;                                // En caso de error
    val_correo = validacion_email(correo);                // Llamar a la función para validarlo, obteniendo un true o false si cumple con las condiciones o no
    activacion(val_correo, val_caracter);                // Llamar a la función que activará el botón en caso de que todos los campos se validen    
});


// Correo
contrasena.addEventListener("change",(evento_cn)=>{       // Se activa al presionar enter o cambiar de campo del email en el formulario
    evento_cn.preventDefault;                                // En caso de error
    val_caracter = validacion_caracteres(contrasena);                // Llamar a la función para validarlo, obteniendo un true o false si cumple con las condiciones o no
    activacion(val_correo, val_caracter);                // Llamar a la función que activará el botón en caso de que todos los campos se validen    
});


// FUNCIONES DE VALIDACIÓN
// Email
function validacion_email(correo_1){                                // La función recibe el elemento input correspondiente al email
    const pattern_e = /^[a-z\u00E0-\u00FC\u00d1\u0021-\u0040\u005f]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/;    // Definir un patrón
    if(correo_1.value.match(pattern_e)){                              // Comparar el valor ingresado con el patrón
        correo_1.classList.remove("is-invalid");                    // Remover la clase para invalidar el campo
        correo_1.classList.add("is-valid");                         // Añadir la clase para validar el campo
        val_correo = true;                                           // Asignar verdadero el valor del booleano de validación
        contrasena.focus();                               // Cambiar el cursor al campo del teléfono
    } else {
        correo_1.classList.remove("is-valid");                      // Remover la clase para validar el campo
        correo_1.classList.add("is-invalid");                       // Añadir la clase para invalidar el campo 
        val_correo = false;                                          // Asignar falso el valor del booleano de validación
    }
    return val_correo;                                               // Retornar el booleano de validacion
};



