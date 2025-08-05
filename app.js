// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Agregar nombres y guardar en lista
let nombres = [];

function agregarAmigo() {
    let nombre = document.querySelector('#amigo').value.trim().toLowerCase();
    nombre = nombre.split(" ").map(palabra => {
    return palabra.charAt(0).toUpperCase() + palabra.slice(1);
}).join(" ");

    console.log (nombre);
    // Validar entrada de datos en el campo de texto.
    if (nombre == "") {
        alert("Por favor ingresa un nombre valido.");
    // Visualizar lista en pantalla debajo del campo de entrada
    } else {
        nombres.push(nombre);
        document.querySelector('#amigo').value = "";
        let lista = document.querySelector('#listaAmigos');
        lista.innerHTML = "<strong>Estos son los nombres de los participantes:</strong><br>"; 
        
        for (let i = 0; i < nombres.length; i++) {
            lista.innerHTML += `<li>${nombres[i]}</li>`;
        }
        
        console.log ('Estos son los nombres de los participantes:\n' + nombres.join('\n'));
    }
}

// Seleccionar aleatoreamente un nombre de la lista y mostrar en la página
// Validar que haya amigos disponibles
function sortearAmigo() {
    if (nombres.length === 0) {
    alert("No hay amigos para hacer el sorteo 😭.");
    return; // Salir de la función si no hay nombres
    } else if (nombres.length < 3){
    alert("Faltan más nombres para hacer el sorteo 😬.")
    return; // Salir de la función si no hay nombres
    } //else ()
// Generar un indice aleatorio
// Obtener el nombre sorteado
// Mostrar Resultado    
}