function equalSums(input) {
    let firstNuber = Number(input[0]);
    let secondNumber = Number(input[1]);
    let sumOdds = 0;
    let sumEvens = 0;
    let currentNumber;
    let output = "";
    for (let a = firstNuber; a <= secondNumber; a++) {
        currentNumber = a;
        sumOdds = 0;
        sumEvens = 0;
        for (let b = 6; b >= 1; b--) {
            if (b%2 == 0) {
                sumEvens += currentNumber%10;
            } else {
                sumOdds += currentNumber%10;
            }
            currentNumber = Math.floor(currentNumber/10);
            if (b == 1 && sumEvens == sumOdds) {
                output += a + " ";
            }
        }
    }  
    console.log(output); 
}
equalSums([100001, 100050]);