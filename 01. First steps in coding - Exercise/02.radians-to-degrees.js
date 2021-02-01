function convertToDegrees(arg1) {
    let radians = Number(arg1);
    let degrees = radians*180/Math.PI;
    console.log(degrees.toFixed(0));
}
convertToDegrees("3.1416");