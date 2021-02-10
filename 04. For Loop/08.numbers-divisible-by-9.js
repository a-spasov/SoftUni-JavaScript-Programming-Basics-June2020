function numbers(arg1, arg2) {
    let num1 = Number(arg1);
    let num2 = Number(arg2);
    let sum = 0;
    let numberSequence = "";
    for (let i = num1; i <= num2; i++) {
        if (i%9 == 0) {
            sum = sum + i;
        }
    }
    console.log(`The sum: ${sum}`);
    for (let i = num1; i <= num2; i++) {
        if (i%9 == 0) {
            console.log(i);
        }
    }
}
numbers(9, 45);