function skiTrip(arg1, arg2, arg3) {
    let days = Number(arg1);
    let room = arg2;
    let rate = arg3;
    let totalCost = 0;
    switch (room) {
        case "room for one person":
            totalCost = (days-1)*18;
            break;
        case "apartment":
            totalCost = (days-1)*25;
            if (days<10) {
                totalCost = 0.7*totalCost;
            } else if (days>=10 && days<=15) {
                totalCost = 0.65*totalCost;
            } else if (days>15) {
                totalCost = 0.5*totalCost;
            }
            break;
        case "president apartment":
            totalCost = (days-1)*35;
            if (days<10) {
                totalCost = 0.9*totalCost;
            } else if (days>=10 && days<=15) {
                totalCost = 0.85*totalCost;
            } else if (days>15) {
                totalCost = 0.8*totalCost;
            }
            break;
    }
    if (rate == "positive") {
        totalCost = 1.25*totalCost;
    } else if (rate == "negative") {
        totalCost = 0.9*totalCost;
    }
    console.log(totalCost.toFixed(2));
}
skiTrip(14, "apartment", "positive");