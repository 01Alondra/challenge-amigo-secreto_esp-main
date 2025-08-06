// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Agregar nombres y guardar en lista
let nombres = [];
let codigos = {}; // Objeto para guardar códigos únicos

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
        alert("No hay nombres para hacer el sorteo 😭.");
        return;
    } else if (nombres.length < 3) {
        alert("Faltan más nombres para hacer el sorteo 😬.");
        return;
    }

    let resultado = asignarAmigosSecretos(nombres);

    if (resultado === null) {
        alert("No fue posible hacer un sorteo válido, intenta de nuevo 😵‍💫.");
        return;
    }

    for (let persona in resultado) {
        let codigo = generarCodigoUnico(persona);
        codigos[codigo] = {
            persona: persona,
            amigoSecreto: resultado[persona]
        };
    
    console.log("Códigos únicos:", codigos);
    }

    // Mostrar los códigos en pantalla
    let contenedorCodigos = document.querySelector('.lista-codigos');
    let listaCodigos = document.querySelector('#listaCodigos');
    listaCodigos.innerHTML = "<strong>Estos son tus códigos secretos:</strong><br>";

    for (let codigo in codigos) {
        listaCodigos.innerHTML += `<li>${codigos[codigo].persona}: ${codigo}</li>`;
    }

    contenedorCodigos.style.display = 'block'; // Mostrar el contenedor con el título y lista
 
}

let copia = [...nombres];

function asignarAmigosSecretos(lista) {
    let asignaciones = {};
    let disponibles = [...lista]; // Copia de nombres disponibles

        for (let persona of lista) {
            // Filtrar disponibles que no sean la misma persona
            let posibles = disponibles.filter(nombre => nombre !== persona);

            if (posibles.length === 0) {
            // Si ya no hay opciones válidas, sorteo fallido
            return null;
            }

            // Elegir aleatoriamente entre los posibles
            let indice = Math.floor(Math.random() * posibles.length);
            let asignado = posibles[indice];

            // Guardar la asignación
            asignaciones[persona] = asignado;

            // Eliminar el asignado de los disponibles
            disponibles = disponibles.filter(nombre => nombre !== asignado);
        }

        return asignaciones;
}

function generarCodigoUnico(nombre) {
  // Combinamos el nombre con un número aleatorio y el tiempo actual
  return btoa(nombre + Date.now() + Math.random()).slice(0, 8);
}

// Códigos para mostrar amigo secreto
function verAmigoSecreto() {
    let input = document.querySelector('#codigo').value.trim();

    if (input === "") {
        alert("Por favor ingresa un código.");
        return;
    }

    let info = codigos[input]; // usamos el objeto global `codigos`

    let resultado = document.querySelector('#resultadoCodigo');

    if (info) {
        resultado.innerHTML = `<strong>${info.persona}</strong>, tu amigo/a secreto es:<br><li>${info.amigoSecreto}</li>`;
    } else {
        resultado.innerHTML = `Código no válido o inexistente 😕`;
    }
}
