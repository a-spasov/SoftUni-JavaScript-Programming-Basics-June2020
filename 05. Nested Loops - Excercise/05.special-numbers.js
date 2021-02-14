function specialNumbers(arg1) {
    let numbA = Number(arg1);
    let currentNumber;
    let isDivisible = false;
    let output = "";
    for (let i = 1111; i <= 9999; i++) {
        currentNumber = i;
        for (let j = 1; j <= 4; j++) {
            if (numbA%(currentNumber%10) == 0) {
                isDivisible = true;
            } else {
                isDivisible = false;
                break;
            }
            currentNumber = Math.floor(currentNumber/10);
        }
        if (isDivisible) {
            output += i + " ";
        }
    }
    console.log(output);
}
specialNumbers(3);
