const nums = [1, 2, 3, 4, 5, 6, 7, 8];
const res = nums.filter(esPar);

function esPar(a){
    if(a % 2 == 0){
        console.log(a, " es par");
    }
}

