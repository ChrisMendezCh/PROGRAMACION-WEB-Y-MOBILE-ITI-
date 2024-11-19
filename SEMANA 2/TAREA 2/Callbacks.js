function temporizador(segundos, callback) {
    setTimeout(() => {
        console.log(`Han pasado ${segundos} segundos`);
        callback();
    }, segundos * 1000);
}

temporizador(2, () => console.log("¡Callback ejecutado!"));