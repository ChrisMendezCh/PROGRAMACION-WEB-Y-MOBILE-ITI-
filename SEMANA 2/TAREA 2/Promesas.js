function leerArchivo(nombreArchivo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Leyendo archivo: ${nombreArchivo}`);
            resolve(`Contenido de ${nombreArchivo}`);
        }, 1000);
    });
}

leerArchivo("archivo.txt").then((contenido) => {
    console.log("Archivo leído exitosamente:", contenido);
});