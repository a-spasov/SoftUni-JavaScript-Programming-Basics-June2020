function journey(arg1, arg2){
    let budget = Number(arg1);
    let season = arg2;
    let destination;
    let totalCost = 0;
    let kind;
    if (budget <= 100) {
        if (season == "summer") {
            totalCost = 0.3*budget;
            destination = "Bulgaria";
            kind = "Camp";
        } else if (season == "winter") {
            totalCost = 0.7*budget;
            destination = "Bulgaria";
            kind = "Hotel";
        } 
    } else if (budget>100 && budget<=1000) {
        if (season == "summer") {
            totalCost = 0.4*budget;
            destination = "Balkans";
            kind = "Camp";
        } else if (season == "winter") {
            totalCost = 0.8*budget;
            destination = "Balkans";
            kind = "Hotel";             
        }
    } else {
        totalCost = 0.9*budget;
        destination = "Europe";
        kind = "Hotel";             
    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${kind} - ${totalCost.toFixed(2)}`);
}
journey(312, "summer");