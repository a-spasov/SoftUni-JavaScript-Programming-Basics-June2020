function vacation(input) {
    let neededMoney = Number(input[0]);
    let money = Number(input[1]);
    let i = 2;
    let command;
    let currentMoney = 0;
    let countSpendMoney = 0;
    let days = 0;
    while (i < input.length) {
        days++;
        command = input[i];
        if (command == "spend") {
            countSpendMoney++;
            if (countSpendMoney == 5) {
                console.log("You can't save the money.");
                console.log(days);
                break;
            }
            i++;
            currentMoney = Number(input[i]);
            money = money - currentMoney;
            if (money <= 0) {
                money = 0;
            }
        }
        if (command == "save") {
            countSpendMoney = 0;
            i++;
            currentMoney = Number(input[i]);
            money = money + currentMoney;
            if (money >= neededMoney) {
                console.log(`You saved the money for ${days} days.`);
                break;
            }
        }       
        i++;
    }
}
vacation(["100",
"50",
"save",
"60"
])

