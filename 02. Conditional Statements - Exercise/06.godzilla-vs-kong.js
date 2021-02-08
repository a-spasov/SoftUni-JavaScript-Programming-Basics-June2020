function calculateBudget(arg1, arg2, arg3) {
    let budget = Number(arg1);
    let cast = Number(arg2);
    let clothes = Number(arg3);
    let decor = 0.1*budget;
    let totalCost = 0;
    if (cast > 150) {
        clothes = 0.9*clothes;
        totalCost = decor + cast*clothes;
        if (budget >= totalCost) {
            console.log("Action!");
            console.log(`Wingard starts filming with ${(budget-totalCost).toFixed(2)} leva left.`);
        } else {
            console.log("Not enough money!");
            console.log(`Wingard needs ${(totalCost-budget).toFixed(2)} leva more.`);
        }
    } else {
        totalCost = decor + cast*clothes;
        if (budget >= totalCost) {
            console.log("Action!");
            console.log(`Wingard starts filming with ${(budget-totalCost).toFixed(2)} leva left.`);
        } else {
            console.log("Not enough money!");
            console.log(`Wingard needs ${(totalCost-budget).toFixed(2)} leva more.`);
        } 
    }
}
calculateBudget(9587.88, 222, 55.68);