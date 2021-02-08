function tradeCommission(arg1, arg2) {
    let city = arg1;
    let income = Number(arg2);
    let profit = 0;
    switch (city) {
        case "Sofia":
            if (income>=0 && income<=500) {
                profit = 0.05*income;
                console.log(profit.toFixed(2));
            } else if (income>500 && income<=1000) {
                profit = 0.07*income;
                console.log(profit.toFixed(2));
            } else if (income>1000 && income<=10000) {
                profit = 0.08*income;
                console.log(profit.toFixed(2));
            } else if (income>10000) {
                profit = 0.12*income;
                console.log(profit.toFixed(2));
            } else {
                console.log("error");
            }
            break;
        case "Varna":
            if (income>=0 && income<=500) {
                profit = 0.045*income;
                console.log(profit.toFixed(2));
            } else if (income>500 && income<=1000) {
                profit = 0.075*income;
                console.log(profit.toFixed(2));
            } else if (income>1000 && income<=10000) {
                profit = 0.1*income;
                console.log(profit.toFixed(2));
            } else if (income>10000) {
                profit = 0.13*income;
                console.log(profit.toFixed(2));
            } else {
                console.log("error");
            }
            break;
        case "Plovdiv":
            if (income>=0 && income<=500) {
                profit = 0.055*income;
                console.log(profit.toFixed(2));
            } else if (income>500 && income<=1000) {
                profit = 0.08*income;
                console.log(profit.toFixed(2));
            } else if (income>1000 && income<=10000) {
                profit = 0.12*income;
                console.log(profit.toFixed(2));
            } else if (income>10000) {
                profit = 0.145*income;
                console.log(profit.toFixed(2));
            } else {
                console.log("error");
            }
            break;
        default:
            console.log("error");
            break;
    }   
}
tradeCommission("Sofa", 1500);