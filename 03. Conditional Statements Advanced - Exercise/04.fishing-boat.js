function fishingBoat(arg1, arg2, arg3) {
    let budget = Number(arg1);
    let season = arg2;
    let fishermans = Number(arg3);
    let rent = 0;
    switch(season) {
        case "Spring":
            rent = 3000;
            break;
        case "Summer":
        case "Autumn":
            rent = 4200;
            break;
        case "Winter":
            rent = 2600;
            break;
    }
    if (fishermans <= 6) {
        rent = 0.9*rent;
    } else if (fishermans >=7 && fishermans<=11) {
        rent = 0.85*rent;
    } else {
        rent = 0.75*rent;
    }
    if (fishermans%2==0 && season!="Autumn") {
        rent = 0.95*rent;
    }
    if (budget>=rent) {
        console.log(`Yes! You have ${(budget-rent).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(rent-budget).toFixed(2)} leva.`);
    }
}
fishingBoat(3600, "Autumn", 6);