// Evento
let contactenos = document.getElementById("btn_contacto");

contactenos.addEventListener("click",(evento)=>{
    evento.preventDefault();

    let val_n = validacion_name();
    let val_e = validacion_email();
    let val_t = validacion_tel();
    let val_tx = validacion_texto();

    envio(val_n, val_e, val_t, val_tx);
});

function validacion_name(){
    let nombre = document.getElementById("nombre");
    let nombreValor = nombre.value;
    let pattern_n = " ";
    //let pattern_n = /^[^]+" " + [^]+\.[A-z]{2,3}$/;

    if(nombreValor.length >= 5 && nombreValor.match(pattern_n))
    {
        nombre.classList.add("is-valid");
        nombre.classList.remove("is-invalid");
        val_n = "true";
        //console.log("Tu email es valido");   
    } else {
        nombre.classList.add("is-invalid");
        val_n = "false";
        console.log("Inválido");
    }

    return val_n;
};

function validacion_email(){
    let mail = document.getElementById("email");
    let pattern = /^[^]+@[^]+\.[A-z]{2,3}$/;
    
    if(mail.value.match(pattern))
    {
        mail.classList.remove("is-invalid");
        mail.classList.add("is-valid");
        val_e = "true";
        console.log("Válido");
    }
    else 
    {
        mail.classList.add("is-invalid");
        val_e = "false";
        console.log("Inválido");
    }

    return val_e;
};

function validacion_tel(){
    let telefono = document.getElementById("telefono");
    console.log(telefono.value);
    console.log(telefono.value.length);

    if(telefono.value.length == 10)
    {
        telefono.classList.remove("is-invalid");
        telefono.classList.add("is-valid");
        val_t = "true";
    } else{
        telefono.classList.add("is-invalid")
        console.log("Inválido");
        val_t = "false";
    }

    return val_t;
};

function validacion_texto(){
    let mensaje = document.getElementById("mensaje");
    let mensajeValor = mensaje.value;

    // Cambiar a 150 caracteres
    if ((mensajeValor.length >= 1) && (mensajeValor.length <= 10)){
        mensaje.classList.add("is-valid");
        mensaje.classList.remove("is-invalid");
        val_tx = "true";
    } else {
        mensaje.classList.add("is-invalid");
        val_tx = "false";
    };

    return val_tx;
}

function envio(val_n, val_e, val_t, val_tx){
    if ((val_n == "true") && (val_e == "true") && (val_t == "true") && (val_tx == "true")){
        let nombre_info = document.getElementById("nombre").value;
        //let email_info = document.getElementById("email").value;
        let telefono_info = document.getElementById("telefono").value;
        let mensaje_info = document.getElementById("mensaje").value;
        console.log("Enviar al mail");
        //enviar.setAttribute('href',`mailto:mailto:uppo.team@gmail.com?subject= Nombre ${form.get('name')} Correo ${form.get('email')}&body=${form.get('message')}`)
        let correo = `Cliente: ${nombre_info}. Número telefónico: ${telefono_info}. Mensaje: ${mensaje_info}`;
        window.location = `mailto:colindiana6c@gmail.com?subject=Mensaje de cliente ${nombre_info}&body=${correo}`;
    }
}