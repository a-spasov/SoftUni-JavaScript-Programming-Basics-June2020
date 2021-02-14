function calculate(input) {
    let minNumber = Number(input[0]);
    let i = 1;
    let currentNumber;
    while (i < input.length) {
        currentNumber = input[i];
        if (currentNumber == "Stop") {
            break;
        }
        currentNumber = Number(currentNumber);
        if (currentNumber <= minNumber) {
            minNumber = currentNumber;
        }
        i++;
    }
    console.log(minNumber);
}
calculate(["6", "-5", "Stop", "-100"]);