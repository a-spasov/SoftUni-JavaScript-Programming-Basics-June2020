function addTime(arg1, arg2) {
    let hours = Number(arg1);
    let minutes = parseInt(arg2);
    minutes = minutes + 15;
    if (minutes >= 60) {
        hours = hours + 1;
        if (hours === 24) {
            hours = 0;
        }
        if (minutes%60 < 10) {
            console.log(`${hours}:0${minutes%60}`);
        } else if (minutes%60 >= 10) {
            console.log(`${hours}:${minutes%60}`);
        }
    } else {
        console.log(`${hours}:${minutes}`);
    }
}
addTime(23, 59);