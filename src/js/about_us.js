let tarjeta = document.getElementById("nosotros_plantilla");

class About_us{
    // Propiedades
    nombre = "";
    carrera = "";
    gustos = "";
    habilidades = "";

    // Constructor
    constructor(nombre, carrera, gustos, habilidades) {
        this.nombre = nombre;
        this.carrera = carrera;
        this.gustos = gustos;
        this.habilidades = habilidades;
    } // Constructor

}

let nombre = [
    "Diana Carolina Colín Ochoa",
    "Alexa Selene"
];

let carrera = [
    "Ingeniería Biomédica"
];

let gustos = [
    "Me gusta enfrentarme a retos lógicos y creativos. Disfruto la lectura, el dibujo y conocer nuevos lugares"
];

let habilidades = [
    "Habilidades: trabajo en equipo, resiliencia, resolución de problemas"
]

let diana = new About_us(nombre[0], carrera[0], gustos[0], habilidades[0]);

let plantilla = `<div class="card mb-3" style="max-width: 540px;">
  <div class="row no-gutters">
    <div class="col-md-4 col-sm-4 col-4">
      <img src="./img/foto.jpeg" alt="..." class = "img-fluid">
    </div>
    <div class="col-md-8 col-sm-8 col-8">
      <div class="card-body">
        <h3 class="card-title">${diana.nombre}</h3>
        <p class="card-text card-subtitle"><small class="text-muted">${diana.carrera}</small></p>
        <p class="card-text">${diana.gustos}</p>
        <p class="card-text">${diana.habilidades}</p>
        <div class="card-footer">
            <a href = "colindiana6c@gmail.com" target="_blank" type="button" class="btn btn-link"><img src = "./img/email.png" width = "20"></a>
            <a href = "https://www.linkedin.com/in/diana-col%C3%ADn/" type="button" target="_blank" class="btn btn-link"><img src = "./img/linkedin.png" width = "20"></a>
            <button type="button" class="btn btn-link"><img src = "./img/github.png" width = "20"></button>
            <button type="button" class="btn btn-light">Descargar CV</button>
        </div>
        
      </div>
    </div>
  </div>
</div>`

tarjeta.innerHTML = plantilla;