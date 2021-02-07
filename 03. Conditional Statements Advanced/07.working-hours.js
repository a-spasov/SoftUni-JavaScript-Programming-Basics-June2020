function workingHours(arg1, arg2) {
    let hour = Number(arg1);
    let day = arg2;
    if (hour>=10 && hour<=18 && day!="Sunday") {
        console.log("open");
    } else {
        console.log("closed");
    }
}
workingHours(16, "Monday");