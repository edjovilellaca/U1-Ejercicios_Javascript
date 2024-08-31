const arr = [1,2,3,4,5];

function sumarElementos(a){
    suma = 0;
    a.forEach(element => {
        suma = suma + element;
    });

console.log(suma);
    
}

sumarElementos(arr);