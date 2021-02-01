function charity(arg1, arg2, arg3, arg4, arg5) {
    let days = Number(arg1);
    let cookers = Number(arg2);
    let cakesPerCooker = Number(arg3);
    let wafflesPerCooker = Number(arg4);
    let pancakesPerCooker = Number(arg5);
    let totalCost = days*cookers*(cakesPerCooker*45 + wafflesPerCooker*5.8 + pancakesPerCooker*3.2);
    totalCost = totalCost - totalCost/8;
    console.log(totalCost);
}
charity(131, 5, 9, 33, 46);
    