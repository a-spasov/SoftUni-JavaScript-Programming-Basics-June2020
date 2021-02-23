function calculate(arg1) {
    let money = Number(arg1);
    let coins = 0;
    while (money != 0) {
        if (money >= 2) {
            coins = coins + Math.floor(money/2);
            money = money % 2;
            money = Number(money.toFixed(2));
        }
        if (money<2 && money>= 1) {
            coins = coins + Math.floor(money/1);
            money = money % 1;
            money = Number(money.toFixed(2));
        }
        if (money<1 && money>=0.5) {
            coins = coins + Math.floor(money/0.5);
            money = money % 0.5;
            money = Number(money.toFixed(2));
        }
        if (money<0.5 && money>=0.2) {
            coins = coins + Math.floor(money/0.2);
            money = money % 0.2;
            money = Number(money.toFixed(2));            
        }
        if (money<0.2 && money>=0.1) {
            coins = coins + Math.floor(money/0.1);
            money = money % 0.1;
            money = Number(money.toFixed(2));
        }
        if (money<0.1 && money>=0.05) {
            coins = coins + Math.floor(money/0.05);
            money = money % 0.05;
            money = Number(money.toFixed(2));
        }
        if (money<0.05 && money>=0.02) {
            coins = coins + Math.floor(money/0.02);
            money = money % 0.02;
            money = Number(money.toFixed(2));        
        }
        if (money<0.02 && money>=0.01) {
            coins = coins + Math.floor(money/0.01);
            money = money % 0.01;
            money = Number(money.toFixed(2));
        }
    }
    console.log(coins);
}
calculate(3);