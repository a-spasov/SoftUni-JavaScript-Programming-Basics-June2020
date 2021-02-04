function sumSeconds(arg1, arg2, arg3) {
    let timeFirst = Number(arg1);
    let timeSecond = Number(arg2);
    let timeThird = Number(arg3);
    let timeAll = timeFirst + timeSecond + timeThird;
    if (timeAll%60 <= 9) {
        console.log(`${Math.floor(timeAll/60)}:0${timeAll%60}`);
    } else {
        console.log(`${Math.floor(timeAll/60).toFixed(0)}:${timeAll%60}`);
    }
}
sumSeconds(40, 50, 10);