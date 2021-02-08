function swimmingRecord(arg1, arg2, arg3) {
    let record = Number(arg1);
    let distance = Number(arg2);
    let secondsPerMeter = Number(arg3);
    let delay = (Math.floor(distance/15))*12.5;
    let time = distance*secondsPerMeter + delay;
    if (time < record) {
        console.log(`Yes, he succeeded! The new world record is ${time.toFixed(2)} seconds.`)
    } else {
        console.log(`No, he failed! He was ${(time-record).toFixed(2)} seconds slower.`)
    }
}
swimmingRecord(10464, 1500, 20)