function traveling(input) {
    let destination = input[0];
    let neededMoney = Number(input[1]);
    let i = 2;
    let savedMoney = input[i];
    let sum = 0;
    for (i; i < input.length; i++) {
        savedMoney = input[i];
        if (savedMoney == "End") {
            break;
        } else {
            savedMoney = Number(savedMoney);
        }
        sum += savedMoney;
        if (sum >= neededMoney) {
            console.log(`Going to ${destination}!`);
            sum = 0;
            i++;
            destination = input[i];
            i++;
            neededMoney = Number(input[i]);
        }
    }
}
traveling (["Greece",
    1000,
    200,
    200,
    300,
    100,
    150,
    240,
    "Spain",
    1200,
    300,
    500,
    193,
    423,
    "End"])