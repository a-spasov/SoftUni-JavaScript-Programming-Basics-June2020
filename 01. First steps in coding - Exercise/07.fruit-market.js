function fruitMarket(arg1, arg2, arg3, arg4, arg5) {
    let strawberryPrice = Number(arg1);
    let bananas = Number(arg2);
    let oranges = Number(arg3);
    let raspberries = Number(arg4);
    let strawberries = Number(arg5);
    let raspberryPrice = strawberryPrice/2;
    let orangePrice = 0.6*raspberryPrice;
    let bananaPrice = 0.2*raspberryPrice;
    let totalCost = strawberries*strawberryPrice + bananas*bananaPrice + oranges*orangePrice + raspberries*raspberryPrice;
    console.log(totalCost);
}
fruitMarket()