// Arreglos de talleres 

let talleres = [
    {
         "Horario": "Jueves",
         "Tiempo": " 5:00 pm a 8:00 pm",
    },
    {
        "Horario": "Sábado",
        "Tiempo": " 11:00 pm a 2:00 pm ",  
   },
   {
        "Horario": "Sábado",
        "Tiempo": " 11:00 pm a 2:00 pm "
   },
   {
    "Horario": "Domingo",
    "Tiempo": "11:00 pm a 1:00 pm" 
    }
];

//let jsontalleres= JSON.stringify(talleres);

// Envío de los productos con sus propiedades a sus respectivas cards
horario = document.getElementById("horarios");                          // Obtener el elemento donde irá la plantilla
talleres.forEach(element => {                                          // Recorrer el arreglo
    horario.innerHTML += `<p>${element.Horario} - ${element.Tiempo}</p>`                                                    // Acumular mediante innerHTML las plantillas y enviarlas a su elemento correspondiente 
});
