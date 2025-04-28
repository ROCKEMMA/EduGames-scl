import { cargarCSS } from "../../controler/cargarCSS.js";
import { headerInicio } from "../../modulos/headerInicio/headerInicio.js";

const emojis = [
    "😀", "😃", "😄", "😁", "😆", "😅", "😂", "🤣", "😊", "😇", // Caras felices
    "😍", "🥰", "😘", "😗", "😙", "😚", "😋", "😛", "😜", "🤪", // Caras cariñosas
    "😎", "🤓", "🧐", "🥳", "🤩", "🥺", "😏", "😒", "😞", "😔", // Otras expresiones
    "😟", "🙁", "☹️", "😣", "😖", "😫", "😩", "🥱", "😤", "😡", // Emociones negativas
    "🐶", "🐱", "🐭", "🐹", "🐰", "🦊", "🐻", "🐼", "🐨", "🐯", // Animales
    "🦁", "🐮", "🐷", "🐸", "🐵", "🐔", "🐧", "🐦", "🐤", "🦆", // Más animales
    "🍎", "🍐", "🍊", "🍋", "🍌", "🍉", "🍇", "🍓", "🍒", "🍑", // Frutas
    "🌶️", "🥑", "🍆", "🥔", "🥕", "🌽", "🍕", "🍔", "🍟", "🌮", // Comidas
    "⚽", "🏀", "🏈", "⚾", "🎾", "🏐", "🎱", "🏓", "🏸", "🥊", // Deportes
    "🚗", "🚕", "🚙", "🚌", "🚎", "🏎️", "🚓", "🚑", "🚒", "✈️"  // Transportes
];

function cargarInscripcion(){

    const ROOT = document.querySelector("#root");

    let divInscripcion = document.createElement('section');
    divInscripcion.className = "div-inscripcion";

    let titulo = document.createElement("h2");
    titulo.className = "titulo";
    titulo.innerText = "Ingresa el código de partida";
    divInscripcion.appendChild(titulo);

    let inputCodigo = document.createElement('input');
    inputCodigo.type = Text;
    inputCodigo.className = "input-codigo";
    divInscripcion.appendChild(inputCodigo);

    let tituloAvatars = document.createElement('p');
    tituloAvatars.className = "titulo-avatars"
    tituloAvatars.innerText = "Selecciona un avatar";
    divInscripcion.appendChild(tituloAvatars);

    let divAvatars = document.createElement('div');
    divAvatars.className = "div-avatars";
    divInscripcion.appendChild(divAvatars);

    emojis.forEach((emojin)=>{
        let divAvatar = document.createElement('div');
        divAvatar.className = "div-avatar";
        divAvatar.innerText = emojin;
        divAvatars.appendChild(divAvatar);
    });

    let inputNombre = document.createElement('input');
    inputNombre.type = Text;
    inputNombre.className = "input-nombre";
    divInscripcion.appendChild(inputNombre);

    let btnIniciar = document.createElement('div');
    btnIniciar.className = "btn-iniciar";
    btnIniciar.innerText = "Jugar";
    divInscripcion.appendChild(btnIniciar);

    ROOT.appendChild(divInscripcion);

    cargarCSS("views/inscribirse/inscribirseView.css");

}

// CARGAR COMPONENTES
let HEADER = document.querySelector("#header");
HEADER.appendChild(headerInicio());

cargarInscripcion();