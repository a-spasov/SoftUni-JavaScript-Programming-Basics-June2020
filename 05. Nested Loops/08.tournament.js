function tournament(input) {
    let days = Number(input[0]);
    let i = 1;
    let game = input[i];
    let currentResult;
    let winsPerDay = 0;
    let losesPesDay = 0;
    let totalWins = 0;
    let totalLoses = 0;
    let moneyPerDay = 0;
    let totalMoney = 0;
    for (let j = 1; j <= days; j++) {
        while (game != "Finish") {
            i++;
            currentResult = input[i];
            if (currentResult == "win") {
                winsPerDay++;
                totalWins++;
                moneyPerDay += 20;
            }
            if (currentResult == "lose") {
                losesPesDay++;
                totalLoses++;
            }
            i++;
            game = input[i];
        }
        if (winsPerDay > losesPesDay) {
            moneyPerDay = 1.1*moneyPerDay;
        }
        totalMoney += moneyPerDay;
        winsPerDay = 0;
        losesPesDay = 0;
        moneyPerDay = 0;
        if (j != days) {
            i++;
            game = input[i];
        }        
    }
    if (totalWins > totalLoses) {
        totalMoney = 1.2*totalMoney;
        console.log(`You won the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    }
    
}
tournament([2,
    "volleyball",
    "win",
    "football" ,
    "lose" ,
    "basketball" ,
    "win" ,
    "Finish" ,
    "golf" ,
    "win" ,
    "tennis" ,
    "win" ,
    "badminton" ,
    "win" ,
    "Finish" 
    ]);