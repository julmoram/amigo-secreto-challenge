// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar los nombres de los amigos
let amigos = [];

function agregarAmigo() {
    const inputNombre = document.getElementById('nombreAmigo');
    const nombre = inputNombre.value.trim();

    if (nombre === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }

    amigos.push(nombre);
    inputNombre.value = '';
    console.log('Lista de amigos:', amigos);
}

function mostrarAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        const elementoLista = document.createElement('li');
        elementoLista.textContent = amigos[i];
        listaAmigos.appendChild(elementoLista);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('No hay amigos en la lista. Por favor, agrega al menos un amigo.');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    const resultadoElemento = document.getElementById('resultadoSorteo');
    resultadoElemento.innerHTML = `El amigo sorteado es: <strong>${amigoSorteado}</strong>`;
}