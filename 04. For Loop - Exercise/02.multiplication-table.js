function multiplicationTable(arg1) {
    let numberA = Number(arg1);
    for (let i = 1; i <=10; i++) {
        let result = i*numberA;
        console.log(`${i} * ${numberA} = ${result}`);
    }
}
multiplicationTable(5);