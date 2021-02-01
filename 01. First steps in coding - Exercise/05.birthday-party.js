function birthdayParty(arg1) {
    let rent = Number(arg1);
    let cakePrice = 0.2*rent;
    let drinks = 0.55*cakePrice;   //45% smaller than cake's price
    let clown = rent/3;  
    let totalCost = rent + cakePrice + drinks + clown;
    console.log(totalCost);
}
birthdayParty("3720");