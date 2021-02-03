function toyShop(arg1, arg2, arg3, arg4, arg5, arg6) {
    let excursionPrice = Number(arg1);
    let puzzles = Number(arg2);
    let dolls = Number(arg3);
    let bears = Number(arg4);
    let minions = Number(arg5);
    let cars = Number(arg6);
    let order = puzzles + dolls + bears + minions + cars;
    let income = puzzles*2.6 + dolls*3 + bears*4.1 + minions*8.2 + cars*2;
    let rent = 0;
    if (order >= 50) {
        income = 0.75*income;
        rent = income*0.1;
    } else {
        rent = income*0.1;
    }
    if ((income-rent) >= excursionPrice) {
        income = income - rent;
        console.log(`Yes! ${(income-excursionPrice).toFixed(2)} lv left.`);
    } else {
        income = income - rent;
        console.log(`Not enough money! ${(excursionPrice-income).toFixed(2)} lv needed.`);
    }
}
toyShop(320, 8, 2, 5, 5, 1);