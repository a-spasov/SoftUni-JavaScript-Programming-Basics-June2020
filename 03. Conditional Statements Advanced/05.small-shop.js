function smallShop(arg1, arg2, arg3) {
    let product = arg1;
    let town = arg2;
    let quantity = Number(arg3);
    let totalPrice = 0;
    switch (product) {
        case "coffee":
            switch (town){
                case "Sofia":
                    totalPrice = quantity*0.5;
                    break;
                case "Plovdiv":
                    totalPrice = quantity*0.4;
                    break;
                case "Varna":
                    totalPrice = quantity*0.45;
                    break;
            }
            break;
        case "water":
            switch (town){
                case "Sofia":
                    totalPrice = quantity*0.8;
                    break;
                case "Plovdiv":
                    totalPrice = quantity*0.7;
                    break;
                case "Varna":
                    totalPrice = quantity*0.7;
                    break;
            }
            break;
        case "beer":
            switch (town){
                case "Sofia":
                    totalPrice = quantity*1.2;
                    break;
                case "Plovdiv":
                    totalPrice = quantity*1.15;
                    break;
                case "Varna":
                    totalPrice = quantity*1.1;
                    break;
            }
            break;
        case "sweets":
            switch (town){
                case "Sofia":
                    totalPrice = quantity*1.45;
                    break;
                case "Plovdiv":
                    totalPrice = quantity*1.30;
                    break;
                case "Varna":
                    totalPrice = quantity*1.35;
                    break;
            }
            break;
        case "peanuts":
            switch (town){
                case "Sofia":
                    totalPrice = quantity*1.60;
                    break;
                case "Plovdiv":
                    totalPrice = quantity*1.50;
                    break;
                case "Varna":
                    totalPrice = quantity*1.55;
                    break;
            }
            break;
    }
    console.log(totalPrice);
}
smallShop("peanuts", "Plovdiv", 1);