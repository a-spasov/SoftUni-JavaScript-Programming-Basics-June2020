function fruitShop(arg1, arg2, arg3) {
    let fruit = arg1;
    let day = arg2;
    let quantity = Number(arg3);
    let totalPrice = 0;
    switch (day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            switch (fruit) {
                case "banana":
                    totalPrice = quantity*2.5;
                    console.log(totalPrice.toFixed(2));
                    break;
                case "apple":
                    totalPrice = quantity*1.2;
                    console.log(totalPrice.toFixed(2));
                    break;
                case "orange":
                    totalPrice = quantity*0.85;
                    console.log(totalPrice.toFixed(2));
                    break;
                case "grapefruit":
                    totalPrice = quantity*1.45;
                    console.log(totalPrice.toFixed(2));
                    break;
                case "kiwi":
                    totalPrice = quantity*2.7;
                    console.log(totalPrice.toFixed(2));
                    break;
                case "pineapple":
                    totalPrice = quantity*5.5;
                    console.log(totalPrice.toFixed(2));
                    break;
                case "grapes":
                    totalPrice = quantity*3.85;
                    console.log(totalPrice.toFixed(2));
                    break;
                default:
                    console.log("error");
                    break;
            }
            break;
        case "Saturday":
        case "Sunday":
            switch (fruit) {
                case "banana":
                    totalPrice = quantity*2.7;
                    console.log(totalPrice.toFixed(2));
                    break;
                case "apple":
                    totalPrice = quantity*1.25;
                    console.log(totalPrice.toFixed(2));
                    break;
                case "orange":
                    totalPrice = quantity*0.9;
                    console.log(totalPrice.toFixed(2));
                    break;
                case "grapefruit":
                    totalPrice = quantity*1.6;
                    console.log(totalPrice.toFixed(2));
                    break;
                case "kiwi":
                    totalPrice = quantity*3;
                    console.log(totalPrice.toFixed(2));
                    break;
                case "pineapple":
                    totalPrice = quantity*5.6;
                    console.log(totalPrice.toFixed(2));
                    break;
                case "grapes":
                    totalPrice = quantity*4.2;
                    console.log(totalPrice.toFixed(2));
                    break;
                default:
                    console.log("error");
                    break;
            }            
            break;
        default:
            console.log("error");
            break;        
    }
}
fruitShop("apple", "uesday", 2);