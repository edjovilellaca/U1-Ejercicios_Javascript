const nums = [1, 2, 3, 4, 5, 6, 7, 8];
nums.filter((num) => {
    if(num % 2 == 0){
        console.log(num, " es par");
    }
});