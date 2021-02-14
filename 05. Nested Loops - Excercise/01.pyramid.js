function pyramid(arg1) {
    let numberA = Number(arg1);
    let currentNumber = 1;
    let output = "";
    for (let i = 1; i <= numberA; i++) {
        for (let j = 1; j <= i; j++) {
            output += currentNumber + " ";
            currentNumber++;
            if (currentNumber > numberA) {
                break;
            }
        }        
        console.log(output);
        output = "";
        if (currentNumber > numberA) {
            break;
        }    
    }
}
pyramid(7);