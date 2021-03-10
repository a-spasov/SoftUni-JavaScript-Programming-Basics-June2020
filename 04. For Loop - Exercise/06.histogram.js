function histogram(input) {
    let numbers = Number(input[0]);
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;
    for ( let i= 1; i < input.length; i++) {
        let currentNumber = Number(input[i]); 
        if (currentNumber < 200) {
            p1 += 1;
        } else if (currentNumber>=200 && currentNumber<400) {
            p2 += 1;
        } else if (currentNumber>=400 && currentNumber<600) {
            p3 += 1;
        } else if (currentNumber>=600 && currentNumber<800) {
            p4 += 1;
        } else {
            p5 += 1;
        }
    }
    p1 = p1/numbers*100;
    console.log(p1.toFixed(2) + "%");
    p2 = p2/numbers*100;
    console.log(p2.toFixed(2) + "%");
    p3 = p3/numbers*100;
    console.log(p3.toFixed(2) + "%");
    p4 = p4/numbers*100;
    console.log(p4.toFixed(2) + "%");
    p5 = p5/numbers*100;
    console.log(p5.toFixed(2) + "%");
}
histogram([5, 403, 225, 600, 888, 206]);