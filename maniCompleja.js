let arr = [1,3,4,,10,6,15,12]

const arrDup = arr.map(function(element){
    return element * 2;
});

const filt = arr.filter(mayorDiez);

function mayorDiez(a){
    if(a > 10) console.log(a);
}

console.log(arrDup);

