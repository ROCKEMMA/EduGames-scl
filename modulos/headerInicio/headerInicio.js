import { cargarCSS } from "../../controler/cargarCSS.js";

function headerInicio(){
    
    let divHeader = document.createElement('div');
    divHeader.className = "div-header";

    // Logo del header
    let divLogo = document.createElement('div');
    divLogo.className = "div-logo";

    let divImgLogo = document.createElement('div');
    divImgLogo.innerText = "🕹️";
    divLogo.appendChild(divImgLogo);
    divHeader.appendChild(divLogo);

    let nombreLogo = document.createElement('p');
    nombreLogo.innerText = "EduGames SCL"
    divLogo.appendChild(nombreLogo);

    let iniciarSesion = document.createElement('p');
    iniciarSesion.className = "iniciar-sesion";
    iniciarSesion.innerText="Ingresar";
    divHeader.appendChild(iniciarSesion);

    cargarCSS("modulos/headerInicio/headerInicio.css");
    return divHeader;

}

export { headerInicio }