const logIn = document.getElementById("btn_contacto");      // Botón encargado de enviar los inputs del formulario (cuando sean válidos)
const contrasena = document.getElementById("contrasena");         // Input donde se ingresa la contraseña
const correo = document.getElementById("correo");                  // Input donde se ingresa el email
const registro = document.getElementById("registro");            //Botón encargado para la sección de registro
const olvidar = document.getElementById("olvidar");               // Botón cuando el usuario olvide su contraseña 
const limpieza = document.getElementById("btn_limpiar");          // Botón encargado de limpiar los campos del formulario

// INICIALIZACIÓN DE BOOLEANOS PARA LA VÁLIDACIÓN / INVALIDACIÓN DE LOS CAMPOS DEL FORMULARIO
let val_correo = false;          // Booleano para el email
                                 // Booleano para caracteres del mensaje
let val_contrasena = false;

// Email
correo.addEventListener("change",(evento_e)=>{             // Se activa al presionar enter o cambiar de campo del email en el formulario
    evento_e.preventDefault;                                // En caso de error
    val_correo = validacion_email(correo);                // Llamar a la función para validarlo, obteniendo un true o false si cumple con las condiciones o no
    // activacion(val_correo, val_contrasena);                // Llamar a la función que activará el botón en caso de que todos los campos se validen    
});


// Correo
contrasena.addEventListener("change",(evento_cn)=>{       // Se activa al presionar enter o cambiar de campo del email en el formulario
    evento_cn.preventDefault;                                // En caso de error
    // val_contrasena = validacion_password(contrasena); 
     validacion_pass_enter();              // Llamar a la función para validarlo, obteniendo un true o false si cumple con las condiciones o no
    // activacion(val_correo, val_contrasena);                // Llamar a la función que activará el botón en caso de que todos los campos se validen    
});
contrasena.addEventListener("input",(evento_i)=>{       // Se activa al presionar enter o cambiar de campo del email en el formulario
    evento_i.preventDefault;                                // En caso de error
    val_contrasena = validacion_pass(contrasena);                // Llamar a la función para validarlo, obteniendo un true o false si cumple con las condiciones o no
    // activacion(val_correo, val_contrasena);                // Llamar a la función que activará el botón en caso de que todos los campos se validen    
});


// FUNCIONES DE VALIDACIÓN
// Email
function validacion_email(correo_1){                                // La función recibe el elemento input correspondiente al email
    const pattern_e = /^[a-z\u00E0-\u00FC\u00d1\u0021-\u0040\u005f]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/;    // Definir un patrón
    if(correo.value.match(pattern_e)){                              // Comparar el valor ingresado con el patrón
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


  function validacion_pass(contrasena){
     
   
    const pattern_m = /^[a-zA-Z\u00E0-\u00FC\u00d1\u0021-\u0040\s]+$/;

    if  (contrasena.value.match(pattern_m)) {   // Evaluar la longitud del valor ingresado
                                // Añadir la clase para validar el campo      
        val_contrasena = true;                                                  // Asignar verdadero el valor del booleano de validación
        
    }else {
                                // Añadir la clase para invalidar el campo
        val_contrasena = false;                                                 // Asignar falso el valor del booleano de validación
    };

    return val_contrasena;                                  // Retornar el booleano de validación
};


function validacion_pass_enter(contrasena){
     
   
   

    if  (val_contrasena == true) {   // Evaluar la longitud del valor ingresado
        contrasena.classList.remove("is-invalid");                         // Remover la clase para invalidar el campo
        contrasena.classList.add("is-valid");                              // Añadir la clase para validar el campo      
                                                       // Asignar verdadero el valor del booleano de validación
        
    }else {
        contrasena.classList.remove("is-valid");                           // Remover la clase para validar el campo
        contrasena.classList.add("is-invalid");                            // Añadir la clase para invalidar el campo
                                                   // Asignar falso el valor del booleano de validación
    };

                                    // Retornar el booleano de validación
};





   logIn.addEventListener("click",(evento_c)=>{
    evento_c.preventDefault;     
    val_correo =true;  
    val_contrasena = true;                                   
    if(val_correo == true &&  val_contrasena == true){
        session_valida();
    } else {
        alert("Faltan campos por validar");
    }
   });







function session_valida (){

 let validacionStorage = localStorage.getItem("usuariosRegistrados")
    console.log(validacionStorage);
    let registrados= JSON.parse(validacionStorage);
    console.log(registrados);

let session_iniciada=false;

    for(let i=0; i<registrados.length; i++){
        console.log(registrados[i].correo_usuario);
        console.log(correo.value);

        if(( registrados[i].correo_usuario == correo.value) && (registrados[i].contra_usuario == contrasena.value)){
            session_iniciada=true;

           console.log(session_iniciada);
        }
          
               
           
           
          
          
  
          
          

    };
   console.log(session_iniciada);
   if(session_iniciada){
       alert("Bienvenido");
   } else{
       alert("la contraseña o el correo no coinciden");
   }
   }

    // if(registrados == validacion_email){
    //     console.log("Usuario registrado")
    // } else {
    //     console.log("Usuario no registrado")
    // }

 

    // let espacios =true;
    // let cont = 0

    // while (!espacios && (cont < contrasena.value.length)) {
    //     if (contrasena.value.charAt(cont) == " ")
    //         espacios = false;
    //     cont++;
    // } if(espacios){
    //     alert("La contraseña no puede contener espacios");
    //     contrasena.focus( contrasena.value.length - 1 );
    // }

function validacion_contrasena(contrasena){                                // La función recibe el elemento input correspondiente al email
    const pattern_c = /^[a-z\u00E0-\u00FC\u00d1\u0021-\u0040\u005f]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/;    // Definir un patrón
    if(contrasena.value.match(pattern_c)){                              // Comparar el valor ingresado con el patrón
        contrasena.classList.remove("is-invalid");                    // Remover la clase para invalidar el campo
        contrasena.classList.add("is-valid");                         // Añadir la clase para validar el campo
        val_contrasena = true;                                           // Asignar verdadero el valor del booleano de validación
        contrasena.focus();                               // Cambiar el cursor al campo del teléfono
    } else {
        correo_1.classList.remove("is-valid");                      // Remover la clase para validar el campo
        correo_1.classList.add("is-invalid");                       // Añadir la clase para invalidar el campo 
        val_contrasena = false;                                          // Asignar falso el valor del booleano de validación
    }
    return val_contrasena;                                               // Retornar el booleano de validacion
};




