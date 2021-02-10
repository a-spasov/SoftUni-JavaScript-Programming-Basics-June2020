function division(input) {
    let numbers = Number(input[0]);
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    for (let i = 1; i < input.length; i++) {
        let currentNumber = Number(input[i]);
        if (currentNumber%2 == 0) {
            p1 += 1;
        }  
        if (currentNumber%3 == 0) {
            p2 += 1;
        } 
        if (currentNumber%4 == 0) {
            p3 += 1;
        }
    }
    p1 = p1/numbers*100;
    console.log(`${p1.toFixed(2)}%`);
    p2 = p2/numbers*100;
    console.log(`${p2.toFixed(2)}%`);
    p3 = p3/numbers*100;
    console.log(`${p3.toFixed(2)}%`);
}
division([6, 8, 99, 48, 15, 24, 111]);