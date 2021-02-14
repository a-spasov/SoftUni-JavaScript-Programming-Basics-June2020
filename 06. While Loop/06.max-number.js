function calculate(input) {
    let maxNumber = Number(input[0]);
    let i = 1;
    let currentNumber;
    while (i < input.length) {
        currentNumber = input[i];
        if (currentNumber == "Stop") {
            break;
        }
        currentNumber = Number(currentNumber);
        if (currentNumber >= maxNumber) {
            maxNumber = currentNumber;
        }
        i++;
    }
    console.log(maxNumber);
}
calculate([-10,-20,-100,-8,-1000])