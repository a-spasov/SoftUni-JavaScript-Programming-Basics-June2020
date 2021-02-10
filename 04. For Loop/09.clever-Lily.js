function calculate(input) {
    let years = Number(input[0]);
    let price = Number(input[1]);
    let toyPrice = Number(input[2]);
    let toySum = 0;
    let savedMoney = 0;
    for (let i = 1; i <= years; i++) {
        if (i%2 == 1) {
            toySum += 1;
        } else {
            savedMoney = (savedMoney + i/2*10) - 1;
        }
    }
    savedMoney = savedMoney + toySum*toyPrice;
    if (savedMoney >= price) {
        let result = savedMoney - price;
        console.log(`Yes! ${result.toFixed(2)}`);
    } else {
        let result = price - savedMoney;
        console.log(`No! ${result.toFixed(2)}`);
    }
}
calculate (["21", "1570.98", "3"]);