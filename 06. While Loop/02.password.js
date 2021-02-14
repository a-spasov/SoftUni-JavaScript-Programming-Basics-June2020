function password(input) {
    let user = input[0];
    let pass = input[1];
    let i = 2;
    let currentPass = input[i];
    while (currentPass != pass) {
        i++;
        currentPass = input[i];
    }
    console.log(`Welcome ${user}!`);
}
password();