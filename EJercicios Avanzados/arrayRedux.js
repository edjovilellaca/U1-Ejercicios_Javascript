function contCar(a) {
    return a.reduce((total, str) => total + str.length, 0);
}

const palabrasArr = ["Hola", "Mundo"];
console.log(contCar(palabrasArr));