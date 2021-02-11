function multiplicationTable() {
    let a;
    let b;
    let result;
    for (a = 1; a <= 10; a++) {
        for (b = 1; b <= 10; b++) {
            result = a*b;
            console.log(`${a} * ${b} = ${result}`);
        }
    }
}
multiplicationTable();