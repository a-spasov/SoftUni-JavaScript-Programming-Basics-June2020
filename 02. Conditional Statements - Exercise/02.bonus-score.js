function bonusScore(arg1) {
    let numA = Number(arg1);
    let bonus = 0;
    if (numA <= 100) {
        bonus = 5;      
    } else if (numA > 1000) {
        bonus=0.1*numA;
    } else {
        bonus= 0.2*numA;
    }
    if (numA%2 === 0) {
        bonus = bonus + 1;
    }
    if (numA%10 === 5) {
        bonus = bonus + 2;
    }
    console.log(bonus);
    console.log(numA+bonus);
}
bonusScore(2703)