function sumar(a, b) {
    return new Promise((resolve) => {
        const resultado = a + b;
        resolve(resultado);
    });
}

async function calcular() {
    const resultado = await sumar(5, 7);
    console.log(`El resultado de la suma es: ${resultado}`);
}

calcular();