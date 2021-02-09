function calculate(arg1, arg2, arg3) {
    let flower = arg1;
    let quantity = Number(arg2);
    let budget = Number(arg3);
    let totalCost = 0;
    switch (flower) {
        case "Roses":
            if (quantity > 80) {
                totalCost = quantity*5;
                totalCost = 0.9*totalCost;
            } else {
                totalCost = quantity*5;
            }
            break;
        case "Dahlias":
            if (quantity > 90) {
                totalCost = quantity*3.8;
                totalCost = 0.85*totalCost;
            } else {
                totalCost = quantity*3.8;
            }
            break;
        case "Tulips":
            if (quantity > 80) {
                totalCost = quantity*2.8;
                totalCost = 0.85*totalCost;
            } else {
                totalCost = quantity*2.8;
            }
            break;
        case "Narcissus":
            if (quantity < 120) {
                totalCost = quantity*3;
                totalCost = 1.15*totalCost;
            } else {
                totalCost = quantity*3;
            }
            break;
        case "Gladiolus":
            if (quantity < 80) {
                totalCost = quantity*2.5;
                totalCost = 1.2*totalCost;
            } else {
                totalCost = quantity*2.5;
            }
            break;
    }
    if (budget >= totalCost) {
        console.log(`Hey, you have a great garden with ${quantity} ${flower} and ${(budget-totalCost).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${(totalCost-budget).toFixed(2)} leva more.`);
    }
}
calculate("Roses", 55, 250);