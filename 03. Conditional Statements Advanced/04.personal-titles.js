function personalTitle(arg1, arg2) {
    let age = Number(arg1);
    let gender = arg2;
    if (age >= 16) {
        if (gender == "f") {
            console.log("Ms.");
        } else if (gender == "m") {
            console.log("Mr.");
        }
    } else {
        if (gender == "f") {
            console.log("Miss");
        } else if (gender == "m") {
            console.log("Master");
        }
    }
}
personalTitle(6, "f");