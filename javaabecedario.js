function mostrarImagen(imagenUrl, titulo) {
    const imagen = document.getElementById('image');
    const tituloElemento = document.getElementById('title');

    //PARA CAMBIAR LA IMAGEN DEPENDIENDO QUE BOTON SE ELIJA
    imagen.src = imagenUrl;  // PARAMETRO DE IMAGEN URL
    tituloElemento.textContent = titulo;  // PARA PONER EL TITULO

    // PARA MOSTRAR LA IMAGEN Y EL TITULO
    imagen.style.display = 'block';
    tituloElemento.style.display = 'inline-block';
}
