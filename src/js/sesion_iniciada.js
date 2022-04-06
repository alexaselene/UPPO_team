// Obtener elementos (Local Storage y botones)
let sesion_activa =  localStorage.getItem("sesion_iniciada");
let boton_cerrar = document.getElementById("cerrar");
let boton_inicio = document.getElementById("inicio");
let boton_registro = document.getElementById("registro");
let boton_prod_nuevo = document.getElementById("prod_nuevo");

// Validar que haya alguna sesión activa = haya un registro (sesión_iniciada) en el LocalStorage
if(sesion_activa != null){
    boton_cerrar.classList.remove("desaparecer");
    boton_inicio.classList.add("desaparecer");
    boton_registro.classList.add("desaparecer");
}

// Validar que la sesión iniciada corresponda al administrador
if(sesion_activa == "mariaharo@admin.com"){
    boton_prod_nuevo.classList.remove("pn_desaparecer");
}

// Evento para cerrar sesión
boton_cerrar.addEventListener("click", (e_cerrar)=>{
    e_cerrar.preventDefault;

    localStorage.removeItem("sesion_iniciada");
});