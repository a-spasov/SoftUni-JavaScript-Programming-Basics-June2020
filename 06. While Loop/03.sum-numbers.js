function sumOfNumbers(input) {
    let numb = Number(input[0]);
    let i = 1;
    let currentNumber = Number(input[i]);
    let sum = 0;
    while (i < input.length) {
        sum = sum + currentNumber;
        if (sum >= numb) {
            console.log(sum);
            break;
        }
        i++;
        currentNumber = Number(input[i]);
    }
}
sumOfNumbers();