function numberInterval(arg1) {
    let numA = Number(arg1);
    if (numA < 100) {
        console.log("Less than 100");
    } else if (numA > 200) {
        console.log("Greater than 200");
    } else {
        console.log("Between 100 and 200");
    }
}
numberInterval(100);