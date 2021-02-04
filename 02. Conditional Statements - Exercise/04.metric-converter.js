function metricConverter(arg1, arg2, arg3) {
    let convertNumber = Number(arg1);
    let unitIn = arg2;
    let unitOut = arg3;
    if (unitIn === "m") {
        if (unitOut === "cm") {
            convertNumber = convertNumber*100;
        }
        if (unitOut === "mm") {
            convertNumber = convertNumber*1000;
        }
    }
    if (unitIn === "cm") {
        if (unitOut === "m") {
            convertNumber = convertNumber/100;
        }
        if (unitOut === "mm") {
            convertNumber = convertNumber*10;
        }
    }
    if (unitIn === "mm") {
        if (unitOut === "m") {
            convertNumber = convertNumber/1000;
        }
        if (unitOut === "cm") {
            convertNumber = convertNumber/10;
        }
    }
    console.log(convertNumber.toFixed(3));
}
metricConverter("5.96", "m", "mm");