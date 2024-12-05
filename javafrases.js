function mostrarImagen(imagen, texto) {
    document.getElementById('selected-image').src = imagen;
    document.getElementById('selected-image').alt = texto;

}

document.oncontextmenu = function() { 
    return false; 
}