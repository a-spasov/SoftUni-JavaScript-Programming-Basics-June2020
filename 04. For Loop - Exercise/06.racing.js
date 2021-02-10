function racing(arg1, arg2, arg3) {
    let fuel = Number(arg1);
    let fuelConsumption = Number(arg2);
    let laps = Number(arg3);
    /*fuel = fuel - fuelConsumption;
    for (let i = 2; i <= laps; i++) {
        fuelConsumption = fuelConsumption - 0.1;
        fuel = fuel - fuelConsumption;
        if (fuel < 0) {
            console.log(`You are out of fuel in round ${i}!`);
            break;
        }
    }
    if (fuel >=0) {
        console.log("Congrats! You won the race!");
    }*/
    for (let i = 0; i < laps; i++) {
        fuel -= fuelConsumption - 0.1;
        if (fuel <= 0) {
            console.log(`You are out of fuel in round ${i}!`);
            break;
        }
    }
    if (fuel > 0) {
        console.log("Congrats! You won the race!"); 
    }  
}
racing(50, 4.3, 30);