const delay = (s) => {
    return new Promise((resolve) => setTimeout(resolve, s * 1000));
};

async function promesaSuma(a, b){
    console.log("Numero 1: " + a);
    console.log("Numero 2: " + b);
    await delay(2);
    console.log("La suma de los numeros es: " + (a+b));
}

promesaSuma(5, 2);