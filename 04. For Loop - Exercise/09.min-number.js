function minNumber(input) {
    let smallest = Number(input[1]);
    for (let i = 1; i < input.length; i++) {
        let currentNumber = Number(input[i]);
        if (smallest > currentNumber) {
            smallest = currentNumber;
        }
    }
    console.log(smallest);
}
minNumber([1, 200]);