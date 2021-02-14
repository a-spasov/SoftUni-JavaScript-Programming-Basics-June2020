function sequence(arg1) {
    let numb =Number(arg1);
    let currentNumber = 1;
    while (currentNumber <= numb) {
        console.log(currentNumber);
        currentNumber = 2*currentNumber + 1;
    }
}
sequence(8);