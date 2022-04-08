// OBTENER ELEMENTOS
const registro = document.getElementById("btn_registro");                 // Botón encargado de enviar los inputs del formulario (cuando sean válidos)
const nombre = document.getElementById("nombre");                         // Input donde se ingresa el nombre
const email = document.getElementById("email");                           // Input donde se ingresa el email
const telefono = document.getElementById("telefono");                     // Input donde se ingresa el teléfono
const password = document.getElementById("password");                     // Input donde se ingresa la contraseña
const confirma_password = document.getElementById("confirmar_password");  // Input donde se ingresa la contraseña por segunda vez
const limpiar = document.getElementById("btn_limpiar");                   // Botón encargado de limpiar los campos del formulario

// ESTRUCTURA DONDE SE GUARDA LA INFORMACIÓN
let array_usuarios = [];

// BOOLEANOS DE VALIDACIÓN
let val_n = false;  // Booleano para el nombre
let val_e = false;  // Booleano para el email
let val_t = false;  // Booleano para el teléfono
let val_p = false;  // Booleano para el mensaje 
let val_cp = false; // Booleano para el mensaje 

// EVENTOS
// Nombre
nombre.addEventListener("change",(evento_n)=>{          // Se activa al presionar enter o cambiar de campo del nombre en el formulario 
    evento_n.preventDefault();                          // En caso de error
    val_n = validacion_name(nombre);                    // Llamar a la función para validarlo, obteniendo un true o un false si cumple con las condiciones o no
});

// Email
email.addEventListener("change",(evento_e)=>{           // Se activa al presionar enter o cambiar de campo del email en el formulario
    evento_e.preventDefault();                          // En caso de error
    val_e = validacion_email(email);                    // Llamar a la función para validarlo, obteniendo un true o false si cumple con las condiciones o no
});

// Teléfono
telefono.addEventListener("change",(evento_t)=>{        // Se activa al presionar enter o cambiar de campo del teléfono en el formulario
    evento_t.preventDefault();                          // En caso de error 
    val_t = validacion_tel(telefono);                   // Llamar a la función para validarlo, obteniendo un true o false si cumple con las condiciones o no
});

// Contraseña
password.addEventListener("change",(evento_p)=>{        // Se activa al presionar enter o cambiar de campo del teléfono en el formulario
    evento_p.preventDefault();                          // En caso de error 
    val_p = validacion_pass(password);                  // Llamar a la función para validarlo, obteniendo un true o false si cumple con las condiciones o no
});

confirma_password.addEventListener("change",(evento_cp)=>{              // Se activa al presionar enter o cambiar de campo del teléfono en el formulario
    evento_cp.preventDefault();                                         // En caso de error 
    val_cp = validacion_cpass(password.value, confirma_password.value); // Llamar a la función para validarlo, obteniendo un true o false si cumple con las condiciones o no
});

// Botón de registro
registro.addEventListener("click", (e_registro) =>{     // Se activa al presionar el Botón de registro
    e_registro.preventDefault();                        // En caso de error
    validacion_general()                                // Llamar a la función para validar todos los campos
});

// Botón de limpieza
limpiar.addEventListener("click", (e_limpiar)=>{
    e_limpiar.preventDefault();
    limpieza();
});


// FUNCIONES DE VALIDACIÓN
// Nombre
function validacion_name(nombre){                               // La función recibe el elemento input correspondiente al nombre
    let nombreValor = nombre.value;                             // Obtener el valor del input de nombre
    const pattern_n =  /^[a-zA-Z\u00E0-\u00FC\u00d1]+ [a-zA-Z\u00E0-\u00FC\u00d1]+$/;                   // Definir un patrón
    const pattern_n3 = /^[a-zA-Z\u00E0-\u00FC\u00d1]+ [a-zA-Z\u00E0-\u00FC\u00d1]+ [a-zA-Z\u00E0-\u00FC\u00d1]+$/
    const pattern_n4 = /^[a-zA-Z\u00E0-\u00FC\u00d1]+ [a-zA-Z\u00E0-\u00FC\u00d1]+ [a-zA-Z\u00E0-\u00FC\u00d1]+ [a-zA-Z\u00E0-\u00FC\u00d1]+$/

    if(nombreValor.length >= 5 && ((nombreValor.match(pattern_n)) || (nombreValor.match(pattern_n3)) || (nombreValor.match(pattern_n4)))){// Evaluar la longitud del valor ingresado y compararlo con el patrón
        nombre.classList.remove("is-invalid");                  // Remover la clase para invalidar el campo
        nombre.classList.add("is-valid");                       // Añadir la clase para validar el campo
        val_n = true;                                           // Asignar verdadero al valor del booleano de validación
        email.focus();                                  // Cambiar el cursor al campo de email
    } else {
        nombre.classList.remove("is-valid");                    // Remover la clase para validar el campo
        nombre.classList.add("is-invalid");                     // Añadir la clase para invalidar el campo
        val_n = false;                                          // Asignar falso al valor del booleano de validación
    }
    return val_n;                                               // Retornar el booleano de validación
};

