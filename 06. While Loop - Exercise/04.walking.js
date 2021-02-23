function walking(input) {
    let steps;
    let totalSteps = 10000;
    let i = 0;
    while (i < input.length) {
        steps = input[i];
        if ( steps == "Going home") {
            i++;
            continue;
        } else {
            steps = Number(steps);
            totalSteps = totalSteps - steps;
        }
        i++;
    }
    if (totalSteps > 0) {
        console.log(`${totalSteps} more steps to reach goal.`)
    } else {
        console.log(`Goal reached! Good job!`);
        console.log(`${Math.abs(totalSteps)} steps over the goal!`);
    }
}
walking([ '1500', '300', '2500', '3000', 'Going home', '200' ]);