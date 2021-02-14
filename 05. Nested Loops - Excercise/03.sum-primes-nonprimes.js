function calculate(input) {
    let i = 0;
    let currentNumber = input[i];
    let sumOfPrimes = 0;
    let sumOfNonPrimes = 0;
    let isPrime = true;
    while (currentNumber != "stop") {
        currentNumber = Number(currentNumber);
        if (currentNumber < 0) {
            console.log("Number is negative.");
            isPrime = true;
            i++;
            currentNumber = input[i];
            continue;
        }
        for (let j = 1; j <= currentNumber; j++) {
            if ( j != 1 && j != currentNumber && currentNumber%j == 0) {
                sumOfNonPrimes += currentNumber;
                isPrime = false;
                break;
            } 
        }
        if (isPrime) {
            sumOfPrimes += currentNumber;
        }
        isPrime = true;
        i++;
        currentNumber = input[i];
    }
    console.log(`Sum of all prime numbers is: ${sumOfPrimes}`);
    console.log(`Sum of all non prime numbers is: ${sumOfNonPrimes}`);
}
calculate([0,
    9,
    0,
    -7,
    
    "stop"]);