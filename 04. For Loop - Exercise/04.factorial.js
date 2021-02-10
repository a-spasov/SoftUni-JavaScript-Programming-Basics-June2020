function factorialN(arg1) {
    let numberN = Number(arg1);
    let result = 1;
    if (numberN == 0) {
        console.log(result);
    } else {
        for (let i = 1; i <= numberN; i++) {
            result = result*i;
        }
        console.log(result);
    }
}
factorialN(5);