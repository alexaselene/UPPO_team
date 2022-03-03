// Evento
let contactenos = document.getElementById("btn_contacto");

contactenos.addEventListener("click",(evento)=>{
    evento.preventDefault();

    validacion_name();
    validacion_email();
    validacion_tel();
    validacion_texto();
});

function validacion_name(){
    let nombre = document.getElementById("nombre");
    let nombreValor = nombre.value;
    console.log(nombreValor.length);
    let pattern_n = " ";

    if(nombreValor.length >= 3 && nombreValor.match(pattern_n))
    {
        nombre.classList.add("is-valid");
        nombre.classList.remove("is-invalid");
        console.log("Tu email es valido");   
    } else {
        nombre.classList.add("is-invalid")
        console.log("Inválido");
    }
};

function validacion_email(){
    let mail = document.getElementById("email");
    let pattern = /^[^]+@[^]+\.[A-z]{2,3}$/;
    
    if(mail.value.match(pattern))
    {
        mail.classList.remove("is-invalid");
        mail.classList.add("is-valid");
        console.log("Válido");
    }
    else 
    {
        mail.classList.add("is-invalid");
        console.log("Inválido");
    }
};

function validacion_tel(){
    let telefono = document.getElementById("telefono");
    console.log(telefono.value);
    console.log(telefono.value.length);

    if(telefono.value.length == 10)
    {
        telefono.classList.remove("is-invalid");
        telefono.classList.add("is-valid");
    } else{
        telefono.classList.add("is-invalid")
        console.log("Inválido");
    }
};

function validacion_texto(){
    let mensaje = document.getElementById("mensaje");
    let mensajeValor = mensaje.value;

    // Cambiar a 150 caracteres
    if ((mensajeValor.length >= 1) && (mensajeValor.length <= 10)){
        mensaje.classList.add("is-valid");
        mensaje.classList.remove("is-invalid");
    } else {
        mensaje.classList.add("is-invalid")
    };
}
