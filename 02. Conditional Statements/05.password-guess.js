function passwordGuess(arg1) {
    let password = arg1;
    if (password === "s3cr3t!P@ssw0rd") {
        console.log("Welcome");
    } else {
        console.log("Wrong password!");
    }
}
passwordGuess(`s3cr3t!P@ssw0rd`);