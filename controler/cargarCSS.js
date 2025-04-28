function cargarCSS(url){
    let link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = url;
    document.head.appendChild(link);
    console.log("CSS cargado: ",link);
    
}

export { cargarCSS }