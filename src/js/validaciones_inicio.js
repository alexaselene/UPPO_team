const inicio = document.getElementById("btn_contacto");              // Botón encargado de enviar los inputs del formulario (cuando sean válidos)
const contrasena = document.getElementById("contrasena");           // Input donde se ingresa la contraseña
const correo = document.getElementById("correo");                   // Input donde se ingresa el email
const registro = document.getElementById("registro");               // Botón encargado para la sección de registro
const limpieza = document.getElementById("btn_limpiar");            // Botón encargado de limpiar los campos del formulario

let cont_contra = 0;                                                // Contador para recorrer los valores ingresados en contraseña

// INICIALIZACIÓN DE BOOLEANOS PARA LA VÁLIDACIÓN / INVALIDACIÓN DE LOS CAMPOS DEL FORMULARIO
let val_correo = false;             // Booleano para el email
let val_contrasena = false;         // Booleano para la contraseña

// Email
correo.addEventListener("change",(evento_e)=>{              // Se activa al presionar enter o cambiar de campo del email en el formulario
    evento_e.preventDefault;                                // En caso de error
    val_correo = validacion_email(correo);                  // Llamar a la función para validarlo, obteniendo un true o false si cumple con las condiciones o no
});

// Contraseña
contrasena.addEventListener("change",(evento_cn)=>{         // Se activa al presionar enter o cambiar de campo del email en el formulario
    evento_cn.preventDefault;                               // En caso de error
    validacion_pass_enter(val_contrasena);                  // Llamar a la función validar el valor ingresado en general
});

contrasena.addEventListener("input",(evento_i)=>{           // Se activa al cambiar de valores en el input
    evento_i.preventDefault;                                // En caso de error
    val_contrasena = validacion_pass(contrasena);           // Llamar a la función para validar cada valor, obteniendo un true o false si cumple con las condiciones o no
    cont_contra++;
});

// Inicio de sesión
inicio.addEventListener("click",(evento_is)=>{                          // Se activa al presionar el botón para iniciar sesión
    evento_is.preventDefault;

    if (val_correo == true &&  val_contrasena == true){
        sesion_valida();                                                // Llamar a la función que valida el correo y contraseña ingresados
    } else {
        Swal.fire({                                                     // Se muestra una alerta que indica Fallo
            title: '¡Cuidado!',
            text: 'Rellena ambos campos correctamente',
            icon: 'error',
            confirmButtonColor: '#ED959C',
            confirmButtonText: 'Ok.' 
            }); 
    }
});

// FUNCIONES DE VALIDACIÓN
// Email
function validacion_email(correo_1){                                // La función recibe el elemento input correspondiente al email
    const pattern_e = /^[a-z\u00E0-\u00FC\u00d1\u0021-\u0040\u005f]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/;    // Definir un patrón
    if(correo.value.match(pattern_e)){                              // Comparar el valor ingresado con el patrón
        correo_1.classList.remove("is-invalid");                    // Remover la clase para invalidar el campo
        correo_1.classList.add("is-valid");                         // Añadir la clase para validar el campo
        val_correo = true;                                          // Asignar verdadero el valor del booleano de validación
        contrasena.focus();                                         // Cambiar el cursor al campo de la contraseña
    } else {
        correo_1.classList.remove("is-valid");                      // Remover la clase para validar el campo
        correo_1.classList.add("is-invalid");                       // Añadir la clase para invalidar el campo 
        val_correo = false;                                         // Asignar falso el valor del booleano de validación
    }
    return val_correo;                                              // Retornar el booleano de validacion
  };

// Contraseña
function validacion_pass(contrasena){
    const pattern_p = /^[a-zA-Z\u00E0-\u00FC\u00d1\u0021-\u0040]+$/;    // Definir patrón

    if (contrasena.value[cont_contra].match(pattern_p)) {               // Comparar valor ingresado con patrón definido  
        val_contrasena = true;                                          // Asignar verdadero el valor del booleano de validación
    } else {
        val_contrasena = false;                                         // Asignar falso el valor del booleano de validación
    };
    return val_contrasena;                                              // Retornar el booleano de validación
};

function validacion_pass_enter(val_contrasena){
    if  (val_contrasena == true) { 
        contrasena.classList.remove("is-invalid");                      // Remover la clase para invalidar el campo       
    } else {
        contrasena.classList.remove("is-valid");                        // Remover la clase para validar el campo
        contrasena.classList.add("is-invalid");                         // Añadir la clase para invalidar el campo
    };
};

// Campos de correo y contraseña
function sesion_valida (){
    let validacionStorage = localStorage.getItem("usuariosRegistrados");    // Obtener elementos del Local Storage
    let registrados= JSON.parse(validacionStorage);                         // Conversión de datos JSON

    // For en donde se recorren todos los elementos del arreglo de los usuarios registrados
    for(let i = 0; i < registrados.length; i++){
        if(((registrados[i].correo_usuario == correo.value) && (registrados[i].contra_usuario == btoa(contrasena.value))) || ((correo.value == "mariaharo@admin.com") && (contrasena.value == "admin"))){
            localStorage.setItem("sesion_iniciada", correo.value);                      // Guardar JSON en Local Storage
            window.location.href = "./../../index.html";      
        } else {
            Swal.fire({                                 // Se muestra una alerta que indica Fallo
                title: '¡Cuidado!',
                text: 'El correo o la contraseña no coinciden',
                icon: 'error',
                confirmButtonColor: '#ED959C',
                confirmButtonText: 'Ok.' 
                });
        }
    };
};