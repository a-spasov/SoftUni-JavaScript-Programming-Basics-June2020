function balance(input) {
    let i = 0;
    let transaction = input[i];
    let totalMoney = 0;
    while (i < input.length) {
        if (transaction == "NoMoreMoney") {
            break;
        }
        transaction = Number(transaction);
        if (transaction < 0) {
            console.log("Invalid operation!");
            break;
        }
        console.log(`Increase: ${transaction.toFixed(2)}`);
        totalMoney = totalMoney + transaction;
        i++;
        transaction = input[i];
    }
    console.log(`Total: ${totalMoney.toFixed(2)}`);
}
balance([20, 100, 600, "NoMoreMoney" ])