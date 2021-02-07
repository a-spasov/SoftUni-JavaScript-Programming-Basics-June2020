function numberRange(arg1) {
    let input = Number(arg1);
    if (input>=-100 && input<=100 && input!=0) {
        console.log("Yes");
    } else {
        console.log("No");
    }
}
numberRange(-526);