// Email
function validacion_email(email){                                // La función recibe el elemento input correspondiente al email
    const pattern_e = /^[a-z\u00E0-\u00FC\u00d1\u0021-\u0040\u005f]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/;       // Definir un patrón
    
    if(email.value.match(pattern_e)){                              // Comparar el valor ingresado con el patrón
        email.classList.remove("is-invalid");                    // Remover la clase para invalidar el campo
        email.classList.add("is-valid");                         // Añadir la clase para validar el campo
        val_e = true;                                           // Asignar verdadero el valor del booleano de validación
        telefono.focus();                                       // Cambiar el cursor al campo del teléfono
    } else {
        email.classList.remove("is-valid");                      // Remover la clase para validar el campo
        email.classList.add("is-invalid");                       // Añadir la clase para invalidar el campo 
        val_e = false;                                          // Asignar falso el valor del booleano de validación
    }
    return val_e;                                               // Retornar el booleano de validacion
};

// Teléfono
function validacion_tel(telefono){
    const pattern_m =/((?:\+|00)[17](?: |\-)?|(?:\+|00)[1-9]\d{0,2}(?: |\-)?|(?:\+|00)1\-\d{3}(?: |\-)?)?(0\d|\([0-9]{3}\)|[1-9]{0,3})(?:((?: |\-)[0-9]{2}){4}|((?:[0-9]{2}){4})|((?: |\-)[0-9]{3}(?: |\-)[0-9]{4})|([0-9]{7}))/; // Definir un patrón
    
    if (telefono.value.match(pattern_m) && telefono.value.length >= 10 && telefono.value.length <= 13){ // Evaluar longitud del valor ingresado y compararlo con el patrón
            telefono.classList.remove("is-invalid");    // Remover la clase para invalidar el campo
            telefono.classList.add("is-valid");         // Añadir la clase para validar el campo
            val_t = true;                               // Asignar verdadero el valor del booleano de validación
            password.focus();                    // Cambiar el cursor al campo del mensaje      
        } else{  
            telefono.classList.remove("is-valid");      // Remover la clase para validar el campo                                       
            telefono.classList.add("is-invalid")        // Añadir la clase para invalidar el campo
            val_t = false;                              // Asignar falso el valor del booleano de validación
        }
        return val_t;                                   // Retornar el booleano de validación
    };

// Contraseña
function validacion_pass(password){
    const pattern_p = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&/()#.])[A-Za-z\d$@$!%*?&/()#.]{8,20}/;  // Definir un patrón
   
    if (password.value.match(pattern_p)){           // Evaluar el valor ingresado y compararlo con el patrón
        password.classList.remove("is-invalid");    // Remover la clase para invalidar el campo
        password.classList.add("is-valid");         // Añadir la clase para validar el campo
        val_p = true;                               // Asignar verdadero el valor del booleano de validación
        confirma_password.focus();
    } else{  
        password.classList.remove("is-valid");      // Remover la clase para validar el campo                                       
        password.classList.add("is-invalid")        // Añadir la clase para invalidar el campo
        val_p = false;                              // Asignar falso el valor del booleano de validación
    }
    return val_p;                                   // Retornar el booleano de validación
};
    
// Contraseña comparativa
function validacion_cpass(password, c_password){
    if(password == c_password){
        confirma_password.classList.remove("is-invalid");   // Remover la clase para invalidar el campo
        confirma_password.classList.add("is-valid");        // Añadir la clase para validar el campo
        val_cp = true;                                      // Asignar verdadero el valor del booleano de validación
    } else{
        confirma_password.classList.remove("is-valid");     // Remover la clase para invalidar el campo
        confirma_password.classList.add("is-invalid");      // Añadir la clase para validar el campo
        val_cp = false;                                     // Asignar falso el valor del booleano de validación
    }
    return val_cp;                                          // Retornar el booleano de validación
};

// Limpieza de campos
function limpieza(){
    document.getElementById("formulario").reset();
    nombre.classList.remove("is-valid");
    nombre.classList.remove("is-invalid");
    email.classList.remove("is-valid");
    email.classList.remove("is-invalid");
    telefono.classList.remove("is-valid");
    telefono.classList.remove("is-invalid");
    password.classList.remove("is-valid");
    password.classList.remove("is-invalid");
    confirma_password.classList.remove("is-valid");
    confirma_password.classList.remove("is-invalid");
    val_n = false;
    val_e = false;
    val_t = false;
    val_p = false;
    val_cp = false;
}

// Todos los campos
function validacion_general(){
    if (val_n && val_e && val_t && val_p && val_cp){    
        // Alarma de Sweet Alert para indicar Éxito
        Swal.fire(
            {
                title: '¡Excelente!',
                text: 'Registro exitoso',
                icon: 'success',
                confirmButtonColor: '#ED959C',
                confirmButtonText: 'Ok.'
            }  
          ) 

        // Creación de la estructura para guardar los
        let array_usuario = {
            "nombre_usuario" : nombre.value,
            "correo_usuario" : email.value,
            "telefono_usuario" : telefono.value,
            "contra_usuario" : btoa(password.value)
        };     
        array_usuarios.push(array_usuario);                         // Acumular información de usuarios en el array
        let jsonUsuarios = JSON.stringify(array_usuarios);          // Conversión a JSON
        localStorage.setItem("usuariosRegistrados",jsonUsuarios);   // Guardar en Local Storage

        limpieza();

    } else {
        // Alarma de Sweet alert para indicar Error
        Swal.fire({
            title: 'Cuidado',
            text: "Debes llenar los campos correctamente.",
            icon: 'error',
            confirmButtonColor: '#ED959C',
            confirmButtonText: 'Ok.'
        });             
    }                        // En caso de error     
}
    
