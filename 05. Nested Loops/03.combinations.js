function combinations(arg1) {
    let sum = Number(arg1);
    let combinationsCounter = 0;
    let a;
    let b;
    let c;
    for (a = 0; a <= sum; a++) {
        for (b = 0; b <= sum; b++) {
            for (c = 0; c <= sum; c++) {
                if ( (a+b+c) == sum) {
                    combinationsCounter++;
                }
            }
        }
    }
    console.log(combinationsCounter);
}
combinations(25);
