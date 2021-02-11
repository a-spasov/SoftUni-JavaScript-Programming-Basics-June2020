function sumOfNumbers(input) {
    let numA = Number(input[0]);
    let numB = Number(input[1]);
    let sum = Number(input[2]);
    let combination = 0;
    let sumIsFound = 0;
    outer: for (let j = numA; j <= numB; j++) {      
        for (let i = numA; i <= numB; i++) {
            combination++;
            if ((j + i) == sum) {
                console.log(`Combination N:${combination} (${j} + ${i} = ${sum})`);
                sumIsFound = 1;
                break outer;
            }
        }
    }
    if (sumIsFound == 0) {
        console.log(`${combination} combinations - neither equals ${sum}`);
    }
}
sumOfNumbers([88,888,1000]);